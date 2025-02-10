import { HashtagBox, PostItem } from './style';

const HashtagSection = () => {
    const posts = [
        {
            id: 1,
            imgUrl: '/images/post1.jpg',
            tags: ['#Lorem', '#ipsum']
        },
        {
            id: 2,
            imgUrl: '/images/post2.jpg',
            tags: ['#Lorem', '#ipsum']
        },
        {
            id: 3,
            imgUrl: '/images/post3.jpg',
            tags: ['#Lorem', '#ipsum']
        }
    ];

    return (
        <HashtagBox>
            <h2>#Lorem ipsum do</h2>
            <div className="post-grid">
                {posts.map((post) => (
                    <PostItem key={post.id}>
                        <div className="img-box">
                            <img src={post.imgUrl} alt="" />
                        </div>
                        <div className="tag-box">
                            {post.tags.map((tag, index) => (
                                <span key={index}>{tag}</span>
                            ))}
                        </div>
                    </PostItem>
                ))}
            </div>
        </HashtagBox>
    );
};

export default HashtagSection;
