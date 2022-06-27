import React, { FC, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IPost } from "../core/types";

const SinglePage: FC = () => {
    const { id } = useParams();
    const [ post, setPost ] = useState<IPost|null>(null)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(json => setPost(json))
    }, [id])

    return (
        <div className="single-page" style={{maxWidth: '1000px'}}>
            <h2 style={{textAlign: "center", marginBottom: '30px', fontSize: '48px'}}>{post?.title}</h2>
            <p style={{textAlign: "center", fontSize: '30px', marginBottom: '30px'}}>{post?.body}</p>
            <Link to={`/posts/${id}/edit`} >Edit this post</Link>
        </div>
    )
}

export default SinglePage