import {useState, useEffect} from "react";

const useLocalStorage = ({key, initialState})=> {
    const [state, setState] = useState(() => {
        try {
            const value = JSON.parse(localStorage.getItem(key));
            return value || initialState;
        } catch (error) {
            return initialState;
        }
    });

    useEffect(()=> {
        localStorage.setItem(key, JSON.stringify(state));
    }, [state]);

    return [state, setState]
}

export default useLocalStorage;