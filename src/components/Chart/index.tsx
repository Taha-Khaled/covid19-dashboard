import { ChartData } from "chart.js";
import { FunctionComponent, memo, useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import styled from "styled-components";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useGetHistoricalData } from "../../hooks/useGetHistoricalData";
import { chartDataTransformer } from "../../utils/chardDataHelper";
import Loader from "../Loader";

interface ChartProps {
  chartData?: ChartData<"line", unknown[], unknown> &
    ChartData<"bar", unknown[], unknown>;
  title?: string;
  subTitle?: string;
  type: "Bar" | "Line";
  stateSlug?: string;
  slug?: string;
}
const { RangePicker } = DatePicker;
dayjs.extend(customParseFormat);

const Title = styled.h2`
  text-align: center;
  margin-bottom: 10px;
  color: ${(props) => props.theme.fontColor};
`;

const ChartContainer = styled.div`
  filter: ${(props) => props.theme.invert};
  margin: 30px auto;
`;
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const dateFormat = "YYYY-MM-DD";
const Chart: FunctionComponent<ChartProps> = ({
  chartData,
  title,
  subTitle,
  type,
  stateSlug,
  slug,
}) => {
  const Chart = type === "Bar" ? Bar : Line;

  const { data: stateData, isSuccess } = useGetHistoricalData(stateSlug);

  let initialData = stateSlug
    ? chartDataTransformer(stateData ?? [], slug!, `${slug} People`)
    : chartData;

  const [data, setData] = useState(initialData);

  useEffect(() => {
    if (isSuccess && stateSlug) {
      setData(chartDataTransformer(stateData ?? [], slug!, `${slug} People`));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  const getStartDate = (): string => {
    return initialData?.labels?.[0] as string;
  };

  const getEndDate = (): string => {
    return initialData?.labels?.[initialData?.labels?.length - 1] as string;
  };

  const handelChangeDate = (date: string[]) => {
    const startDate =
      new Date(date[0]) < new Date(getStartDate()) ? getStartDate() : date[0];
    const endDate =
      new Date(date[1]) > new Date(getEndDate()) ? getEndDate() : date[1];

    const startDateIndex = initialData?.labels?.indexOf(startDate) ?? 0;
    const endDateIndex =
      initialData?.labels?.indexOf(endDate) ??
      Number(initialData?.labels?.length) - 1;

    const labels = initialData?.labels?.slice(startDateIndex, endDateIndex + 1);
    const datasets = initialData?.datasets?.[0]?.data?.slice(
      startDateIndex,
      endDateIndex + 1
    );

    const newChartData = {
      labels: labels,
      datasets: [{ label: data?.datasets[0].label!, data: datasets! }],
    };
    setData(newChartData);
  };
  if (!isSuccess && stateSlug) return <Loader />;
  return (
    <div>
      <Title>{title}</Title>
      <ChartContainer className="chart-container">
        <Center>
          <RangePicker
            defaultValue={[
              dayjs(getStartDate(), dateFormat),
              dayjs(getEndDate(), dateFormat),
            ]}
            onChange={(_, date) => handelChangeDate(date)}
            format={dateFormat}
            allowClear={false}
          />
        </Center>
        <Chart
          data={data!}
          options={{
            plugins: {
              title: {
                display: !!subTitle,
                text: subTitle,
              },
              legend: {
                display: false,
              },
            },
          }}
        />
      </ChartContainer>
    </div>
  );
};
export default memo(Chart);
