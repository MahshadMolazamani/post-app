import {useState, useEffect} from 'react';
import PostDetail from "@/app/types/PostDetail";


const useFavourites = () => {

    const [favourites, setFavourites] = useState<PostDetail[]>([]);

    useEffect(() => {
        const storedFavourites = localStorage.getItem('favourites');
        if (storedFavourites) {
            setFavourites(JSON.parse(storedFavourites));
        }
    }, []);

    const addFavourite = (post: PostDetail) => {
        const isAlreadyFavourite = favourites.some((favourite: PostDetail) => favourite.id === post.id);
        if (!isAlreadyFavourite) {
            const updatedFavourites = [...favourites, post];
            setFavourites(updatedFavourites);
            localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
        } else {
            console.log(`Post ${post.id} is already a favourite.`);
        }
    };

    const removeFavourite = (id: string) => {
        const updatedFavourites = favourites.filter(post => post.id !== id);
        setFavourites(updatedFavourites);
        localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
    };

    return {favourites, addFavourite, removeFavourite};
};

export default useFavourites;
