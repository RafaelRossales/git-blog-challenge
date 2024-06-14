import { TIssue } from "../../context/RepositoryContext";
import { Card } from "../cards";
import { SearchFormComponent } from "../searchbar";
import { ContentStyle, PostsSection, TransparentMarkdownContainer } from "./style";
import { RepositoryContext } from "../../context/RepositoryContext";
import { useContext } from "react";
import rehypeRaw from 'rehype-raw'
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'github-markdown-css/github-markdown.css';
import 'highlight.js/styles/github.css'; // Use the GitHub syntax highlighting style


export function Content({ issue }) {
    const { issues } = useContext(RepositoryContext);
    const { items, total_count } = issues || { items: [], total_count: 0 };

    console.log('iSSUE',issue, items)



    return (
        <ContentStyle>
            {(issue === null  && items)? (
                <>
                    <SearchFormComponent publishedIssues={total_count} />
                    <PostsSection>
                        {items.map((data: TIssue, index: number) => (
                            <Card 
                                body={data.body} 
                                title={data.title} 
                                url={data.url} 
                                key={index} 
                                id={data.number} 
                            />
                        ))}
                    </PostsSection>
                </>
            ) : (
                <TransparentMarkdownContainer> {/* Apply GitHub-like styles */}
                <ReactMarkdown
                    rehypePlugins={[rehypeRaw, rehypeHighlight]}
                    remarkPlugins={[remarkGfm]}
                >
                    {issue.body}
                </ReactMarkdown>
            </TransparentMarkdownContainer>
            )}
        </ContentStyle>
    );
}

// npm install react-markdown rehype-raw remark-gfm rehype-highlight react-syntax-highlighter github-markdown-css
