import Services from "./services";

export const ActionTypes = {
  SEARCH_FILTER: "SEARCH_FILTER",
  SEARCH_FILTER_LOADING_ON: "SEARCH_FILTER_LOADING_ON",
  SEARCH_FILTER_LOADING_OFF: "SEARCH_FILTER_LOADING_OFF",
  SELECTED_SEARCH_FILTER: "SELECTED_SEARCH_FILTER",
  GET_WEATHER_FORECAST: "GET_WEATHER_FORECAST",
  GET_WEATHER_FORECAST_LOADING_ON: "GET_WEATHER_FORECAST_LOADING_ON",
  GET_WEATHER_FORECAST_LOADING_OFF: "GET_WEATHER_FORECAST_LOADING_OFF",
};

class Actions {
  static searchCities(value) {
    return async (dispatch) => {
      try {
        dispatch({ type: ActionTypes.SEARCH_FILTER_LOADING_ON });
        let response = await Services.searchCities(value);
        console.log(response);
        dispatch({
          type: ActionTypes.SEARCH_FILTER,
          payload: response.data,
          value,
        });
        dispatch({ type: ActionTypes.SEARCH_FILTER_LOADING_OFF });
      } catch (error) {
        console.log(error);
      }
    };
  }

  static selectedSearchFilter(values) {
    return async (dispatch) => {
      dispatch({ type: ActionTypes.SELECTED_SEARCH_FILTER, payload: values });
    };
  }

  static getWeatherForecast(values) {
    return async (dispatch) => {
      try {
        dispatch({ type: ActionTypes.GET_WEATHER_FORECAST_LOADING_ON });
        let response = await Services.getWeatherForecast(values);
        dispatch({
          type: ActionTypes.GET_WEATHER_FORECAST,
          payload: response.data,
          isSuccess: response.status === 200 ? true : false,
        });
        console.log(response);
        dispatch({ type: ActionTypes.GET_WEATHER_FORECAST_LOADING_OFF });
      } catch (error) {
        console.log(error);
      }
    };
  }
}

export default Actions;
