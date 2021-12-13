import { PropsWithChildren } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
    readonly type?: 'button' | 'submit';
    readonly disabled?: boolean;
}

const Button = ({
    type = 'button',
    children,
    disabled = false,
}: PropsWithChildren<ButtonProps>) => (
    <button type={type} className={styles.button} disabled={disabled}>
        {children}
    </button>
);

export default Button;
