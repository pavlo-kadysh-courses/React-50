import {useState, useEffect} from "react";

const useFetch = ({fetchData, dependencies, isFetch}) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=> {        
        const fetchItems = async () =>  {    
            console.log("fetch posts"); 
            try {
                setLoading(true);
                const data = await fetchData([...dependencies]);
                setItems(prevItems => [...prevItems, ...data])
            } catch (error) {
                setError(error);
            }
            finally {
                setLoading(false);
            }
          };
          if(isFetch()) {
            return;
          }
          fetchItems();
    }, [...dependencies]);

    return {items, loading, error, setItems, setLoading, setError};

}

export default useFetch;

useFetch.defaultProps = {
    isFetch: () => {}
}