import styled from "styled-components";
import 'github-markdown-css/github-markdown.css';


export const ContentStyle = styled.div`
    margin: 0 auto;
    width: 864px;
`;

export const PostsSection = styled.div`
    /* width: 864px; */
    display: grid;
    grid-template-columns: 1fr 2fr;
    row-gap: 28px;
    column-gap: 32px;
    margin-top:72px;
`



export const TransparentMarkdownContainer = styled.div`
    @import 'github-markdown-css/github-markdown.css';

    /* Apply GitHub Markdown styles */
    .markdown-body {
        background-color: transparent;
        padding: 0;
        margin: 0;

        p{
            text-align: justify;
        }

        /* Add more overrides if needed */
    }
`;

