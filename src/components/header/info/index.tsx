import { HeaderContent, InfoContainer, InfoHeader, TextContent } from "../style";
import  ChevronSolid  from '../../../../public/img/chevron-left-solid.png'

export function Info(){
    return(
        <InfoContainer >
            <InfoHeader>
                <a href=""><img src={ChevronSolid} width={10} height={10} />VOLTAR</a>
                <span>VER NO GITHUB</span>
            </InfoHeader>
            

        </InfoContainer>
    )
}