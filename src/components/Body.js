import { useState } from 'react';
import RestaurantContainer from "./ResturantContainer";
import restList from "../utils/mockData";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(restList);
    return (
        <div className="body">
            <div className="search-bar">
                Search
            </div>
            <div className="top_rated_res">
                <button 
                    type="button" 
                    className="btn btn-primary"
                    onClick={() => {
                        const filteredRestaurants = listOfRestaurants.filter(restaurant => restaurant.data.avgRating > 4);
                        setListOfRestaurants(filteredRestaurants);
                    }}
                >
                    Top Rated Restaurant 🍔
                </button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurants.map(res => {
                        return (
                            <RestaurantContainer 
                                key={res.data.id} 
                                resData={res} 
                            />  
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Body;