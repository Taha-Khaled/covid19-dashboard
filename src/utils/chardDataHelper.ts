import { StatisticsType } from "../types";

const dateFormatter = (date: number | string) => {
  date = date.toString();
  const formattedDate = `${date.substring(0, 4)}-${date.substring(
    4,
    6
  )}-${date.substring(6, 8)}`;
  return formattedDate;
};

export const chartDataTransformer = (
  Data: StatisticsType[],
  key: string,
  label: string
) => {
  return {
    labels: Data.map((data) => dateFormatter(data?.date)).reverse(),
    datasets: [
      {
        label: label,
        data: Data.map(
          (data) => data?.[key as keyof typeof data] ?? 0
        ).reverse(),
      },
    ],
  };
};
