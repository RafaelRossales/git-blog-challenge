import styled from "styled-components";

export const SearchFormContainer = styled.div`
    input {
        flex: 1;
        border-radius: 6px;
        border: 2px solid #112131;
        background: ${props => props.theme['baseBackground']};
        color: ${props => props.theme['gray-300']};
        padding: 1rem;
        width: 864px;
        &::placeholder {
            color: #3A536B; 
        }
    }
`;

export const ContainerSearch = styled.form`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const SearchBarHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
    color: ${props => props.theme.baseSubtitle};
    span {
        color: ${props => props.theme.baseSpan};
        font-size: 14px;
    }
`;
