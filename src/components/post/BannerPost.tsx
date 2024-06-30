import React from 'react';
import PostView from "@/app/types/PostView";

const BannerPost: React.FC<PostView> = ({title, image}) => {
    return (
        <div className="banner-post p-4 border rounded-md shadow-sm">
            <p className='mb-2'> Banner </p>
            <img className="w-full h-auto mb-4" src={image} alt={title}/>
            <h2 className="text-xl font-bold">{title}</h2>
        </div>
    );
};

export default BannerPost;
