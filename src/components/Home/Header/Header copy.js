import React, { useEffect, useState } from 'react';
import classes from "../../styles/Header.module.css"



const Header = ({ darkMode, setDarkMode }) => {

    useEffect(() => {
        document.documentElement.style.setProperty('--bg-color', darkMode ? "#1e293b" : "#f8fafc")
    }, [darkMode])
    return (
        <>
            <section className={`relative h-[88vh] overflow-hidden`}>
                <div class="hero-content flex-col lg:flex-row-reverse absolute z-30 h-screen md:h-[80vh] md:px-16">
                    <img
                        src="/assets/img/sadi.png"
                        draggable={false}
                        class="max-w-sm rounded-lg h-80 -mt-16"
                    />
                    <div className="pr-14">
                        <h1 class="dark:text-slate-300 text-slate-800 text-5xl font-bold">Box Office News!</h1>
                        <p class="dark:text-slate-300 text-slate-800 py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary relative z-[1]">Get Started</button>
                    </div>
                </div>
                <div className={classes.waves}></div>
            </section>
        </>
    );
};

export default Header;