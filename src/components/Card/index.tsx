import { FunctionComponent, memo } from "react";
import styled from "styled-components";
interface CardProps {
  title: string;
  subTitle: string;
}

const CardWrapper = styled.div`
  min-width: 150px;
  height: 90px;
  padding: 20px;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.fontColor};
  box-shadow: ${(props) => props.theme.boxShadow};
`;
const Title = styled.h2`
  font-size: 15px;
  margin-bottom: 5px;
  text-transform: capitalize;
`;
const SubTitle = styled.h2`
  font-size: 15px;
  font-weight: 400;
`;
const Card: FunctionComponent<CardProps> = ({ title, subTitle }) => {
  return (
    <CardWrapper>
      <Title>{title} : </Title>
      <SubTitle>{subTitle}</SubTitle>
    </CardWrapper>
  );
};
export default memo(Card);
