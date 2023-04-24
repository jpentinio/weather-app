import React from "react";
import { Input, Menu, Select, Spin } from "antd";
import styles from "@/styles/search.module.css";
import { useDispatch, useSelector } from "react-redux";
import Actions from "@/redux/actions";

export default function SearchWeather() {
  const dispatch = useDispatch();
  const searchFilterData = useSelector(
    (state) => state.weatherForecast.searchFilter.data
  );
  const loading = useSelector(
    (state) => state.weatherForecast.searchFilter.loading
  );
  const [search, setSearch] = React.useState("");
  const [searchItems, setSearchItems] = React.useState([]);

  async function handleSearch(value) {
    try {
      let res = await dispatch(Actions.searchCities(value));
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSelected(value) {
    dispatch(Actions.selectedSearchFilter(JSON.parse(value)));
    let params = JSON.parse(value);
    console.log(params);
    try {
      let res = await dispatch(
        Actions.getWeatherForecast({
          q: `${params.lat}, ${params.lon}`,
          days: "7",
        })
      );
    } catch (e) {
      console.log(e);
    }
  }

  React.useEffect(() => {
    if (search !== "") {
      const delayDebounceFn = setTimeout(() => {
        handleSearch(search);
      }, 500);
      return () => clearTimeout(delayDebounceFn);
    }
  }, [search]);

  React.useEffect(() => {
    if (searchFilterData.length) {
      setSearchItems(
        searchFilterData.map((i, key) => {
          return {
            label: `${i.name}, ${i.region}, ${i.country}`,
            value: JSON.stringify(i),
            key,
          };
        })
      );
    } else {
      setSearchItems([]);
    }
  }, [searchFilterData]);
  return (
    <>
      <Select
        showSearch
        allowClear={true}
        loading={loading}
        searchValue={search}
        // onClear={() => setSearch("")}
        placeholder="Search for cities"
        optionFilterProp="children"
        onSearch={(value) => setSearch(value)}
        onSelect={(value) => handleSelected(value)}
        filterOption={(input, option) =>
          (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
        }
        options={searchItems}
        size="large"
        style={{ width: "100%" }}
      />
    </>
  );
}
