import { CardBody, CardContent, CardHeader, CardHeaderText, CardHeaderTime } from "./style";

export function Card(){
    return(
        <CardContent>
            <CardHeader>
                <CardHeaderText>
                    JavaScript data types and data structures
                </CardHeaderText>
                    <CardHeaderTime>Há 1 dia</CardHeaderTime>
            </CardHeader>
            <CardBody>
                Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in.
            </CardBody>
        </CardContent>
    )
}