import {IconsHeader, InfoBody, InfoContainer, InfoHeader } from "../style";
import  ChevronSolid  from '../../../../public/img/blue-chevron.png'
import Repo from './../../../../public/img/git.png';
import Calendar from './../../../../public/img/calendar-day-solid.png';
import Comments from './../../../../public/img/comment-solid.png';

export function Info(){
    return(
        <InfoContainer >
            <InfoHeader>
                <a href=""><img src={ChevronSolid} width={10} height={10} />VOLTAR</a>
                <span>VER NO GITHUB</span>
            </InfoHeader>
            <InfoBody>
                <p>JavaScript data types and data structures</p>
                    <IconsHeader>
                        <div className="first-header-icon"><img src={Repo} alt="Repository Icon"/><div>rafaelrossales</div></div>
                        <div className="second-header-icon"><img src={Calendar} alt="Calendar Icon"/><div>Há 1 dia</div></div>
                        <div className="third-header-icon"><img src={Comments} alt="Comments Icon"/><div>32 Comentários</div></div>
                    </IconsHeader>
            </InfoBody>

        </InfoContainer>
    )
}