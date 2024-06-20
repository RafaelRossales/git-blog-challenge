import {IconsHeader, InfoBody, InfoContainer, InfoHeader } from "../style";
import  ChevronSolid  from '../../../../public/img/blue-chevron.png'
import Repo from './../../../../public/img/git.png';
import Calendar from './../../../../public/img/calendar-day-solid.png';
import Comments from './../../../../public/img/comment-solid.png';
import { Link } from "react-router-dom";


type TInfo = {
    comments:number,
    title:string
    html_url:string
    user:{
        login:string
    }
}


interface IInfoProps{
    info:TInfo
}

export function Info({info}:IInfoProps){

    const titleHandler = (str:string) => str.split(':')[1];
    
    return(
        <InfoContainer >
            <InfoHeader>
            <Link to={`/`}>
                <div><img src={ChevronSolid} width={10} height={10} />VOLTAR</div>
            </Link>
                <span><a href={info.html_url}>VER NO GITHUB</a></span>
            </InfoHeader>
            <InfoBody>
                <p>{titleHandler(info.title)}</p>
                    <IconsHeader>
                        <div className="first-header-icon"><img src={Repo} alt="Repository Icon"/><div>{info.user.login}</div></div>
                        <div className="second-header-icon"><img src={Calendar} alt="Calendar Icon"/><div>Há 1 dia</div></div>
                        <div className="third-header-icon"><img src={Comments} alt="Comments Icon"/><div>{info.comments} Comentários</div></div>
                    </IconsHeader>
            </InfoBody>

        </InfoContainer>
    )
}