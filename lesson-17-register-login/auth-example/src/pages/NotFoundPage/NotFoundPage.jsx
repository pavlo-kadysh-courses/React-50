import {Link} from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="container">
            <h1 className="page-title">Page not found</h1>
            <Link to="/">To home page</Link>
        </div>
    )
}

export default NotFoundPage;