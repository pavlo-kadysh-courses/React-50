import { useMemo } from "react";
import styles from "./post-list.module.scss";

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

const PostList = ({items, onClick}) => {

    // const elements = items.map(({ id, title, body }) => {
    //     console.log('starting long operation');
    //     sleep(4);
    //     console.log('long operation done');
    //     return (
    //         <li key={id} onClick={() => onClick({title, body})} className={styles.item}>{title}</li>
    //     )
    // });

    const memoizedItems = useMemo(() => items.map(({ id, title, body }) => {
        console.log('starting long operation memo');
        sleep(3);
        console.log('long operation done in memo');
        return (
            <li key={id} onClick={() => onClick({title, body})} className={styles.item}>
                {title}
            </li>
        )
    }), [items])

    return <ul className={styles.list}>{memoizedItems}</ul>
}

export default PostList;

PostList.defaultProps = {
    items: []
}