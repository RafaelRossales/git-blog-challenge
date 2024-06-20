import { TIssue } from "../../context/RepositoryContext";
import { Card } from "../cards";
import { SearchFormComponent } from "../searchbar";
import { ContentStyle, PostsSection, TransparentMarkdownContainer } from "./style";
import { RepositoryContext } from "../../context/RepositoryContext";
import { useContext, useEffect, useState } from "react";

import Posts from "../post/Posts";
import Post from "../post/Post";


export function Content({ issue }) {
    const { issues } = useContext(RepositoryContext);
    const { items, total_count } = issues;
    const [renderPosts, setRenderPosts] = useState(false);

    useEffect(()=>{
        setRenderPosts(true);
        console.log('r',renderPosts)
    },[items])

    return (
        <ContentStyle>

            {(issue) ? (
                <Post post={issue} />
            ) :(
                <Posts posts={items}/>
            )}
        </ContentStyle>
    );
}

