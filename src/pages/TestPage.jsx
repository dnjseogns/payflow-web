import { useState } from 'react'

function TestPage() {
  const [count, setCount] = useState(0);

  const buttonOnClick = () => {
    setCount(prev => prev + 1);
  };
  
  return (
    <div>
        <h3>{count}</h3>
        <button onClick={buttonOnClick}>버튼</button>
    </div>
  )
}

export default TestPage
