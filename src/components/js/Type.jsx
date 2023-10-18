import React, { useEffect, useState, useRef } from 'react'


function Type({ tex }) {

    const index = useRef(0)

    const [text, setText] = useState('');

    useEffect(() => {
        index.current = 0;
        setText('');
    }, [tex])

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setText((value) => value + tex.charAt(index.current));
            index.current += 1;
        }, 100); 
        return () => {
            clearTimeout(timeoutId)
        }
    }, [text, tex])


  return (
    <div className="type">
        <p>
            {text}
        </p>
    </div>
  );
}

export default Type;