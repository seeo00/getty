import styled from 'styled-components';

export const PaginationWrap = styled.div`
    div {
        margin-top: 30px;
        text-align: center;
        button {
            width: 30px;
            height: 30px;
            border: 1px solid #666;
            margin-right: 5px;
            background: #fff;
            /* &:first-child {
                border: none;
            }
            &:last-child {
                border: none;
            } */
            &.on {
                border-color: tomato;
                background: tomato;
                color: #fff;
            }
        }
    }
`;
