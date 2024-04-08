import React, { ChangeEvent } from 'react';
import './input.css'

interface InputProps {
    type?: string;
    placeholder?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    value?: string | number;
    className?: string;
    style?: React.CSSProperties;
}

const Input: React.FC<InputProps> = ({ type = "text", placeholder, onChange, value, className, style }) => {
    return (
        <input 
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            className={className}
            style={style}
        />
    );
};

export default Input;
