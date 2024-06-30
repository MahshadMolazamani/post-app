'use client';

import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/navigation';
import BannerPost from '../components/post/BannerPost';
import NewsPost from '../components/post/NewsPost';
import Newsletter from '../components/Newsletter';
import PostDetail from "@/app/types/PostDetail";


const Home: React.FC = () => {

    const [posts, setPosts] = useState<PostDetail[]>([]);
    const [filteredPosts, setFilteredPosts] = useState<PostDetail[]>([]);
    const [search, setSearch] = useState('');
    const [isSearchActive, setIsSearchActive] = useState(false);

    const router = useRouter();

    useEffect(() => {
        fetch('http://localhost:3000/api/list')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.error('Error fetching posts:', error));
    }, []);

    const handlePostClick = (id: string) => {
        router.push(`/post/${id}`);
    };

    const searchHandleChange = () => {

        const lowerCaseValue = search.toLowerCase();
        const filteredPosts = posts.filter((post) => {
            let {title, subtitle, text} = post;
            title = title?.toLowerCase();
            subtitle = subtitle?.toLowerCase();
            text = text?.toLowerCase();

            if (title?.includes(lowerCaseValue) || subtitle?.includes(lowerCaseValue) || text?.includes(lowerCaseValue)) {
                return true;
            }
            return false;
        });
        setFilteredPosts(filteredPosts);
        search.length > 0 ? setIsSearchActive(true) : setIsSearchActive(false)
        setSearch('');
    }

    return (
        <div>
            <main className="p-4">
                <div className="flex flex-col mb-5">
                    <input
                        className='p-2 mb-2 border rounded-md'
                        type='search'
                        placeholder='Search' aria-labelledby='Search'
                        onChange={e => setSearch(e.target.value)}
                    />
                    <button className='p-2 bg-blue-500 text-white rounded-md' onClick={searchHandleChange}>Search
                    </button>
                </div>
                <div className="post-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        (isSearchActive ? filteredPosts : posts)
                            .map(post => (
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
                            ))}
                </div>
                <div className="mt-4">
                    <Newsletter/>
                </div>
            </main>
        </div>
    );
};

export default Home;
