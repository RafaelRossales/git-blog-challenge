import { useCallback, useContext, useState } from "react";
import { ContainerSearch, SearchBarHeader, SearchFormContainer } from "./styles";
import debounce from "debounce";
import { RepositoryContext } from "../../context/RepositoryContext";

interface ISearchProps{
    publishedIssues:number
}



export function SearchFormComponent({ publishedIssues }:ISearchProps) {
    const [value, setValue] = useState(''); 
    const { getIssues } = useContext(RepositoryContext);

    const searchDebounce = useCallback(debounce((param, getIssues) => {
        getIssues(param);
    }, 500), []);

    const onChange = useCallback((e:Event) => {
        const param = e.target.value;
        setValue(param);
        searchDebounce(param, getIssues);
    }, [getIssues]);

    return (
        <ContainerSearch>
            <SearchFormContainer>
                <SearchBarHeader>
                    <p>Publicações</p> <span>{publishedIssues} publicações</span>
                </SearchBarHeader>
                <input
                    type="text"
                    placeholder="Search post"
                    onChange={onChange}
                    value={value}
                />
            </SearchFormContainer>
        </ContainerSearch>
    );
}