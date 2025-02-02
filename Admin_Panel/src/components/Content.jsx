import React from 'react';
import ContentHeader from './ContentHeader';
import User from './User'
import Decision from './Decision'
import Session from './Session'
import '../styles/Content.css'

const Content = () => {
    return (
        <div className='content'>
            <ContentHeader />
            <User />
            <Decision />
            <Session />
        
        </div>
    );
}

export default Content;
