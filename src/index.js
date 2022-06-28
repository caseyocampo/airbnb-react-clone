import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

// React 17 way of rendering App to root ID
// import ReactDOM from "react-dom"
// ReactDOM.render(<App />, document.getElementById('root'))

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)
