import React from "react";
import Cards from "./Card";
function Tours(tours, removeTour){
    return(
        <div>
            <div>
                <h2>Plan with Ilham </h2>
            </div>
            <div>
                {
                    tours.map((tour)=>{
                        return <Cards {...tour} removeTour = {removeTour}/>
                    })
                }
            </div>
        </div>
    )
}

export default Tours