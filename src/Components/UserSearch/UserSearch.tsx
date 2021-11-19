import React from 'react';
import { Flex, DebouncedInput } from '..';
import { ListItem } from './ListItem';
import style from './style.module.scss';

interface UserSearchProps {
    data?: any;
    onChange?: any;
}

export const UserSearch = (props: UserSearchProps) => {
    const { data, onChange } = props;

    const SearchPrompt = () => {
        return (
            <h4 className={style.search_prompt}>
                {`${data.length} Programmers found, let's type some things...`}
            </h4>
        )
    }

    return (
        <Flex
            className={style.user_list_wrapper}
            wrap
            center>
            <Flex center className={style.search_wrapper}>
                <DebouncedInput
                    placeholder="Search a github user by name or unique email"
                    onChange={onChange} />
            </Flex>
            <>
                {
                    !data.length ? <SearchPrompt /> :
                        <>
                            {data?.map((d: any, key: any) => { return <ListItem key={key} data={d} /> })}
                        </>
                }
            </>
        </Flex>
    );
};