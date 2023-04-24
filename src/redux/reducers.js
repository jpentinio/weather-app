import { ActionTypes } from "./actions";

const initialState = {
  searchFilter: {
    loading: false,
    data: [],
  },
  selectedSearchFilter: null,
  loading: false,
  forecastData: {
    loading: false,
    data: null,
    isSuccess: false,
  },
};

export default function reducers(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SEARCH_FILTER_LOADING_ON:
      return {
        ...state,
        searchFilter: {
          ...state.searchFilter,
          loading: true,
        },
      };
    case ActionTypes.SEARCH_FILTER_LOADING_OFF:
      return {
        ...state,
        searchFilter: {
          ...state.searchFilter,
          loading: false,
        },
      };
    case ActionTypes.SEARCH_FILTER:
      return {
        ...state,
        searchFilter: {
          ...state.searchFilter,
          loading: false,
          data: !action.value ? [] : action.payload,
        },
      };
    case ActionTypes.SELECTED_SEARCH_FILTER:
      return {
        ...state,
        searchFilter: {
          ...state.searchFilter,
          loading: false,
        },
        selectedSearchFilter: action.payload,
      };
    case ActionTypes.GET_WEATHER_FORECAST_LOADING_ON:
      return {
        ...state,
        forecastData: {
          ...state.forecastData,
          loading: true,
        },
      };
    case ActionTypes.GET_WEATHER_FORECAST_LOADING_OFF:
      return {
        ...state,
        forecastData: {
          ...state.forecastData,
          loading: false,
        },
      };
    case ActionTypes.GET_WEATHER_FORECAST:
      return {
        ...state,
        forecastData: {
          ...state.forecastData,
          data: action.payload,
          isSuccess: action.isSuccess,
        },
      };
    default:
      return state;
  }
}
