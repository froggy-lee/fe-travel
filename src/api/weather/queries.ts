import { getWeatherRequest } from "./request";
import { useQuery } from "@tanstack/react-query";
import { APIkey_Weather, city } from "@/const";

export const useGetWeather = () => {
  return useQuery({
    queryKey: ["weather", APIkey_Weather, city],
    queryFn: () => getWeatherRequest(APIkey_Weather, city),
  });
};
