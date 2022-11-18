import React, { useEffect, useState } from 'react'
import Challenge from "./Challenge" 
import Layout from "./Layout" 

function Challenges(){
    const [challenges, setChallenges] = useState([])
    useEffect(() => {
        const apiEndpoint = '/api/challenges'
        fetch(apiEndpoint)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setChallenges(data["challenges"])
            });
    }, [])
    return(
        <Layout>
        <div className='challenges'>
        {challenges && challenges.map((ch)=>(<Challenge data={ch} key={ch.id} />))}
        </div>
        </Layout>
    );
}

export default Challenges
