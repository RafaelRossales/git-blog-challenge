import { Content } from "../../components/content";
import { Header } from "../../components/header";
import { Profile } from "../../components/header/profile";
import { Info } from "../../components/header/info";
import { useContext, useEffect, useState } from "react";
import  {RepositoryContext}  from "../../context/RepositoryContext";
import { useParams } from "react-router-dom";




export default function Home() {
    const params = useParams();
    const [loading, setLoading] = useState(true);
    const { repository, getIssue } = useContext(RepositoryContext);
    const [issue, setIssue] = useState(null);

    useEffect(() => {
        const fetchIssue = async () => {
            if (params.id) {
                try {
                    const issueData = await getIssue(+params.id);
                    setIssue(issueData);
        
                } catch (error) {
                    console.error("Error fetching issue:", error);
                } finally {
                    setLoading(false);
                }
            } else {

                setLoading(false);
            }
        };

        fetchIssue();
    }, [params.id, getIssue]);

    if (loading) {
        return <div>Loading...</div>; // Render a loading indicator
    }

    return (
        <div>
            <Header>
                {!issue ? (
                    <Profile
                        profileName={repository.name}
                        profileRepository={repository.html_url}
                        profileDescription="Rafael Garcia github repository"
                        profileImg={repository.avatar_url}
                        profileLink="https://github.com/rafaelrossalez"
                        profileLinkText="Github"
                        profileFollowers={repository.followers}
                    />
                ) : (
                    <Info issue={issue}/>
                )}
            </Header>
            <Content issue={issue} />
        </div>
    );
}