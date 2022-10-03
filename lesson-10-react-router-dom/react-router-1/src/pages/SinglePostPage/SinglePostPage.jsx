import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPostById } from "../../shared/api/posts";
import Loader from "../../shared/components/Loader/Loader";

export default function SinglePostPage() {
  const [state, setState] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();

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

  const goBack = () => navigate(-1);
  const goPosts = () => navigate("/posts");

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
            </>
        )}
    </div>
  )
}
