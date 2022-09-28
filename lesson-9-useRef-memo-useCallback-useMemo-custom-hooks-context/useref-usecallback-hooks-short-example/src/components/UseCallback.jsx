import React from 'react'
import { useState, useCallback, useMemo } from 'react';
import List from './List';

export default function UseCallback() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = useMemo(() => {
    return [number, number + 1, number + 2];
  }, [number])

  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333"
  }

  return (
    <div style={theme}>
        <input 
            type="number"
            value={number}
            onChange={e => setNumber(parseInt(e.target.value))}
        />
        <button onClick={() => setDark(prevDark => !prevDark)}>
            Toggle theme
        </button>
        <List getItems={getItems} />
    </div>
  )
}
