import React from "react"
import  {createRoot} from "react-dom/client"
import Details from "./Details.jsx"
import { QueryClient,QueryClientProvider } from "@tanstack/react-query"
import { Link, BrowserRouter, Route,Routes } from "react-router-dom"
import SearchParams from "./SearchParams"

const queryclient= new QueryClient({
    defaultOptions:{
        queries:{
            staleTime:Infinity,
            cacheTime:Infinity
        }
    }
})

const App= () =>{
    return (
        <BrowserRouter>
        <QueryClientProvider client={queryclient}>

        <header> 
            <Link to="/">
                 Adopt Me!
            </Link>
        </header>
        <Routes>
            <Route path="/details/:id" element ={<Details/>}></Route>
            <Route path="/" element ={<SearchParams/>}></Route>
        </Routes>
        </QueryClientProvider>
        </BrowserRouter>
    )
}
    const container= document.getElementById("root")
    const root= createRoot(container)
    root.render(<App/>)