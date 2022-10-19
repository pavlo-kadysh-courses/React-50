import React from "react"
import { useEffect } from "react";
import { useState } from "react"
import { useParams } from "react-router-dom"
import { getCommentsById } from "../../shared/api/posts";
import Loader from "../../shared/components/Loader/Loader";
import style from "./comments-page.module.scss";

export default function CommentsPage() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchComments = async () => {
        try {
            setLoading(true);
            const result = await getCommentsById(id);
            setComments(result);
        } catch(e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    }
    fetchComments();
  }, [id])

  const elements = comments.map(({id, name, email, body}) => {
    return (
        <li key={id} className={style.comment}>
            <h4>{name}</h4>
            <p>{email}</p>
            <p>{body}</p>
        </li>
    )
  })



  return (
    <>
        <ul className={style.comments}>{elements}</ul>
        {loading && <Loader />}
        {error && <p>Something wrong</p>}
    </>
  )
}
