import React, {useState} from 'react'

const LikesCounter = () => {
    const [count, updateCount] = useState(0) // pass in an initial value
    return (
      <div>
        <p><button onClick={() => updateCount(count + 1)}>Like</button>  {count}</p>
        
      </div>
    )
}

export default LikesCounter;
