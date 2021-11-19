import React from "react";

export const Flex = React.memo(
    (props: {
        children: any;
        style?: React.CSSProperties;
        column?: boolean;
        row?: boolean;
        id?: string;
        wrap?: boolean;
        inline?: boolean;
        justify?:
        | "center"
        | "flex-start"
        | "flex-end"
        | "space-between"
        | "space-around"
        | "space-evenly"
        | string;
        align?: "center" | "flex-start" | "flex-end" | "stretch" | string;
        center?: boolean;
        className?: string;
        onClick?: (e?: any) => any;
        onFocus?: (e?: any) => any;
        onBlur?: (e?: any) => any;
        onMouseEnter?: (e?: any) => any;
        onMouseLeave?: (e?: any) => any;
        ref?: any;
    }) => {
        return (
            <div
                className={props.className}
                id={props.id}
                ref={props.ref}
                style={{
                    boxSizing: "border-box",
                    display: props.inline ? "inline-flex" : "flex",
                    cursor: props.onClick ? "pointer" : undefined,
                    flexDirection: props.column ? "column" : "row",
                    justifyContent:
                        (props.center ? "center" : undefined) || props.justify || undefined,
                    flexWrap: props.wrap ? "wrap" : "nowrap",
                    alignItems:
                        (props.center ? "center" : undefined) || props.align || undefined,
                    ...props.style,
                }}
                onBlur={props.onBlur}
                onClick={props.onClick}
                onFocus={props.onFocus}
                onMouseEnter={props.onMouseEnter}
                onMouseLeave={props.onMouseLeave}
            >
                {props.children}
            </div>
        );
    }
);
