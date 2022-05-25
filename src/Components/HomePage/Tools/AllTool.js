import React, { useState } from 'react';
import ToolsCard from './ToolsCard';

const AllTool = () => {
    const [tools, setTools] = useState([]);

    fetch('http://localhost:5000/tools')
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            const toolsInfo = data.slice(0,6);
            setTools(toolsInfo);
        })
    return (
        <div className="card w-full gap-5 mt-5 grid md:grid-cols-3">
                {
                    tools.map(tool =><ToolsCard
                    tool={tool} key={tool._id}
                    ></ToolsCard>)
                }
            </div>
    );
};

export default AllTool;