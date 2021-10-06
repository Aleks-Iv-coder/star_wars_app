import React, { useEffect, useState } from 'react';
import { Creatures } from '../../modules/creatures/Creatures';
import { CreatureCard } from '../../modules/cards/CreatureCard';
import { service } from '../../api/service';
import { Popup } from 'devextreme-react/popup';
import ArrayStore from 'devextreme/data/array_store';
import DataSource from 'devextreme/data/data_source';
import './styles.css'

export const CreaturesPage = () => {
    const [creatureData, setCreatureData] = useState([]);
    const [isCreature, setIsCreature] = useState(false);
    const [creaturesList, setCreaturesList] = useState([]);
    const [pagingUrl, setPagingUrl] = useState({});

    useEffect(() => {
        service.getCreaturesList()
        .then((res) => {
            setPagingUrl({...pagingUrl,
                nextUrl: res[0].next,
                prevUrl: res[0].prev,
            });
            setCreaturesList(res);
        });
    }, []);

    const creaturesStore = new DataSource({
        store: new ArrayStore({
            key: "creatures_url",
            data: creaturesList,
        }),
    });

    const getCreatureData = (url => {
        service.getResource(url)
        .then(res => setCreatureData(res));
    });

    const openPopup = (e) => {
        const { data } = e;
        getCreatureData(data.creatures_url);
        setIsCreature(true);
    };

    const hidePopup = () => {
        setIsCreature(false);
        setCreatureData([]);
    }

    const nextPage = (event) => {
        if(event === "next") {
            service.getCreaturesList(pagingUrl.nextUrl)
            .then((res) => {
                setPagingUrl({...pagingUrl,
                    nextUrl: res[0].next,
                    prevUrl: res[0].prev,
                });
                setCreaturesList(res);
            });
        } else if (event === "prev") {
            service.getCreaturesList(pagingUrl.prevUrl)
            .then((res) => {
                setPagingUrl({...pagingUrl,
                    nextUrl: res[0].next,
                    prevUrl: res[0].prev,
                });
                setCreaturesList(res);
            });
        }
    }

    const onChangePage = (e) => {
        let event = e.currentTarget.getAttribute("name");
        nextPage(event);
    }

    return (
        <div className={"wraper"}>
            <h2>Creatures </h2>
            <h3>A Creature resource is an individual person or character within the Star Wars universe.</h3>
            { 
                !isCreature ? <Creatures onClick={openPopup} creaturesList={creaturesStore} onChangePage={onChangePage}/> : 
                <Popup
                    visible={isCreature}
                    onHiding={hidePopup}
                    dragEnabled={false}
                    closeOnOutsideClick={true}
                    showCloseButton={true}
                    showTitle={true}
                    title="Custom Information"
                    container=".dx-viewport"
                    width={700}
                    height={700}
                >
                    <CreatureCard customeData={creatureData}/>
                </Popup>
            }
        </div>
    );
};