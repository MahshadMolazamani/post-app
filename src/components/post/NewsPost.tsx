import React from 'react';
import PostView from "@/app/types/PostView";

const NewsPost: React.FC<PostView> = ({title, image}) => {
    return (
        <div className="news-post p-4 border rounded-md shadow-sm">
            <p className='mb-2'> News</p>
            <img className="w-full h-auto mb-4" src={image} alt={title}/>
            <h2 className="text-xl font-bold mb-2">{title}</h2>
        </div>
    );
};

export default NewsPost;
