import styles from "./post-list.module.scss";
import { Link, useLocation } from "react-router-dom"

const PostList = ({items}) => {
    const location = useLocation();
    console.log('location in postlist', location);
    const elements = items.map(({ id, title }) => (<li key={id} className={styles.item}>
            <Link state={{from: location}} to={`/posts/${id}`}>{title}</Link>
        </li>));

    return <ul className={styles.list}>{elements}</ul>
}

export default PostList;

PostList.defaultProps = {
    items: []
}