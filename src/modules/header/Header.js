import React from 'react';
import { NavLink } from 'react-router-dom';
import  './styles.css';

console.log('container');

export const Header = () => {
    return (
        <div className={'header'} >
            <div className={'container'}>
                <div className={'logo'}>
                    <p>Logo</p>
                </div>
                <div className={'nav'}>
                <ul className={'nav-list'}>
                    <li>
                        <NavLink to='/creatures' className={'nav-item'}>Creatures</NavLink>
                    </li>
                    <li className={'nav-item'}>
                        <NavLink to='/planets' className={'nav-item'} >Planets</NavLink>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    )
}