import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`;

export const SkeletonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const SkeletonElement = styled.div<{width:string, height:string, marginBottom:number}>`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '20px'};
  margin-bottom: ${(props) => props.marginBottom || '10px'};
  background: #f6f7f8;
  background-image: linear-gradient(to right, #eeeeee 0%, #dddddd 20%, #eeeeee 40%, #eeeeee 100%);
  background-repeat: no-repeat;
  background-size: 800px 104px;
  display: inline-block;
  position: relative;
  animation: ${shimmer} 1s linear infinite;
`;
