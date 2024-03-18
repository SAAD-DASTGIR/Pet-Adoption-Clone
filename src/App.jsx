import React from "react"
import  {createRoot} from "react-dom"
const Pet =(props)=>{
    return React.createElement(
        "div",{},
            React.createElement("h1",{},props.name),
            React.createElement("h2",{},props.animal),
            React.createElement("h2",{},props.breed)
        
    )
}

const App= () =>{
    return React.createElement(
        "div",
        {},
        React.createElement("h1",{},"Adopt me"),

        React.createElement(Pet,{
            name:"luna",
            animal:"dog",
            breed:"havenese"
        }),
        React.createElement(Pet,{
            name:"mong",
            animal:"bird",
            breed:"cocktail"
        }) ,
         React.createElement(Pet,{
            name:"docker",
            animal:"cat",
            breed:"mix"
        })
    )
}
    const container= document.getElementById("root")
    const root= createRoot(container)
    root.render(React.createElement(App))