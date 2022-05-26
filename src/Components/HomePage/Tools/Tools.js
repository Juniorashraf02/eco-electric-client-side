import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ToolsCard from './ToolsCard';

const Tools = () => {
    const navigate = useNavigate();

    const [tools, setTools] = useState([]);

    fetch('https://ancient-plateau-85212.herokuapp.com/tools')
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            const toolsInfo = data.slice(0, 6);
            setTools(toolsInfo);
        });

    const navigateTool = e => {
        navigate('/alltool')
    }
    return (
        <div className="container mx-auto my-10">
            <h1 className="font-bold text-blue-400 my-20 text-2xl">Tools Section</h1>
            <div className="card w-full gap-5 mt-5 grid md:grid-cols-3 md:ml-2 my-5">
                {
                    tools.map(tool => <ToolsCard 
                        tool={tool} key={tool._id}
                    ></ToolsCard>)
                }
            </div>
            <button onClick={navigateTool} className="btn btn-info my-5">See all tools</button>
        </div>
    );
};

export default Tools;