import Select, { MultiValue } from "react-select";
import styled from "styled-components";
import { useGetStates } from "../../../hooks/useGetStates";
import { memo, useState } from "react";
import Chart from "../../Chart";
export declare type FieldValues = Record<string, any>;

const Container = styled.div`
  padding-bottom: 300px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  :first-child {
    color: black;
  }
`;
const GraphWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const GraphHolder = styled.div`
  width: 45%;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Title = styled.h4`
  text-align: center;
  color: ${(props) => props.theme.fontColor};
`;
type options = MultiValue<{ label: string; value: string }>;
const CompareStatistics = () => {
  const { data } = useGetStates();
  const [selectedStates, setSelectedStates] = useState<options>([]);

  const handelChangeStates = (
    states: MultiValue<{ label: string; value: string }>
  ) => {
    setSelectedStates(states);
  };
  return (
    <Container>
      <Title> Select States to Compare With</Title>
      <Select
        placeholder="Select State"
        onChange={handelChangeStates}
        isSearchable
        isMulti
        options={data}
      />
      {selectedStates.map((state) => (
        <GraphWrapper>
          <GraphHolder key={state.value}>
            <Chart
              stateSlug={state.value}
              title={`Positive Line Chart for ${state?.label}`}
              subTitle={`Historical Statistics for ${state?.label}`}
              type={"Line"}
              slug="positive"
            />
          </GraphHolder>
          <GraphHolder key={state.value}>
            <Chart
              stateSlug={state.value}
              title={`Negative Line Chart for ${state?.label}`}
              subTitle={`Historical Statistics for ${state?.label}`}
              type={"Line"}
              slug="negative"
            />
          </GraphHolder>
        </GraphWrapper>
      ))}
    </Container>
  );
};
export default memo(CompareStatistics);
