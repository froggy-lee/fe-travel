import axios from "axios";

export const getWeatherRequest = async (APIkey: string, city: string) => {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`
    );
    return res?.data;
  } catch (error) {
    console.error(error);
  }
};
