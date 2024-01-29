import styles from './card.module.css';
import React, { useState } from 'react';



export default function Card(props) {

    const [active, setActive] = useState(false);

    const handler = () => {
        setActive(!active);
    };

    return (
        <div className={`${active ? styles.active : styles.none} ${styles.cardWrapper}`} onClick={handler} >
            <div className={props.theme}>
                <h2 className="tariff-title">{props.name}</h2>
                <h3 className="tariff-subtitle">{props.price}</h3>
            </div>
            <h6 className="tariff-speed">{props.speed}</h6>
            <h6 className="comment">{props.comment}</h6>
        </div >
    )
}