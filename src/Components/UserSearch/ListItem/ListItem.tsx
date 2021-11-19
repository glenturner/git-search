import React, { useEffect, useState } from 'react';
import SR from 'scrollreveal';
import Moment from 'moment';
import { Flex } from '../..';
import { SearchUsersAttributes, UserAttributes, GitHubService } from '../../../Api/GitHubService';
import { StringOrDefault } from '../../../utils/stringOrDefault';
import style from './style.module.scss';

export const Attribute = (props: any) => {
    return (
        <>
            {
                props?.attribute &&
                <span className={style.attribute}>
                    {props.attribute}
                </span>
            }
        </>
    );
};


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
    }, [data])

    return (
        <Flex
            className={style.list_item_wrapper}
            id="user_list_item"
            onClick={() => window.open(`${data?.html_url}`, '_blank')}>
            <Flex center className={style.avatar}>
                <img
                    draggable="false"
                    style={{ height: 100, width: 'auto' }}
                    alt="User Avatar"
                    src={data?.avatar_url} />
            </Flex>
            <Flex column center className={style.user_info}>
                <span className={style.user_name}>
                    {StringOrDefault(userAttributes?.name || data?.login)}
                </span>
                <Attribute attribute={StringOrDefault(userAttributes?.location)} />
                <Attribute attribute={StringOrDefault(userAttributes?.email)} />
                <Attribute attribute={`Public Repositories: ${userAttributes?.public_repos}`} />
                <Attribute attribute={`Last Contribution: ${Moment(userAttributes?.updated_at).startOf('day').fromNow()}`} />
                <Attribute attribute={`First Commit: ${Moment(userAttributes?.created_at).startOf('day').fromNow()}`} />
            </Flex>
            <Flex className={style.hireable_indicator}>
                <span
                    className={style.indicator_wrapper}
                    style={{ background: userAttributes?.hireable ? `#2DA7CB` : `#EB72A2` }}>
                    {userAttributes?.hireable ? `Hireable` : `Working`}
                </span>
            </Flex>
        </Flex >
    );
})