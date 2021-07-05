import React from 'react'

export default function Input(props) {
    return (
        <input
        type={props.type}
        placeholder={props.placeholder}
        className={"input-field"}
        onChange={e=>props.onchange(e.target.value)}
        value={props.value}
        />
    )
}
