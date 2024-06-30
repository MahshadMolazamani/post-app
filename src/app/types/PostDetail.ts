interface PostDetail {

    id: string;
    type: 'news' | 'banner';
    image: string;
    title?: string;
    subtitle?: string;
    text?: string;
}

export default PostDetail;