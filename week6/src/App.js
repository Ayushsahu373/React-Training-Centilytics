// import logo from "./logo.svg";
import "./App.css";
// import TimerComponent from "./CustomHook/TimerUI";
// import PasswordInput from "./CustomHook/PaswordUi";

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCoins } from "../CryptoTracker/main files/Redux/CoinSlice";
import { store } from "../CryptoTracker/main files/Redux/store";
import CoinList from "../CryptoTracker/MainFiles/Components/CoinList";

function App() {
  return (
    <div className="App">
      {/* <TimerComponent /
      <br />
      // <PasswordInput /> */}

      <div>
        <h1>Crypto Price Tracker</h1>
        <CoinList />
      </div>
    </div>
  );
}

export default App;
