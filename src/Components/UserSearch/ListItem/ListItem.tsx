import React, { useEffect, useState } from 'react';
import SR from 'scrollreveal';
import { Flex } from '../..';
import { SearchUsersAttributes, UserAttributes, GitHubService } from '../../../Api/GitHubService';
import { StringOrDefault } from '../../../utils/stringOrDefault';
import style from './style.module.scss';

interface ListItemProps {
    data: SearchUsersAttributes;
}

export const ListItem = React.memo((props: ListItemProps) => {
    const { data } = props;
    const [userAttributes, setUserAttributes] = useState<UserAttributes>()

    useEffect(() => {
        SR().reveal('#user_list_item', { opacity: 0.2, viewFactor: 0.3, scale: 0.9, delay: 0, reset: false, distance: '50px', origin: 'left' });
        const getUserAttributes = async () => {
            const userData = await GitHubService.GetUserAttributesAsync(data.login || '')
            setUserAttributes(userData)

            console.log(`user data in list item: `, userData);

        }
        getUserAttributes()
    }, [])

    return (
        <Flex
            className={style.list_item_wrapper}
            id="user_list_item"
            onClick={() => window.open(`${data?.html_url}`, '_blank')}>
            <Flex className={style.avatar}>
                <img
                    draggable="false"
                    style={{ height: 100, width: 'auto' }}
                    alt="User Avatar"
                    src={data?.avatar_url} />
            </Flex>
            <Flex column center className={style.user_info}>
                <span className={style.user_name}>{StringOrDefault(userAttributes?.name || data?.login)}</span>
                <span className={style.location}>{StringOrDefault(userAttributes?.location)}</span>
            </Flex>
            <Flex className={style.hireable_indicator}>
                <span
                    className={style.indicator_wrapper}
                    style={{ background: userAttributes?.hireable ? `#2DA7CB` : `#EB72A2` }}>
                    {userAttributes?.hireable ? `Hireable` : `Working`}
                </span>
            </Flex>
        </Flex>
    );
})