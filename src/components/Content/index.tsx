import { memo } from "react";
import Navbar from "../Navbar";
import styled from "styled-components";
import CurrentStatistics from "../Statistics/CurrentStatistics";
import HistoricalStatistics from "../Statistics/HistoricalStatistics";
import { selectState } from "../../stateManager/features/stateSlice";
import { useSelector } from "react-redux";
import SelectUsState from "../SelectState";
import CompareStatistics from "../Statistics/CompareStatistics";

const Container = styled.section`
  color: ${(props) => props.theme.fontColor};
  background-color: ${(props) => props.theme.backgroundColor};
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 25px;
  margin-bottom: 15px;
  text-align: center;
  color: ${(props) => props.theme.fontColor};
`;
const Sections = styled.section`
  margin-top: 130px;
  padding: 0 100px;
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;
const Content = () => {
  const { state } = useSelector(selectState);

  return (
    <Container>
      <Navbar />
      <Sections>
        <Title>
          COVID-19 Current Statistics for {state?.label ?? "US States"}
        </Title>
        <CurrentStatistics />
        <SelectUsState />
        <Title>
          COVID-19 Historical Statistics for {state?.label ?? "US States"}
        </Title>
        <HistoricalStatistics />
        <Title>COVID-19 Comparison between States</Title>
        <CompareStatistics />
      </Sections>
    </Container>
  );
};
export default memo(Content);
