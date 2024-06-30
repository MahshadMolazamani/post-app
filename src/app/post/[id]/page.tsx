'use client'

import React, {useEffect, useState} from 'react';
import PostDetail from "@/app/types/PostDetail";
import '../../page.scss';
import useFavourites from '../../../hooks/useFavourites';

const PostDetails = (props: any) => {

    const [post, setPost] = useState<PostDetail>();
    const [isFavourite, setIsFavourite] = useState(false);
    const {favourites} = useFavourites();
    const {addFavourite} = useFavourites();
    const {removeFavourite} = useFavourites();

    const handleAddToFavourites = () => {
        {
            post && addFavourite(post);
            setIsFavourite(true);
        }
    };


    const handleRemoveFromFavourites = () => {
        {
            post && removeFavourite(post.id);
            setIsFavourite(false);
        }
    };

    useEffect(() => {
        if (props) {
            const result = fetch(`/api/list/${props.params.id}`)
                .then(response => response.json())
                .then(data => setPost(data))
                .catch(error => console.error('Error fetching post:', error));
        }


    }, [props, favourites, isFavourite]);


    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <div className='card m-10'>

            <div className="post p-4 border rounded-md shadow-sm">
                <h1 className="text-xl h-auto mb-4">{post.title}</h1>
                <img className="w-full h-auto mb-4" src={post.image} alt={post.title}/>
                <h2 className="mb-4">{post.text}</h2>
                {isFavourite ?
                    <button onClick={handleRemoveFromFavourites}
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                            type="button"
                            style={{width: 200}}
                    >Remove favorites
                    </button>
                    :
                    <button onClick={handleAddToFavourites}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            type="button"
                            style={{width: 200}}
                    >
                        Add to favorites
                    </button>
                }

            </div>

        </div>
    );
};

export default PostDetails;
