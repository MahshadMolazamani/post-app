'use client';

import React, {useEffect} from 'react';
import {useRouter} from 'next/navigation';
import BannerPost from '../../components/post/BannerPost';
import NewsPost from '../../components/post/NewsPost';
import Newsletter from '../../components/Newsletter';
import useFavourites from "@/hooks/useFavourites";


const Favourites: React.FC = () => {

    const router = useRouter();
    const {favourites} = useFavourites();

    const handlePostClick = (id: string) => {

        router.push(`/post/${id}`);
    };

    return (
        <main className="p-4">
            <div className="post-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {favourites.length > 0 ? favourites.map(post => (
                        <div key={post.id} onClick={() => handlePostClick(post.id)} className="cursor-pointer">
                            {
                                post.type.toLowerCase() === 'news' ? (
                                    <NewsPost
                                        title={post.title || 'Default title'}
                                        image={post.image || 'Default image'}
                                    />
                                ) : (
                                    <BannerPost
                                        title={post.title || 'Default title'}
                                        image={post.image || 'Default image'}
                                    />
                                )
                            }
                        </div>
                    )) :
                    <div>
                        <p className='m-2 text-red-500'>The is No Favorites ... Please add with related Post.</p>
                    </div>
                }
            </div>
            <div className="mt-4">
                <Newsletter/>
            </div>
        </main>
    );
};

export default Favourites;
