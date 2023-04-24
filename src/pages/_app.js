import LayoutComponent from "@/components/layout";
import configureStore from "@/store/configureStore";
import "@/styles/globals.css";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  const store = configureStore();
  return (
    <Provider store={store}>
      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
    </Provider>
  );
}
