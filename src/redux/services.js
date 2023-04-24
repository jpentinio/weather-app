const { default: axios } = require("axios");

class Services {
  static async searchCities(value) {
    try {
      let response = await axios.get(
        `https://weatherapi-com.p.rapidapi.com/search.json?q=${value}`,
        {
          headers: {
            "X-RapidAPI-Key": process.env.NEXT_PUBLIC_WEATHER_API_KEY,
            "X-RapidAPI-Host": process.env.NEXT_PUBLIC_WEATHER_API_HOST,
          },
        }
      );
      return response;
    } catch (error) {
      throw error.response;
    }
  }

  static async getWeatherForecast(params) {
    try {
      let response = await axios.get(
        `https://weatherapi-com.p.rapidapi.com/forecast.json`,
        {
          params: { ...params },
          headers: {
            "X-RapidAPI-Key": process.env.NEXT_PUBLIC_WEATHER_API_KEY,
            "X-RapidAPI-Host": process.env.NEXT_PUBLIC_WEATHER_API_HOST,
          },
        }
      );
      return response;
    } catch (error) {
      throw error.response;
    }
  }
}

export default Services;
