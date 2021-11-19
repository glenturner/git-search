import React from 'react'
import { Logo } from '../../Assets';
import { Flex } from '..';

export const AppLogo = () => {

    return (
        <Flex style={{ padding: '20px', cursor: 'pointer' }}>
            <img
                onClick={() => window.open('https://resultstack.com/', '_blank')}
                draggable="false"
                style={{ height: 50, width: 'auto' }}
                alt="Logo"
                src={Logo} />
        </Flex>
    )
}