import React from 'react';
import { Creatures } from '../../modules/creatures/Creatures';
import {service } from '../../api/service';
import './styles.css'

export const CreaturesPage = () => {

    service.getPlanetsList()
    .then(res => {
        console.log(res);
    });

    service.getCustomeData('https://swapi.dev/api/people/1/')
    .then(res => {
        console.log(res);
    });

    return (
        <div className={'wraper'}>
            <h2> Page Creatures </h2>
            <Creatures />
        </div>
    );
};