import { mount } from "kiru"
import { App } from "./App"
import "./global.css"
import "../public/water.css"

mount(<App />, document.getElementById("app")!)
