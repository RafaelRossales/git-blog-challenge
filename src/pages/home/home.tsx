import { Content } from "../../components/content";
import { Header } from "../../components/header";
import { Profile } from "../../components/header/profile";
import { Info } from "../../components/header/info";
import { useContext, useEffect, useState } from "react";
import  {RepositoryContext}  from "../../context/RepositoryContext";




export default function Home(){

    const [renderProfile, setRenderProfile] = useState<boolean>(true);
    const [loading, setLoading] = useState(true);
    const { repository } = useContext(RepositoryContext);

    useEffect(() => {
        if (repository) {
          setLoading(false);
        }
      }, [repository]);
    
      if (loading) {
        return <div>Loading...</div>; // Render a loading indicator
      }

    return(
        <div>
            <Header children={ renderProfile ? 
            <Profile
                profileName={repository.name}
                profileRepository={repository.html_url}
                profileDescription="Rafael Garcia github repository"
                profileImg={repository.avatar_url}
                profileLink="https://github.com/rafaelrossalez"
                profileLinkText="Github"
                profileFollowers={repository.followers}
                />  : 
                <Info/>
                }/>
            <Content/>
        </div>
    )
}