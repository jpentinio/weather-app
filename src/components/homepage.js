import React from "react";
import LayoutComponent from "./layout";
import styles from "@/styles/homepage.module.css";
import SearchWeather from "./search";
import {
  BsUmbrella,
  BsCloudSunFill,
  BsFillSunriseFill,
  BsFillSunsetFill,
} from "react-icons/bs";
import { TiWeatherPartlySunny, TiMap } from "react-icons/ti";
import { FaCity } from "react-icons/fa";
import { AiOutlineSetting } from "react-icons/ai";
import { Button, Spin } from "antd";
import Geocode from "react-geocode";
import { useDispatch, useSelector } from "react-redux";
import Actions from "@/redux/actions";
import moment from "moment";
import Image from "next/image";
import { weatherIcons } from "./weatherIcons";
import { WiHumidity } from "react-icons/wi";

export default function Homepage() {
  const dispatch = useDispatch();
  const selectedSearchFilter = useSelector(
    (state) => state.weatherForecast.selectedSearchFilter
  );
  const forecastData = useSelector(
    (state) => state.weatherForecast.forecastData
  );
  const todayForecast = useSelector(
    (state) => state.weatherForecast.forecastData.data?.forecast.forecastday[0]
  );
  const daysForecast = useSelector(
    (state) => state.weatherForecast.forecastData.data?.forecast.forecastday
  );
  const [coordinates, setCoordinates] = React.useState("");
  const [weatherForecast, setWeatherForecast] = React.useState({
    current_weather: {
      temperature: "",
      city: "",
    },
  });
  const forecast = [
    { time: "6:00 AM", degrees: "31°" },
    { time: "6:00 AM", degrees: "21°" },
    { time: "6:00 AM", degrees: "31°" },
    { time: "6:00 AM", degrees: "31°" },
    { time: "6:00 AM", degrees: "31°" },
    { time: "6:00 AM", degrees: "31°" },
  ];

  // React.useEffect(() => {
  //   if (selectedSearchFilter !== null) {
  //     async function fetchWeatherForecast() {
  //       try {
  //         let res = await dispatch(
  //           Actions.getWeatherForecast({
  //             latitude: selectedSearchFilter.latitude,
  //             longitude: selectedSearchFilter.longitude,
  //             current_weather: true,
  //           })
  //         );
  //       } catch (e) {
  //         console.log(e);
  //       }
  //     }
  //     fetchWeatherForecast();
  //   }
  // }, [selectedSearchFilter]);

  // React.useEffect(() => {
  //   if ("geolocation" in navigator) {
  //     navigator.geolocation.getCurrentPosition(function (position) {
  //       setCoordinates({
  //         lat: position.coords.latitude,
  //         lng: position.coords.longitude,
  //       });
  //       Geocode.setApiKey("AIzaSyAhDIk9pZu9YbRZ9RUiT3u3qZi3RybUZgU");
  //       Geocode.fromLatLng(
  //         position.coords.latitude,
  //         position.coords.longitude
  //       ).then(
  //         (response) => {
  //           const address = response.results[0].formatted_address;
  //           setWea
  //         },
  //         (error) => {
  //           console.error(error);
  //         }
  //       );
  //       console.log(position.coords.latitude, position.coords.longitude);
  //     });
  //   } else {
  //     console.log("Not Available");
  //   }
  // }, []);

  return (
    <div className={`flex flex-row w-full`}>
      <div className="w-full py-6 basis-2/3">
        <div className="p-12 flex justify-between items-center">
          <div className="basis/8/12">
            <div className="text-5xl font-medium">
              {forecastData.loading ? (
                <Spin />
              ) : forecastData.isSuccess ? (
                `${selectedSearchFilter.name}, ${forecastData.data.location.country}`
              ) : (
                ""
              )}
            </div>
            <div className="pt-4 font-medium">
              {forecastData.isSuccess &&
                moment(new Date(forecastData.data.location.localtime)).format(
                  "dddd"
                )}
              ,
              <span className="text-gray-400">
                {" "}
                {forecastData.isSuccess &&
                  moment(new Date(forecastData.data.location.localtime)).format(
                    "DD MMM, YYYY"
                  )}
              </span>
            </div>
            <div className="text-7xl font-bold pt-14">
              {forecastData.loading ? (
                <Spin size="large" />
              ) : forecastData.isSuccess ? (
                `${forecastData.data.current.temp_c}°C`
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="basis-4/12 text-center">
            {forecastData.isSuccess && (
              <Image
                alt="img"
                src={`https:${forecastData.data.current.condition.icon.replace(
                  "64x64",
                  "128x128"
                )}`}
                width={500}
                height={500}
              />
            )}
          </div>
        </div>
        <div className="bg-slate-100 w-full rounded-3xl p-6 mb-6">
          <div className="font-bold text-gray-500">TODAY'S FORECAST</div>
          <div className="pt-6 flex justify-center">
            {todayForecast &&
              todayForecast.hour
                .filter((i, index) => index % 4 === 0)
                .map((i, index) => {
                  return (
                    <div
                      key={index}
                      style={{ width: "16%" }}
                      className={`flex flex-col justify-center items-center px-6 ${
                        index < 5 ? `border-r-2` : ""
                      }`}
                    >
                      <div className="font-bold text-gray-500">
                        {moment(i.time).format("hh:mm A")}
                      </div>
                      <div className="py-5">
                        <Image
                          alt="img"
                          src={`https:${i.condition.icon.replace(
                            "64x64",
                            "128x128"
                          )}`}
                          width={70}
                          height={70}
                        />
                      </div>
                      <div className="text-2xl font-bold text-gray-500">
                        {i.temp_c}°C
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
        <div className="flex grid-rows-3 grid-flow-col gap-4">
          <div className="w-full rounded-3xl bg-slate-100 p-6">
            <div className="font-bold text-gray-500">Sunrise & Sunset</div>
            <div className="pt-4">
              <div className="flex items-center py-2">
                <BsFillSunriseFill
                  fill="rgb(234 179 8)"
                  style={{ width: 36, height: 36 }}
                />
                <div className="text-xl text-gray-500 font-medium ml-6">
                  {todayForecast?.astro.sunrise}
                </div>
              </div>
              <div className="flex items-center py-2">
                <BsFillSunsetFill
                  fill="rgb(234 179 8)"
                  style={{ width: 36, height: 36 }}
                />
                <div className="text-xl text-gray-500 font-medium ml-6">
                  {todayForecast?.astro.sunset}
                </div>
              </div>
            </div>
          </div>
          <div className="flex grid-rows-2 gap-4 w-full rounded-3xl bg-slate-100 p-6">
            <div className="w-full">
              <div className="flex items-center font-bold text-gray-500">
                Humidity <WiHumidity />
              </div>
              <div className="text-2xl">
                {forecastData.data?.current.humidity + `%`}
              </div>
            </div>
            <div className="w-full">
              <div className="flex items-center font-bold text-gray-500">
                Humidity <WiHumidity />
              </div>
              <div className="text-2xl">
                {forecastData.data?.current.humidity + `%`}
              </div>
            </div>
          </div>
          <div className="w-full rounded-3xl bg-slate-100 p-4">
            <div className="font-medium text-gray-500">Sunrise & Sunset</div>
          </div>
        </div>
      </div>
      <div className="w-full basis-1/3 flex flex-col pl-6">
        <div className="rounded-3xl bg-slate-100 p-10">
          <div className="font-medium text-gray-500">
            {daysForecast && daysForecast.length}-DAY FORECAST
          </div>
          <div className="flex flex-col justify-center">
            {daysForecast &&
              daysForecast.map((i, index) => {
                return (
                  <div
                    key={index}
                    className={`flex items-center justify-between ${
                      index < 2 ? `border-b-2` : ""
                    }`}
                  >
                    <div className="font-bold text-gray-500">
                      {index === 0 ? "Today" : moment(i.date).format("ddd")}
                    </div>
                    <div className="py-5 text-sm flex flex-col items-center">
                      <Image
                        alt="img"
                        src={`https:${i.day.condition.icon.replace(
                          "64x64",
                          "128x128"
                        )}`}
                        width={40}
                        height={40}
                      />
                      <div className="font-medium text-gray-500">
                        {i.day.condition.text}
                      </div>
                    </div>
                    <div className="font-bold ">
                      {i.day.maxtemp_c}
                      <span className="text-gray-500">/{i.day.mintemp_c}</span>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      {/* <div className="rounded-2xl h-screen bg-slate-100 w-full"></div>
      <div className="w-full">
        <SearchWeather />
      </div>
      <div className="rounded-2xl h-screen bg-slate-100 w-full"></div> */}
    </div>
  );
}
