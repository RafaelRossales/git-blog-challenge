import styled from "styled-components";
import Cover from '../../../public/img/Cover.png'

export const HeaderContainer = styled.div`
    height: 296px;
    background-image: url(${Cover});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;  
    display: flex;
    justify-content: center;
    margin-bottom: 150px;
`;

export const HeaderContent = styled.div`
    display: flex;
    width: 864px;
    height: 212px;
    background-color: ${props=>props.theme.baseProfile};
    border-radius: 10px 10px 10px 10px;
    position: absolute;
    padding: 30px;
    top:200px;
    
`
export const ImgContent = styled.div`
    width: 148px;
    height: 148px;
    border-radius: 8px 8px 8px 8px;
    background-color: gray;
    /* position: absolute; */
`;

export const TextContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    width: 100%;
    gap:12px;
    margin-left: 20px;
    
    .title{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 24px;
        align-items:center;
        font-weight:bold;


        a{
            font-size: 14px;
            font-weight:bold;
            color:${props=>props.theme.brandBlue};
            text-decoration: none;

            img{
                width:11px;
                height:11px;
                margin-left: 8px;
            }
        }
    }
    .body{
        text-align: justify;
    }

    .footer{
        display: flex;
        flex-direction:row;
        width: 65%;
        justify-content: start;
        gap: 20px;

        .repo{
            display: flex;
            flex-direction: row;
            align-items: center;

            img{
                width:18px;
                height:18px;
                margin-right: 8px;
            }
        }

        .building{
            display: flex;
            flex-direction: row;
            align-items: center;

            img{
                width:18px;
                height:18px;
                margin-right: 8px;
            }
        }

        .followers{
            display: flex;
            flex-direction: row;
            align-items: center;

            img{
                width:18px;
                height:18px;
                margin-right: 8px;
            }
        }
    }

    
`

export const InfoContainer = styled.div`
    width: 100vw;
    height:auto;
    /* background-color: red; */

`

export const InfoHeader = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 12px;
    color: ${props=>props.theme.brandBlue};

    a{
        text-decoration: none;
        color: ${props=>props.theme.brandBlue};
    }
    
    a > img{
        margin-right:3px;
    }
`