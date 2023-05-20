import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// react-router-dom 라이브러리로부터 BrowserRouter 컴포넌트 함수를 임포트한다.
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
