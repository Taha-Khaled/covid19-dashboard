import { useQuery } from "@tanstack/react-query";
import axiosClient from "../../axiosClient/axiosClient";
export interface StatesType {
  state: string;
  notes: string;
  covid19Site: string;
  covid19SiteSecondary?: string;
  covid19SiteTertiary?: string;
  covid19SiteQuaternary?: string;
  covid19SiteQuinary?: string;
  twitter?: string;
  covid19SiteOld: string;
  covidTrackingProjectPreferredTotalTestUnits: string;
  covidTrackingProjectPreferredTotalTestField: string;
  totalTestResultsField: string;
  pui: string;
  pum: boolean;
  name: string;
  fips: string;
}

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
