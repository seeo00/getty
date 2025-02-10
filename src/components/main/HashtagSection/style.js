import {styled} from 'styled-components';
export const HashtagBox = styled.section`
    padding: 40px 20px;
    background: #191919;

    h2 {
        font-size: 24px;
        color: #fff;
        margin-bottom: 20px;
        transition: color 0.3s ease;
    }

    .post-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        
        @media (max-width: 768px) {
            grid-template-columns: 1fr;
        }
    }

    @media (max-width: 768px) {
        h2 {
            font-size: 20px;
        }
    }
`;

export const PostItem = styled.div`
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.3s ease;

    .img-box {
        aspect-ratio: 1/1;
        
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s ease;
        }
    }

    .tag-box {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 20px;
        background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);

        span {
            display: inline-block;
            color: #fff;
            margin-right: 10px;
            font-size: 14px;
            transition: color 0.3s ease;
        }
    }

    &:hover {
        transform: scale(1.03);

        .img-box img {
            transform: scale(1.1);
        }

        .tag-box span {
            color: #3498db;
        }
    }

    @media (max-width: 768px) {
        .tag-box {
            padding: 15px;

            span {
                font-size: 12px;
            }
        }
    }
`;