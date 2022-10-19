import { useEffect, useState } from "react";
import { useParams, useNavigate, Outlet, Link, useLocation } from "react-router-dom";
import { getPostById } from "../../shared/api/posts";
import Loader from "../../shared/components/Loader/Loader";

export default function SinglePostPage() {
  const [state, setState] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/posts";


  useEffect(() => {
    const fetchPost = async () => {
        try {
            setLoading(true);
            setError(null);
            const result = await getPostById(id);
            setState(result);
        } catch(e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    }
    fetchPost();
  }, [id])

  const goBack = () => navigate(from);
  const goPosts = () => navigate("/posts");

  const isCommentsPage = location.pathname.includes("comments");
  const commentsLink = isCommentsPage ? `/posts/${id}` : `/posts/${id}/comments`;

  return (
    <div className="container">
        <button onClick={goBack}>Go back</button>
        <button onClick={goPosts}>Go to posts</button>
        {loading && <Loader />}
        {error && <p>Something went wrong</p>}
        {state && (
            <>
                <h1 className="page-title">{state.title}</h1>
                <p>{state.body}</p>
                <Link state={{from}} to={commentsLink}>Comments</Link>
                <Outlet />
            </>
        )}
    </div>
  )
}
