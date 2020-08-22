import React, { useState } from 'react'

function SimpleCounter() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h1 className="ml-3">
                Count: {count}
            </h1>
            <div>
            <div class="inline-block text-gray-700 text-center bg-gray-200 px-1 py-1 m-2 shadow-md">
                    <button 
                        class="bg-red-500 hover:bg-blue-700 text-white text-xl font-bold py-1 px-4 rounded shadow-xs" 
                        onClick={() => setCount(count - 1)}
                    >
                        -
                    </button>
                </div>
                <div class="inline-block text-gray-700 text-center bg-gray-200 px-1 py-1 m-2 shadow-md">
                    <button 
                        class="bg-blue-500 hover:bg-blue-700 text-white text-xl font-bold py-1 px-3 rounded shadow-xs" 
                        onClick={() => setCount(count + 1)}
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SimpleCounter

