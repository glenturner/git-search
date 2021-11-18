import React, { ChangeEvent, useEffect, useState, useCallback } from "react";
import { Flex } from "..";
import { SearchIcon } from "../../Assets";
import style from "./style.module.scss";

interface DebouncedInputProps {
    delay?: number;
    onChange?: any;
    placeholder?: string;
}

export const DebouncedInput = React.memo((props: DebouncedInputProps) => {
    const {
        delay = 1000,
        onChange = () => { },
        placeholder,
    } = props;

    const [value, setValue] = useState('');

    const handleChange = useCallback(({ target }: ChangeEvent<HTMLInputElement>) => { setValue(target.value) }, [])

    useEffect(() => {
        const debounceTimeout = setTimeout(() => { onChange(value) }, delay)
        return () => { clearTimeout(debounceTimeout) }
    }, [delay, value])

    return (
        <Flex center className={style.input_wrapper}>
            <img
                draggable="false"
                style={{ height: 20, width: 'auto', padding: '0 15px' }}
                alt="Search Icon"
                src={SearchIcon} />
            <input
                type="search"
                className={style.input_box}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
            />
        </Flex>
    )
})

