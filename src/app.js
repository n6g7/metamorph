import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { ipcRenderer } from "electron"

import store from "./redux/store"
import App from "./components/App"
import "./assets/style.styl"

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app"),
)

ipcRenderer.on("scroll-touch-begin", () => {
  window.dispatchEvent(new Event("scroll-touch-begin"))
})
ipcRenderer.on("scroll-touch-end", () => {
  window.dispatchEvent(new Event("scroll-touch-end"))
})
