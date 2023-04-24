import React from "react";
import Sidebar from "./sidebar";
import styles from "@/styles/homepage.module.css";
import SearchWeather from "../search";

export default function LayoutComponent({ children }) {
  return (
    <div className={`${styles.main} flex flex-row`}>
      <Sidebar />
      <main className="w-full ml-40 flex">
        <div className="w-full">
          <div className="flex">
            <div className="basis-4/6">
              <SearchWeather />
            </div>
          </div>
          <div className="w-full">{children}</div>
        </div>
      </main>
    </div>
  );
}
