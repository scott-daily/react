import React, { useState } from 'react'

function SimpleCounter() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h1>
                Count: {count}
            </h1>
            <div class="flex mb-4">
                <div class="w-1/2 bg-gray-400 h-12">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded" onClick={() => setCount(count + 1)}>
                        +
                    </button>
                </div>
                <div class="w-1/2 bg-gray-400 h-12">
                    <button class="bg-red-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded" onClick={() => setCount(count - 1)}>
                        -
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SimpleCounter