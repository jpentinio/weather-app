const { default: axios } = require("axios");

class Services {
  static async searchCities(value) {
    try {
      let response = await axios.get(
        `https://weatherapi-com.p.rapidapi.com/search.json?q=${value}`,
        {
          headers: {
            "X-RapidAPI-Key":
              "95eb392bb2mshf4b629c358b8772p1e8a3djsn49ff4ea27351",
            "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
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
            "X-RapidAPI-Key":
              "95eb392bb2mshf4b629c358b8772p1e8a3djsn49ff4ea27351",
            "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
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
