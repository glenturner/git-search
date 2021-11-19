import React from "react";
import { Flex } from "../Flex";
import style from "./style.module.scss";
import { AppLogo } from "..";

// I put this together because the provided Header was breaking on Firefox -- added by Glen Turner.
export const Navbar = () => {

    return (
        <Flex id="app-header" row className={style.header_wrapper} align="center" justify="space-between">
            <AppLogo />
            <Flex
                justify="flex-end"
                style={{ alignSelf: 'flex-start', flex: 1 }}>
            </Flex>
        </Flex>
    );
};
