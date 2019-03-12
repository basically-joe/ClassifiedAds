import React, {useState} from 'react'

const LikesCounter = () => {
    const [count, updateCount] = useState(0) // pass in an initial value
    return (
      <div>
        <h3>Likes Counter: {count}</h3>
        <button onClick={() => updateCount(count + 1)}>Like </button>
        <button onClick={() => updateCount(count - 1)}>Dislike </button>

      </div>
    )
}


export default LikesCounter;