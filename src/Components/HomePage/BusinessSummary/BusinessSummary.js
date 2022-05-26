import React from 'react';

const BusinessSummary = () => {
    return (
        <div className=" bg-gray-200 pt-2 pb-10 rounded border animate-pulse">
            <h1  className="font-bold text-blue-400 my-5 text-2xl">Business Summary</h1>
           <div className="container mx-auto  flex justify-center">
           <p className="text-left ">
               ➤ We have served more than 1000 Custommers <br/>
               ➤ Gained more than 1M+ revenue<br/>
               ➤ More than 1K+ reviews! <br/>
               ➤ More than 50 types of tools!<br/>
               ➤ Online and offline delivery<br/>
             </p>
           </div>
        </div>
    );
};

export default BusinessSummary;