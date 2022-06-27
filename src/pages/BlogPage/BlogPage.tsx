import React, { FC, useEffect, useState } from "react";
import './BlogPage.css'

import { Link } from "react-router-dom";
import { IPost } from "../../core/types";

const BlogPage: FC = () => {
    const [ posts, setPosts ] = useState<IPost[]>([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setPosts(json))
    }, [])

    return (
        <div className="posts">
            {
                posts.map((post: IPost) => (
                    <Link key={post.id} to={`/posts/${post.id}`} className='posts__link' >
                        <li>{post.title}</li>
                    </Link>
                ))
            }
        </div>
    )
}

export default BlogPage