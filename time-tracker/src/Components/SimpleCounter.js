import React, { useState } from 'react'

function SimpleCounter() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h1>
                Count: {count}
            </h1>
            <h1 onClick={() => setCount(count + 1)}>
                +
            </h1>
            <h1 onClick={() => setCount(count - 1)}>
                -
            </h1>
        </div>
    )
}

export default SimpleCounter