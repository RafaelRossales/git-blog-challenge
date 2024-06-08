import styled from "styled-components";

export const CardContent = styled.div`
    width: 416px;
    height: 260px;
    background-color: ${props=>props.theme.basePost};
    border-radius: 10px 10px 10px 10px;
    padding: 25px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

export const CardHeader = styled.div`
     display: flex;
     flex-direction: row;
     width: 352px;
     justify-content: space-between;
`

export const CardHeaderText = styled.div`
    font-size: 20px;
    font-weight:bold;
    width: 283px;
    height: 64px;
`

export const CardHeaderTime = styled.div`
    font-size: 12px;
`

export const CardBody = styled.div`
    margin-top: 24px;
    width: 352px;
    height: 12px;
    font-size: 14px;
    display: flex;
    flex-wrap: wrap;
    text-align: justify;
    color:${props=>props.theme.baseText};
    line-height: 1.4rem;
`