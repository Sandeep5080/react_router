import React from 'react'
import { useLocation, useParams } from 'react-router';

const Post = () => {


     const { id } = useParams();

    const query = new URLSearchParams(useLocation().search);
    return (
        <h2>
            Id is = {id} </h2>

    );
}

export default Post;
