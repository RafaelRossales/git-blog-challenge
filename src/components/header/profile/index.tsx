import { ImgContent, TextContent } from "../style";
import NodeJS from './../../../../public/img/nodejs.png'
import Repo from './../../../../public/img/git.png'
import Building from '../../../../public/img/building-solid.png';
import Followers from '../../../../public/img/user-group-solid.png';
import ArrowSquare from '../../../../public/img/arrow-up-right-from-square-solid.png';

interface IProfileProps{
    profileImg:string;
    profileName:string;
    profileDescription:string;
    profileFollowers:number;
    profileRepository:string;
    profileLink:string;
    profileLinkText:string;
}


export function Profile({
    profileDescription,
    profileName,
    profileFollowers,
    profileRepository,
    profileImg
}:IProfileProps){
    return(
        <>
            <ImgContent>
                    <img src={NodeJS} alt="avatar" width={148} height={148}/>
            </ImgContent>
            <TextContent>
                    <div className="title">
                        {profileName} <a href={profileRepository}>GITHUB <img src={ArrowSquare} /></a>
                    </div>
                    <div className="body">
                        <p>{profileDescription}</p>
                    </div>
                    <div className="footer">
                        <div className="repo"><img src={Repo} alt="Repository Icon"/><div>{profileName}</div></div>
                        <div className="building"><img src={Building} alt="Building Icon"/><div>Rocketseat</div></div>
                        <div className="followers"><img src={Followers} alt="Building Icon"/><div>{profileFollowers} Seguidores</div></div>
                    </div>
        </TextContent>
        </>
    )

}