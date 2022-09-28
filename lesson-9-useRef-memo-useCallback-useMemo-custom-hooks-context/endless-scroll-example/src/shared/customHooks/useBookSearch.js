import axios from "axios";
import { useEffect, useState } from "react"

export default function useBookSearch(query, pageNumber) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [books, setBooks] = useState([]);
    const [hasMore, setHasMore] = useState([]);

    // Викликаємо useEffect коли ми змінюємо пошукову фразу,
    // виставляємо пустий масив оскільки нам не потрібні данні з минулого пошуку.
    useEffect(() => {
        setBooks([])
    }, [query]);

    useEffect(() => {
        setLoading(true);
        setError(false);
        let cancelLastCall
        axios({
            method: "GET",
            url: "https://openlibrary.org/search.json",
            params: { q: query, page: pageNumber },
            cancelToken: new axios.CancelToken(cancelFunctionCreatedByAxios => cancelLastCall = cancelFunctionCreatedByAxios)
        }).then((res) => {
            setBooks(prevBooks => {
                return [...new Set([...prevBooks, ...res.data.docs.map(b => b.title)])]
            })
            setHasMore(res.data.docs.length > 0);
            setLoading(false);
        }).catch((e) => {
            if (axios.isCancel(e)) {
                return;
            } else {
                setError(e);
            }
        })
        // 2 стадія викликається на другий рендер useEffect
        // потрібно для відміни минулого запиту після того як отримали оновленну фразу (query)
        return () => cancelLastCall()
    }, [query, pageNumber])

    return {loading, error, books, hasMore}
}
