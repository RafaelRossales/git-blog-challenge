import { ContainerSearch, SearchBarHeader, SearchFormContainer } from "./styles";

export function SearchFormComponent(){
    return(
        <ContainerSearch>
            <SearchFormContainer>
                <SearchBarHeader>
                    <p>Publicações</p> <span>6 pblicações</span>
                </SearchBarHeader>
                <input type="text" placeholder="Busque por transação"/>
            </SearchFormContainer>
        </ContainerSearch>
    )
}