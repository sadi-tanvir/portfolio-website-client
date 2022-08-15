/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import classes from "../../styles/Header.module.css"



const Header = ({ darkMode, setDarkMode }) => {

    useEffect(() => {
        document.documentElement.style.setProperty('--bg-color', darkMode ? "#1e293b" : "#f8fafc")
    }, [darkMode])
    return (
        <>
            <div className="hero min-h-[90vh]" style={{ backgroundImage: `url(/assets/img/header-bg5.jpg)` }}>
                <div className="hero-overlay bg-slate-900 bg-opacity-0 dark:bg-opacity-90"></div>
                <div className="hero-content text-neutral-content md:px-8 flex flex-col md:flex-row-reverse">
                    <img
                        src="/assets/img/sadi.png"
                        className="max-w-sm rounded-full md:-mt-20"
                    />
                    <div className="md:pr-16">
                        <h1 className="dark:text-slate-300 text-slate-800 text-4xl font-bold">Hello!, I'm 
                        <span className="dark:text-primary text-secondary"> Tanvir Hossain Sadi</span>
                        </h1>
                        <p className="dark:text-slate-300 text-slate-800 py-6 text-justify">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <a href="https://drive.google.com/file/d/18_yrojrNo-bj6iL-qJkxCxxK3LYfHA0e/view?usp=sharing" rel="noreferrer" target="_blank" className="btn btn-secondary dark:btn-primary dark:text-slate-100 text-slate-100">Download my Resume</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;