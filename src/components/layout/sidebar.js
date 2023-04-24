import React from "react";
import { BsUmbrella, BsCloudSunFill } from "react-icons/bs";
import { TiWeatherPartlySunny, TiMap } from "react-icons/ti";
import { FaCity } from "react-icons/fa";
import { AiOutlineSetting } from "react-icons/ai";
import { Button } from "antd";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Sidebar() {
  const router = useRouter();
  return (
    <div className="fixed py-8 px-4 bg-slate-100 rounded-3xl flex justify-center">
      <div>
        <div className="pb-12 text-center">
          <div className="flex justify-center pb-2">
            <Image
              alt="img"
              src="/images/weatherIcons/weather.svg"
              width={60}
              height={60}
            />
          </div>
          <strong>Weather App</strong>
        </div>
        <div className="flex flex-col justify-center">
          <Button
            onClick={() => router.push("/")}
            className="text-center h-fit border-none shadow-none mb-8"
          >
            <div className="flex justify-center pb-2">
              <TiWeatherPartlySunny size="26px" fill="rgb(107 114 128)" />
            </div>
            <div className="text-gray-500">Weather</div>
          </Button>
          <Button
            onClick={() => router.push("/cities")}
            className="text-center h-fit border-none shadow-none mb-8"
          >
            <div className="flex justify-center pb-2">
              <FaCity size="26px" fill="rgb(107 114 128)" />
            </div>
            <div className="text-gray-500">Cities</div>
          </Button>
          <Button className="text-center h-fit border-none shadow-none mb-8">
            <div className="flex justify-center pb-2">
              <TiMap size="26px" fill="rgb(107 114 128)" />
            </div>
            <div className="text-gray-500">Map</div>
          </Button>
          <Button className="text-center h-fit border-none shadow-none mb-8">
            <div className="flex justify-center pb-2">
              <AiOutlineSetting size="26px" fill="rgb(107 114 128)" />
            </div>
            <div className="text-gray-500">Settings</div>
          </Button>
        </div>
      </div>
    </div>
  );
}
