import React from 'react';


// handler for submit btn
const handleSubmitBtn =(e)=>{
    e.preventDefault();
    
}

const Hiring = () => {
    return (
        <div className="justify-center mb-10 container mx-auto p-3">
            <h1 className="my-5 font-semibold text-sky-700 text-3xl">Want to work with Us? Join now!!! </h1>

            <form className="bg-gray-400 py-10 px-5 rounded-lg">
                <div className="mb-6">
                    <input type="email" id="email" className="text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required=""/>
                </div>
                <div className="mb-6">
                    <textarea type="text" id="text" className="text-center h-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                </div>
               
                <button onClick={handleSubmitBtn} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>

        </div>
    );
};

export default Hiring;