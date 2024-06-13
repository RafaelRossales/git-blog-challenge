import { ContainerSearch, SearchBarHeader, SearchFormContainer } from "./styles";

interface ISearchProps{
    publishedIssues:number
}

export function SearchFormComponent({publishedIssues}:ISearchProps){
    return(
        <ContainerSearch>
            <SearchFormContainer>
                <SearchBarHeader>
                    <p>Publicações</p> <span>{publishedIssues} publicações</span>
                </SearchBarHeader>
                <input type="text" placeholder="Busque por transação"/>
            </SearchFormContainer>
        </ContainerSearch>
    )
}