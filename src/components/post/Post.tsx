import { TransparentMarkdownContainer } from '../content/style';
import rehypeRaw from 'rehype-raw'
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'github-markdown-css/github-markdown.css';
import 'highlight.js/styles/github.css'; // Use the GitHub syntax highlighting style

type IPost = {
    body:string
}
interface IPostProps{
    post:IPost
}


function Post({ post }:IPostProps){

    return (
        <TransparentMarkdownContainer>
        <ReactMarkdown
            rehypePlugins={[rehypeRaw, rehypeHighlight]}
            remarkPlugins={[remarkGfm]}
        >
            {post.body}
        </ReactMarkdown>
    </TransparentMarkdownContainer>
    );
}

export default Post;
