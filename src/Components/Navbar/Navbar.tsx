import React from "react";
import { Flex } from "../Flex";
import style from "./style.module.scss";
import { AppLogo } from "..";

export const Navbar = () => {
    return (
        <Flex
            className={style.header_wrapper}
            id="app-header"
            row
            align="center"
            justify="space-between">
            <AppLogo />
            <Flex
                justify="flex-end"
                style={{ alignSelf: 'flex-start', flex: 1 }}>
            </Flex>
        </Flex>
    );
};
