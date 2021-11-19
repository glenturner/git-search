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
        const debounceTimeout = setTimeout(() => { value && onChange(value) }, delay)
        return () => { clearTimeout(debounceTimeout) }
    }, [delay, value])

    return (
        <Flex center className={style.input_wrapper}>
            <img
                src={SearchIcon}
                style={{ height: 20, width: 'auto', padding: '0 15px' }}
                draggable="false"
                alt="Search Icon" />
            <input
                className={style.input_box}
                type="search"
                onChange={handleChange}
                value={value}
                placeholder={placeholder}
            />
        </Flex>
    )
})

