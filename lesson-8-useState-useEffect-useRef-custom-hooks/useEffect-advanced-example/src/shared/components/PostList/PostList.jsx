import styles from "./post-list.module.scss";

const PostList = ({items, onClick}) => {
    const elements = items.map(({ id, title, body }) => <li key={id} onClick={() => onClick({title, body})} className={styles.item}>{title}</li>);

    return <ul className={styles.list}>{elements}</ul>
}

export default PostList;

PostList.defaultProps = {
    items: []
}