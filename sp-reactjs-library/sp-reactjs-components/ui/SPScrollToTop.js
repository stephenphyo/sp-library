import React, { useEffect, useRef } from 'react';

function ScrollToTop(props) {

    /* useRef */
    const startRef = useRef();

    /* useEffect */
    useEffect(() => {
        startRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [startRef, props.children.length]);

    return (
        <div className={props.className}>
            <div ref={startRef}></div>
            {props.children}
        </div>
    );
}

export default ScrollToTop;