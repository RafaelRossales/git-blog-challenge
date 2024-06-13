import { IconsHeader, ImgContent, TextContent } from "../style";
import NodeJS from './../../../../public/img/nodejs.png'
import Repo from './../../../../public/img/git.png'
import Building from '../../../../public/img/building-solid.png';
import Followers from '../../../../public/img/user-group-solid.png';
import ArrowSquare from '../../../../public/img/arrow-up-right-from-square-solid.png';
import { TRepository } from "../../../context/RepositoryContext";


export function Profile({
    profileDescription,
    profileName,
    profileFollowers,
    profileRepository,
    profileImg
}:TRepository){
    return(
        <>
            <ImgContent>
                    <img src={profileImg} alt="avatar" width={148} height={148}/>
            </ImgContent>
            <TextContent>
                    <div className="title"> {profileName} <a href={profileRepository}>GITHUB <img src={ArrowSquare} /></a></div>
                    <div className="body"> <p>{profileDescription}</p></div>
                    <IconsHeader>
                        <div className="first-header-icon"><img src={Repo} alt="Repository Icon"/><div>{profileName}</div></div>
                        <div className="second-header-icon"><img src={Building} alt="Building Icon"/><div>Rocketseat</div></div>
                        <div className="third-header-icon"><img src={Followers} alt="Building Icon"/><div>{profileFollowers} Seguidores</div></div>
                    </IconsHeader>
        </TextContent>
        </>
    )

}