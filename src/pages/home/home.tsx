import { Header } from "../../components/header";
import { Profile } from "../../components/header/profile";
import { Info } from "../../components/header/info";
import { useContext, useEffect, useState } from "react";
import  {RepositoryContext, TRepository, defaultRepository}  from "../../context/RepositoryContext";
import { useParams } from "react-router-dom";
import { ContentStyle } from "../../components/content/style";
import Post from "../../components/post/Post";
import Posts from "../../components/post/Posts";
import { Skeleton } from "../../components/skeleton";
import { SearchBarHeader } from "../../components/searchbar/styles";
import { SearchFormComponent } from "../../components/searchbar";




export default function Home() {
    const params = useParams();
    const { repository, getIssue, issues } = useContext(RepositoryContext);
    const [issue, setIssue] = useState(null);
    const { items, total_count } = issues;



    useEffect(() => {
        const fetchIssue = async () => {
            if (params.id) {
                try {
                    const issueData = await getIssue(+params.id);
                    setIssue(issueData);
                } catch (error) {
                    console.error("Error fetching issue:", error);
                } 
            } else {
                setIssue(null);
            }
        };
        fetchIssue();
    }, [params.id, getIssue]);

    return (
        <div>
            <Header>
                {!issue ? (
                    <Profile
                        name={repository.name}
                        profileRepository={repository.login}
                        bio={repository.bio}
                        avatar_url={repository.avatar_url}
                        url={repository.url}
                        tag="Github"
                        login={repository.login}
                        followers={repository.followers}
                    />
                ) : (
                    <Info info={issue}/>
                )}
            </Header>
            <ContentStyle>
            {issue ? (
                <Post post={issue} />
            ) : (
                    <>
                        <SearchFormComponent publishedIssues={total_count}/>
                        <Posts posts={items} />
                    </>
                )
            }
        </ContentStyle>
        </div>
    );
}