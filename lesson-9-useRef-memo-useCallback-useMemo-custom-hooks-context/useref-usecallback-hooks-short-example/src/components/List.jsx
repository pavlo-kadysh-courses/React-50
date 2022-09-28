import { useEffect } from "react";
import { useState } from "react"

export default function List({getItems}) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems);
    console.log('Updating Items');
  }, [getItems])

  return items.map((item) => <div key={item}>{item}</div>)
}
