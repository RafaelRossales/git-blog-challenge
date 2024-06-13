import React, { useContext, useEffect, useState } from 'react';
import { RepositoryContext } from '../../context/RepositoryContext';
import { useParams } from 'react-router-dom';

function Post(){

    const params = useParams();

    const { getIssue } = useContext(RepositoryContext);
    const [issue, setIssue] = useState(null)

    console.log(params)

    useEffect(()=>{
        if(params.id){
            getIssue(+params.id).then((result)=>{
                console.log(result);
            }).catch((err)=>{
                console.log(err);
            })
        }
    },[])
    return (
        <div>
            <h1>Post</h1>
        </div>
    );
}

export default Post;
