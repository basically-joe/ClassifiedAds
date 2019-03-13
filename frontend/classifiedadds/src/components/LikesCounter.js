import React, {useState} from 'react'

const LikesCounter = () => {
    const [count, updateCount] = useState(0) // pass in an initial value
    return (
      <div>
        <p>Likes: {count}</p>
        <button onClick={() => updateCount(count + 1)}>Like </button>
        <button onClick={() => {if (count >0) {updateCount(count - 1)}}}>Dislike </button>

      </div>
    )
}


export default LikesCounter;
