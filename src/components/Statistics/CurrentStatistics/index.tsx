import styled from "styled-components";
import Card from "../../Card";
import { useGetCurrentData } from "../../../hooks/useGetCurrentData";
import { useAppSelector } from "../../../stateManager/store";
import { selectState } from "../../../stateManager/features/stateSlice";
import Loader from "../../Loader";
import { memo } from "react";

const CardHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const Container = styled.div`
  min-height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CurrentStatistics = () => {
  const { state } = useAppSelector(selectState);
  const { data, isLoading } = useGetCurrentData(state?.value);
  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <CardHolder>
          <Card title="Positive" subTitle={data?.positive ?? "-"} />
          <Card title="Negative" subTitle={data?.negative ?? "-"} />
          <Card title="Pending Cases" subTitle={data?.pending ?? "-"} />
          <Card title="ICU" subTitle={data?.inIcuCurrently ?? "-"} />
          <Card title="hospitalized" subTitle={data?.hospitalized ?? "-"} />
          <Card
            title="Ventilator"
            subTitle={data?.onVentilatorCurrently ?? "-"}
          />
        </CardHolder>
      )}
    </Container>
  );
};
export default memo(CurrentStatistics);
