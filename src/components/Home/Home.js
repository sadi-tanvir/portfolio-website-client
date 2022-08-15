import React from 'react';
import Header from './Header/Header';

const Home = ({darkMode,setDarkMode}) => {
    return (
        <div>
            <Header  darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
    );
};

export default Home;