import { IconsHeader, ImgContent, TextContent } from "@components/header/style";
import Repo from './../../../../public/img/git.png'
import Building from '../../../../public/img/building-solid.png';
import Followers from '../../../../public/img/user-group-solid.png';
import ArrowSquare from '../../../../public/img/arrow-up-right-from-square-solid.png';
import { TRepository } from "@context/RepositoryContext";


export function Profile({bio,name,followers,url,login,tag,avatar_url }:TRepository){

    return(
        <>
            <ImgContent>
                    <img src={avatar_url} alt="avatar" width={148} height={148}/>
            </ImgContent>
            <TextContent>
                    <div className="title"> {name} <a href={url}>{(tag).toUpperCase()} <img src={ArrowSquare}/></a></div>
                    <div className="body"> <p>{bio ? bio : 'Hi ✌' }</p></div>
                    <IconsHeader>
                        <div className="first-header-icon"><img src={Repo} alt="Repository Icon"/><div>{login}</div></div>
                        <div className="second-header-icon"><img src={Building} alt="Building Icon"/><div>Rocketseat</div></div>
                        <div className="third-header-icon"><img src={Followers} alt="Building Icon"/><div>{followers} Seguidores</div></div>
                    </IconsHeader>
        </TextContent>
        </>
    )

}