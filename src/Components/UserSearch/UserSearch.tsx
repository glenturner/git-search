import React from 'react';
import { Flex, DebouncedInput } from '..';
import { ListItem } from './ListItem';
import style from './style.module.scss';

interface UserSearchProps {
    data?: any;
    isLoading?: boolean;
    onChange?: any;
}

export const UserSearch = (props: UserSearchProps) => {
    const { data, isLoading, onChange } = props;

    console.log(`USER SEARCH DATA LIST: `, data);


    return (
        <Flex
            className={style.user_list_wrapper}
            wrap
            center>
            <Flex center className={style.search_wrapper}>
                <DebouncedInput
                    placeholder="Search a github user by name or email"
                    onChange={onChange} />
            </Flex>
            {data?.map((d: any, key: any) => { return <ListItem key={key} data={d} /> })}
        </Flex>
    );
};
