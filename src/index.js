import React from "react"
import ReactDOM from "react-dom"


console.log("crash");

function App() {
    return (
        <h1>titolo</h1>
    )
}

var rootNode = document.getElementById("root")
ReactDOM.render(<App />, rootNode)