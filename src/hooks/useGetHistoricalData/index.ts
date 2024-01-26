import { useQuery } from "@tanstack/react-query";
import axiosClient from "../../axiosClient/axiosClient";
import { StatisticsType } from "../../types";

const fetchHistoricalData = async (state?: string) => {
  const endPoint = state ? `/states/${state}/daily.json` : "/us/daily.json";

  const response = await axiosClient
    .get<StatisticsType[]>(endPoint)
    .then((res) => res.data)
    .catch(() => []);

  return response;
};
export const useGetHistoricalData = (state?: string) => {
  return useQuery({
    queryKey: ["getHistoricalData", state],
    queryFn: () => fetchHistoricalData(state),
  });
};
