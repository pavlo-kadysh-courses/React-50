import styles from "./post-list.module.scss";
import { Link } from "react-router-dom"

const PostList = ({items}) => {
    const elements = items.map(({ id, title }) => (<li key={id} className={styles.item}>
            <Link to={`/posts/${id}`}>{title}</Link>
        </li>));

    return <ul className={styles.list}>{elements}</ul>
}

export default PostList;

PostList.defaultProps = {
    items: []
}