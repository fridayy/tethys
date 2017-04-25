/**
 * Created by bnjm on 12/17/16.
 */
import React from 'react';
import logo from '../../logo.svg'
import './Header.css';
import {PageHeader} from 'react-bootstrap';

const Header = () => {
    return (
        <PageHeader>
            <img src={logo} className="App-logo" alt="logo"/>
            Tethys ReactJS
        </PageHeader>
    );
};
export default Header;