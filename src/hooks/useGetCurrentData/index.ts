import { useQuery } from "@tanstack/react-query";
import axiosClient from "../../axiosClient/axiosClient";
import { StatisticsType } from "../../types";

const fetchCurrentData = async (state?: string) => {
  const endPoint = state ? `/states/${state}/current.json` : "/us/current.json";
  const response = await axiosClient
    .get(endPoint)
    .then((res) => res.data)
    .catch(() => []);

  return state ? response : response?.[0];
};
export const useGetCurrentData = (state?: string) => {
  return useQuery<StatisticsType>({
    queryKey: [`getCurrentData`, state],
    queryFn: () => fetchCurrentData(state),
  });
};
