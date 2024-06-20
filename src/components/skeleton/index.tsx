import { SkeletonElement, SkeletonWrapper } from "./style";

export function Skeleton(){
    return(
        <SkeletonWrapper>
            <SkeletonElement height="20px" width="70%" />
            <SkeletonElement height="15px" width="90%" />
            <SkeletonElement height="15px" width="60%" />
        </SkeletonWrapper>
    )
}