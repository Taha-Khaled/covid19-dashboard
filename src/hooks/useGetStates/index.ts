import { useQuery } from "@tanstack/react-query";
import axiosClient from "../../axiosClient/axiosClient";
import { StatesType } from "../../types";

const fetchStates = async () => {
  const endPoint = "/states/info.json";

  const response = await axiosClient
    .get<StatesType[]>(endPoint)
    .then((res) => res.data)
    .catch(() => []);

  const states = response.map((state: StatesType) => ({
    label: state.name,
    value: state.state.toLocaleLowerCase(),
  }));

  return states;
};
export const useGetStates = () => {
  return useQuery({
    queryKey: ["getStates"],
    queryFn: fetchStates,
  });
};
