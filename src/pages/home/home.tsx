import { Card } from "../../components/cards";
import { Content } from "../../components/content";
import { Header } from "../../components/header";
import { HomeContent } from "./style";
import { Profile } from "../../components/header/profile";
import { Info } from "../../components/header/info";
import { useState } from "react";

export default function Home(){

    let [renderProfile, setRenderProfile] = useState<boolean>(false)

    return(
        <div>
            <Header children={ renderProfile ? 
            <Profile 
                profileName="Rafael Garcia"
                profileRepository="rafaelrossalez"
                profileDescription="Rafael Garcia github repository"
                profileImg="https://avatars.githubusercontent.com/rafaelrossalez?v=4"
                profileLink="https://github.com/rafaelrossalez"
                profileLinkText="Github"
                profileFollowers={100}
                />  : 
                <Info/>
                }/>
            <Content/>
        </div>
    )
}