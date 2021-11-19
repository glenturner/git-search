import React, { useEffect } from 'react';
import { Flex } from '..';
import SR from 'scrollreveal';
import { LandingImage } from '../../Assets';
import style from './style.module.scss';

export const LandingSection = () => {

    useEffect(() => {
        SR().reveal('#landing_copy', { opacity: 0.2, viewFactor: 0.3, scale: 0.9, delay: 0, reset: false, distance: '50px', origin: 'left' });
        SR().reveal('#landing_image', { opacity: 0.2, viewFactor: 0.3, scale: 0.9, delay: 0, reset: false, distance: '50px', origin: 'right' });
    }, [])

    return (
        <Flex justify="space-evenly" className={style.landing_wrapper}>
            <Flex
                id="landing_copy"
                className={style.copy_section}
                center
                column>
                <h1>Find a programmer<br /> <b>that transforms companies.</b></h1>
                <div className={style.accent} />
                <span className={style.grabber}>
                    As the world evolves, technology can be a useful resource to ignite a business, we aim to provide useful resources to help your business thrive.
                </span>
            </Flex>
            <Flex
                className={style.image_section}
                id="landing_image"
                center
                style={{ flex: 1, backgroundImage: `url(${LandingImage}` }}>
                {/* <img
                   draggable="false"
                   alt='Landing'
                  src={LandingImage}
                /> */}
            </Flex>
        </Flex>
    );
};
