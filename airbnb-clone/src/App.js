import React from "react"
import Hero from "./Hero"
import Nav from "./Nav"
import data from "./data"
import Card from "./Card"

export default function App(){
    const dataElements = data.map( info => {

        return <Card 
                    key = {info.id}
                    {...info}
                 />   
    })
    return(
        <div>
            <Nav />
            <Hero />
            <section className="cards-list">
                 {dataElements} 
            </section>
        </div>
    )
}
