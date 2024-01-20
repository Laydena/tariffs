import styles from './card.module.css';

// export default function Card({ name, price, speed, comment }) {

//     return (
// <div className={styles.cardWrapper}>
//     <div className={styles.cardMain}>
//         <h2 className="tariff-title">{name}</h2>
//         <h3 className="tariff-subtitle">{price}</h3>
//     </div>
//     <h6 className="tariff-speed">{speed}</h6>
//     <h6 className="comment">{comment}</h6>

//     )
// }

export default function Card(props) {

    return (
        <div className={styles.cardWrapper}>
            <div className={props.theme}>
                <h2 className="tariff-title">{props.name}</h2>
                <h3 className="tariff-subtitle">{props.price}</h3>
            </div>
            <h6 className="tariff-speed">{props.speed}</h6>
            <h6 className="comment">{props.comment}</h6>
        </div>
    )
}