"use client";

import store from "@/redux/store";
import HomePage from "./home/page";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}
