import { Card } from "../cards";
import { SearchFormComponent } from "../searchbar";
import { ContentStyle, PostsSection } from "./style";

export function Content(){
    return(
        <ContentStyle>
            <SearchFormComponent/>
            <PostsSection>
                <Card/>   
                <Card/>
                <Card/>
                <Card/>
                <Card/> 
                <Card/>   
                <Card/>
                <Card/>
                <Card/>
                <Card/> 
                <Card/>   
                <Card/>
                <Card/>
                <Card/>
                <Card/> 
            </PostsSection>
        </ContentStyle>
    )
}