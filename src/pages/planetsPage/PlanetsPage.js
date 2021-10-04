import React from 'react';
import { Planets } from '../../modules/planets/Planets';
import './styles.css'

export const PlanetsPage = () => {
    return (
        <div className={'wraper'}>
            <h2> Planets Page</h2>
            <Planets />
        </div>
    );
};