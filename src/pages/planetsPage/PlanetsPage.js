import React, { useEffect, useState } from 'react';
import ArrayStore from 'devextreme/data/array_store';
import DataSource from 'devextreme/data/data_source';
import { Planets } from '../../modules/planets/Planets';
import { PlanetCard } from '../../modules/cards/PlanetCard';
import { Popup } from 'devextreme-react/popup';
import { service } from '../../api/service';
import './styles.css';


export const PlanetsPage = () => {
    const [planetData, setPlanetData] = useState([]);
    const [planetsList, setPlanetsList] = useState([]);
    const [isPlanet, setIsPlanet] = useState(false);
    const [pagingUrl, setPagingUrl] = useState({});

        useEffect(() => {
        service.getPlanetsList()
        .then((res) => {
            setPagingUrl({...pagingUrl,
                nextUrl: res[0].next,
                prevUrl: res[0].prev,
            });
            setPlanetsList(res);
        });
    }, []);

    const planetsStore = new DataSource({
        store: new ArrayStore({
            key: "planet_url",
            data: planetsList,
        }),
    });

    const getplPlanetData = (url => {
        service.getResource(url)
        .then(res => setPlanetData(res));
    });

    const openPopup = (e) => {
        const { data } = e;
        getplPlanetData(data.planet_url);
        setIsPlanet(true);
    };

    const hidePopup = () => {
        setIsPlanet(false);
        setPlanetData([]);
    }

    const nextPage = (event) => {
        if(event === "next") {
            service.getPlanetsList(pagingUrl.nextUrl)
            .then((res) => {
                setPagingUrl({...pagingUrl,
                    nextUrl: res[0].next,
                    prevUrl: res[0].prev,
                });
                setPlanetsList(res);
            });
        } else if (event === "prev") {
            service.getPlanetsList(pagingUrl.prevUrl)
            .then((res) => {
                setPagingUrl({...pagingUrl,
                    nextUrl: res[0].next,
                    prevUrl: res[0].prev,
                });
                setPlanetsList(res);
            });
        }
    }

    const onChangePage = (e) => {
        let event = e.currentTarget.getAttribute("name");
        nextPage(event);
    }

    return (
        <div className={"wraper"}>
            <h2> Planets </h2>
            <h3>A Planet resource is a large mass, planet or planetoid in the Star Wars Universe, at the time of 0 ABY.</h3>
            { 
                !isPlanet ? <Planets onClick={openPopup} planetsList={planetsStore} onChangePage={onChangePage}/> : 
                <Popup
                    visible={isPlanet}
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
                    <PlanetCard customeData={planetData}/>
                </Popup>
            }
        </div>
    );
};