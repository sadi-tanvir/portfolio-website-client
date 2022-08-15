import React from 'react';

const Icons = () => {
    return (
        <div>

        </div>
    );
};

const XMarkIcon = () => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
        </>
    );
};

const BarsIcon = () => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
        </>
    );
};

const BrightnessIcon = () => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brightness-up" width="25"  fill="#ED4C67" height="25" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <circle cx="12" cy="12" r="3" /> <line x1="12" y1="5" x2="12" y2="3" /> <line x1="17" y1="7" x2="18.4" y2="5.6" /> <line x1="19" y1="12" x2="21" y2="12" /> <line x1="17" y1="17" x2="18.4" y2="18.4" /> <line x1="12" y1="19" x2="12" y2="21" /> <line x1="7" y1="17" x2="5.6" y2="18.4" /> <line x1="6" y1="12" x2="4" y2="12" /> <line x1="7" y1="7" x2="5.6" y2="5.6" /> </svg>
        </>
    );
};

const MoonIcon = () => {
    return (
        <>
            <svg class="" width="25" height="25" stroke="currentColor" fill="#cbd5e1" stroke-width="2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M32 256c0-123.8 100.3-224 223.8-224c11.36 0 29.7 1.668 40.9 3.746c9.616 1.777 11.75 14.63 3.279 19.44C245 86.5 211.2 144.6 211.2 207.8c0 109.7 99.71 193 208.3 172.3c9.561-1.805 16.28 9.324 10.11 16.95C387.9 448.6 324.8 480 255.8 480C132.1 480 32 379.6 32 256z"/></svg>
        </>
    );
};

export { XMarkIcon, BarsIcon,BrightnessIcon,MoonIcon }
export default Icons;