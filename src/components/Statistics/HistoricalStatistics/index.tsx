import styled from "styled-components";
import { useGetHistoricalData } from "../../../hooks/useGetHistoricalData";
import Chart from "../../Chart";
import { chartDataTransformer } from "../../../utils/chardDataHelper";
import { selectState } from "../../../stateManager/features/stateSlice";
import { useAppSelector } from "../../../stateManager/store";
import Loader from "../../Loader";
import { memo } from "react";

const ChartsHolder = styled.div`
  width: 60%;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HistoricalStatistics = () => {
  const { state } = useAppSelector(selectState);
  const { data, isLoading } = useGetHistoricalData(state?.value);

  return (
    <Center>
      {isLoading ? (
        <Loader />
      ) : (
        <ChartsHolder>
          <Chart
            chartData={chartDataTransformer(
              data ?? [],
              "positive",
              "Positive People"
            )}
            title={"Positive Bar Chart"}
            subTitle={`Historical Statistics for ${state?.label ?? "all US"}`}
            type={"Bar"}
          />
          <Chart
            chartData={chartDataTransformer(
              data ?? [],
              "negative",
              "negative People"
            )}
            title={"Negative Line Chart"}
            subTitle={`Historical Statistics for ${state?.label ?? "all US"}`}
            type={"Line"}
          />
        </ChartsHolder>
      )}
    </Center>
  );
};
export default memo(HistoricalStatistics);
