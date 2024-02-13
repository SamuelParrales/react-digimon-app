import { useEffect } from "react";
import { useRef } from "react";
import { useCallback } from "react";
import headeJPG from '/header.jpg';

const backgroundImageHtml = (element) => {

    if (window.innerWidth > 768) {

        if (element) {
            element.style.backgroundImage = `
        linear-gradient(
            to right, rgb(0 0 0 /.8) 0%, rgb(0 0 0 /.6) 25%, rgb(0 0 0 /.3) 45% , transparent 50%
        ),url(${headeJPG})`;
        }
        return;
    }
    if (element) {

        element.style.backgroundImage = `
        linear-gradient(
            to top, rgb(0 0 0 /.8) 0%, rgb(0 0 0 /.6) 25%, rgb(0 0 0 /.3) 45% , transparent 50%
        ),url(${headeJPG})`;


    }
}

export const HomeHeader = () => {

    const refHomeHeader = useRef(null);
    const onResize = useCallback(() => {
        backgroundImageHtml(refHomeHeader.current)
    }, [])

    useEffect(() => {

        const timer = setTimeout(() => {
            backgroundImageHtml(refHomeHeader.current)
        }, 100)

        window.addEventListener('resize', onResize)
        return () => {
            window.removeEventListener('resize', onResize);
            clearTimeout(timer);
        }
    }, [onResize])


    return (
        <header ref={refHomeHeader} className="home-header">
            <div className="home-header__container">
                <h1>App to find digimon.</h1>
                <p>More than 1000 digimon available.</p>
            </div>

        </header>
    )
}
