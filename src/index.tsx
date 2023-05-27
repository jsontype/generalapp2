import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
// react-router-dom 라이브러리로부터 BrowserRouter 컴포넌트 함수를 임포트한다.
import { BrowserRouter } from "react-router-dom"

/** ★★ CPR 임포트 : createStore, Provider, rootReducer */
import rootReducer from "./modules"
import { createStore } from "redux"
import { Provider } from "react-redux"

/** 스토어 만들기 : createStore 함수의 파라미터에 루트리듀서 넣기 */
const store = createStore(rootReducer) // console.log(store.getState()) // store 조회하는 법

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  /** Provider를 통해, 스토어를 리액트 앱에 제공하기 */
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
