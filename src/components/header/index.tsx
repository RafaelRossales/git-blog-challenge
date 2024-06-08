import { HeaderContainer, HeaderContent } from "./style";


interface IHeader{
    children: React.ReactNode;
}


export function Header({children}: IHeader){
    return(
        <HeaderContainer>
            <HeaderContent>
                    {children}
            </HeaderContent>
        </HeaderContainer>
    )
}