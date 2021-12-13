/* eslint-disable no-unused-vars */
import styles from './Input.module.scss';

export interface InputProps {
    readonly value: string;
    readonly onChange: (value: string) => void;
    readonly placeholder?: string;
}

const Input = ({ value, onChange, placeholder = '' }: InputProps) => (
    <input
        placeholder={placeholder}
        className={styles.input}
        value={value}
        onChange={(e) => onChange(e.target.value)}
    />
);

export default Input;
