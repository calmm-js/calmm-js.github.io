import React    from "karet"
import {render} from "react-dom"

import "./ga"

const App = () =>
  <div>
    <h1>Calmm.js</h1>
    <p>
      Sorry! There is nothing here—<em>yet</em>. Click <a
      href="https://github.com/calmm-js">here</a> to go to the GitHub org page.
    </p>
  </div>

render(<App/>, document.getElementById("app"))
