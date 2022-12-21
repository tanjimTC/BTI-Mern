import React from 'react';
import Hero from '../components/Hero';
import Home from '../components/Home';

const HomeContainer = ({user}) => {
    return (
        <div>
            <Hero user={user}/>
            <Home />
        </div>
    );
};

export default HomeContainer;