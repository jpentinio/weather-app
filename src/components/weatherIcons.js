import React from "react";
import day from "../../public/images/weatherIcons/day.svg";
import night from "../../public/images/weatherIcons/night.svg";
import cloudy from "../../public/images/weatherIcons/cloudy.svg";
import cloudyDay1 from "../../public/images/weatherIcons/cloudy-day-1.svg";
import cloudyDay2 from "../../public/images/weatherIcons/cloudy-day-2.svg";
import cloudyNight1 from "../../public/images/weatherIcons/cloudy-night-1.svg";
import cloudyNight2 from "../../public/images/weatherIcons/cloudy-night-2.svg";
import cloudyNight3 from "../../public/images/weatherIcons/cloudy-night-3.svg";
import rainy1 from "../../public/images/weatherIcons/rainy-1.svg";
import rainy2 from "../../public/images/weatherIcons/rainy-2.svg";
import rainy3 from "../../public/images/weatherIcons/rainy-3.svg";
import rainy4 from "../../public/images/weatherIcons/rainy-4.svg";
import rainy5 from "../../public/images/weatherIcons/rainy-5.svg";
import rainy6 from "../../public/images/weatherIcons/rainy-6.svg";
import rainy7 from "../../public/images/weatherIcons/rainy-7.svg";
import snowy1 from "../../public/images/weatherIcons/snowy-1.svg";
import snowy2 from "../../public/images/weatherIcons/snowy-2.svg";
import snowy3 from "../../public/images/weatherIcons/snowy-3.svg";
import snowy4 from "../../public/images/weatherIcons/snowy-4.svg";
import snowy5 from "../../public/images/weatherIcons/snowy-5.svg";
import snowy6 from "../../public/images/weatherIcons/snowy-6.svg";
import thunder from "../../public/images/weatherIcons/thunder.svg";
export function weatherIcons(is_day, code) {
  if (is_day === 1) {
    switch (code) {
      case 0:
        return day;
      case 1:
        return cloudyDay1;
      case 2:
        return cloudyDay2;
      case 3:
        return cloudy;
      case 45:
      case 48:
      case 51:
        return rainy1;
      case 53:
        return rainy2;
      case 55:
        return rainy3;
      case 56:
        return rainy4;
      case 57:
        return rainy5;
      case 61:
      case 63:
      case 65:
      case 80:
        return rainy6;
      case 66:
      case 67:
      case 81:
      case 82:
        return rainy7;
      case 71:
        return snowy1;
      case 73:
        return snowy2;
      case 75:
        return snowy3;
      case 77:
        return snowy4;
      case 85:
        return snowy5;
      case 86:
        return snowy6;
      case 95:
      case 96:
      case 99:
        return thunder;
      default:
        return day;
    }
  } else {
    switch (code) {
      case 0:
        return night;
      case 1:
        return cloudyNight1;
      case 2:
        return cloudyNight2;
      case 3:
      case 45:
      case 48:
      case 51:
        return cloudyNight3;
      case 53:
      case 55:
      case 56:
        return rainy4;
      case 57:
        return rainy5;
      case 61:
      case 63:
      case 65:
      case 80:
        return rainy6;
      case 66:
      case 67:
      case 81:
      case 82:
        return rainy7;
      case 71:
        return snowy1;
      case 73:
        return snowy2;
      case 75:
        return snowy3;
      case 77:
        return snowy4;
      case 85:
        return snowy5;
      case 86:
        return snowy6;
      case 95:
      case 96:
      case 99:
        return thunder;
      default:
        return night;
    }
  }
}
