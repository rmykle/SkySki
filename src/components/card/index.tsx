import { PropsWithChildren } from 'react';
import styles from './Card.module.scss';
import classNames from 'classnames';

interface CardProps {
    readonly title: string;
    readonly className?: string;
}

const Card = ({ title, children, className }: PropsWithChildren<CardProps>) => {
    return (
        <div className={classNames(className, styles.card)}>
            <h2>{title}</h2>
            <div>{children}</div>
        </div>
    );
};

export default Card;
