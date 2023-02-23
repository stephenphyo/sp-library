/* Source: https://usehooks.com/useWindowSize/ */

import { useState, useEffect } from 'react';
export function useWindowSize() {

    /* useState */
    // Initialize state with undefined width/height so server and client renders match
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    /* useEffect */
    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        /* Event Listener */
        // Add event listener
        window.addEventListener("resize", handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
        // Empty array ensures that effect is only run on mount
    }, []);

  return windowSize;
}