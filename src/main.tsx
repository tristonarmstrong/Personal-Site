import { mount } from "kiru"
import { App } from "./App"
import "./global.css"
import "/water.css"

mount(<App />, document.getElementById("app")!)
