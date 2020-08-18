import React, { useState } from 'react'

function SimpleCounter() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h1>
                Count: {count}
            </h1>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded" onClick={() => setCount(count + 1)}>
                +
            </button>
            <button class="bg-red-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded" onClick={() => setCount(count - 1)}>
                -
            </button>
        </div>
    )
}

export default SimpleCounter