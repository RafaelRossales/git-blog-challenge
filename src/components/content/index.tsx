import { TIssue } from "../../context/RepositoryContext";
import { Card } from "../cards";
import { SearchFormComponent } from "../searchbar";
import { ContentStyle, PostsSection } from "./style";
import { RepositoryContext } from "../../context/RepositoryContext";
import { useContext } from "react";



export function Content(){

    const { issues} = useContext(RepositoryContext);
    const { items, total_count } = issues;

    console.log('issues',issues);
    return(
        <ContentStyle>
            <SearchFormComponent publishedIssues={total_count}/>
            <PostsSection>
                {items.map((data:TIssue,index:number) =>(
                    <Card body={data.body} title={data.title} url={data.url} key={index} id={data.number}/>
                ))}
            </PostsSection>
        </ContentStyle>
    )
}