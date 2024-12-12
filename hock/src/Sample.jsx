import React, { useState } from 'react'

const bokHam = (number) => {
  console.log("복잡한 함수 실행");
  for (let i = 0; i < 99999999; i++) {

  }
  return number +100000;
}

const Sample = () => {
  const [num1, setNum1] = useState(1);
  const bokham = bokHam(num1);
  return (
    <div>
      <input type='number'
             value={num1}
             onChange={(e)=>setNum1(parseInt(e.target.value))}
      />
      <div>100000 + {num1} = {bokham}</div>
    </div>
  )
}

export default Sample