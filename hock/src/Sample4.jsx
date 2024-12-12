import React, { useRef, useState } from 'react'

const Sample4 = () => {
    const [count, setCount] = useState();
    const inputRef = useRef(null);
    const countRef = useRef(0);

    const increateCountState = () =>{
        setCount(count + 1);
    }
    const increateCountRef = () => {
        countRef.current = countRef.current + 1;
    }

    const handleFocus = () => {
        if(inputRef.current) {
            inputRef.current.focus(); //input dom 찾아 포커스를 설정
        }
    }

  return (
    <div>
        <p>State : { count } </p>
        <p>Ref : { count.current }</p>
        <button onClick={increateCountState}>State 증가</button>
        <button onClick={increateCountRef}>Ref 증가</button>

        <input ref={inputRef}
               type='text'
               placeholder='여기포커스'
        />
        <button onClick={handleFocus}>input에 포커스</button>
    </div>    
  )
}

export default Sample4