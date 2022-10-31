import {Link, useLocation} from "react-router-dom";

import styles from "./post-list.module.scss";

const PostList = ({items}) => {
    const location = useLocation(); // location - информация про страницу, на которой выводится список статей

    const elements = items.map(({ id, title }) => (<li key={id} className={styles.item}>
            <Link state={{from: location}} to={`/posts/${id}`}>{title}</Link>
        </li>));

    return <ul className={styles.list}>{elements}</ul>
}

export default PostList;

PostList.defaultProps = {
    items: []
}