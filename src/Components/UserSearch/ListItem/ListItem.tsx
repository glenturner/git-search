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
            const foundUser = await GitHubService.GetUserAttributesAsync(data.login || '')
            setUserAttributes(foundUser)
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
                    style={{ background: userAttributes?.hireable ? `#EB72A2` : '#2DA7CB' }}>
                    {userAttributes?.hireable ? `Hireable` : `Working`}
                </span>
            </Flex>
        </Flex>
    );
})
