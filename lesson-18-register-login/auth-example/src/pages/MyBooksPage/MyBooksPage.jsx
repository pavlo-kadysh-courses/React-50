import { Navigate } from "react-router-dom";
import Books from "../../components/Books/Books"
import useAuth from "../../shared/hooks/useAuth";


const MyBooksPage = () => {
    // const isLogin = useAuth();

    // if (!isLogin) {
    //     return <Navigate to="/login" />
    // }

    return (
        <div className="container">
            <h1 className="page-title">My books page</h1>
            <Books />
        </div>
    )
}

export default MyBooksPage;