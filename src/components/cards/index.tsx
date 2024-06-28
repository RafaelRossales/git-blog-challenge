import { Link } from "react-router-dom";
import { TIssue } from "../../context/RepositoryContext";
import { CardBody, CardContent, CardHeader, CardHeaderText, CardHeaderTime } from "./style";

export function Card({ body, title , id }:TIssue){

    const  bodyHandler = (str:string) => `${str.length > 250 && str.substring(0,230)} ...`;    
    const  titleHandler = (str:string) => str.split(':')[1];

    return(
        <CardContent>
            <CardHeader>
                <CardHeaderText>
                    {titleHandler(title)}
                </CardHeaderText>
                    <CardHeaderTime>Há 1 dia</CardHeaderTime>
            </CardHeader>
            <CardBody>
                <Link to={`/post/${id}`}>
                    {bodyHandler(body)}
                </Link>
            </CardBody>
        </CardContent>
    )
}