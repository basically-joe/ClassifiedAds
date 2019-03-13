import React, {useState} from 'react'

const LikesCounter = (props) =>{

    const [count, updateCount] = useState(props.advert) // pass in an initial value
    return (
      <div>
        <p>Likes: {count}</p>
        <button onClick={() => updateCount(count + 1)}>Like </button>
      </div>)
}


export default LikesCounter;
