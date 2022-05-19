import React from 'react';

const Post = ({posts,load}) => {
    if(load){
        return <h5>Loading</h5>
    }
    return (
        <ul className='list-group mb-4'>
            {posts.map(post => (
                <li className='list-group-item' key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
};

export default Post;