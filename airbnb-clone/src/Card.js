import React from "react"

export default function Card(props){
    let badgeText
    if (props.openspots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.place === "Online") {
        badgeText = "ONLINE"
    }
    return(
        <section>
            <div className="card">
                <div>
                    {badgeText && <div className="card--badge">{badgeText}</div>}  
                    <img className="card--image" src={`../images/${props.img}`} />
                    
                </div>
                <div className="card--stats">
                    <img className="card--star" src="../images/Star 1.png " />
                    <span className="card--stats--margin">{props.rating}</span>
                    <span className="card--stats--margin">({props.reviewCount})</span>
                    <span className="gray card--stats--margin"> • {props.place}</span>
                </div>
                <p className="card--content">{props.title}</p>
                <p className="card--content"> <span className="bold">From ${props.rate}</span> / person</p>
            </div>
            
        </section>
    )
}