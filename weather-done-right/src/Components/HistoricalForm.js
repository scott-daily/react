import React from 'react';



const HistoricalForm = (props) => {


    return (
        <form onSubmit={props.handleFormSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <label className="mr-2 pl-1 block text-gray-700 text-md font-bold mb-2">Enter the location</label>
                <input 
                    type = "text" 
                    name="address"
                    placeholder={"Location"}
                    className="shadow appearance-none border rounded py-2 px-3 text-md text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                />
                <div>
                    <label className="mr-2 mt-2 pl-1 block text-gray-700 text-md font-bold mb-2">Enter the date</label>
                        <input 
                            type = "text" 
                            name="date"
                            placeholder={"YYYY-MM-DD"}
                            className="shadow appearance-none border rounded py-2 px-3 text-md text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        />
                </div>
            <input type="submit" 
                value="Submit" 
                className="cursor-pointer bg-blue-500 mt-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-5"
                >
            </input>
        </form>
    );
};

export default HistoricalForm;