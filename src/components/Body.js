import { useState, useEffect } from 'react';
import RestaurantContainer from "./ResturantContainer";
import restList from "../utils/mockData";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5894036&lng=88.2388162&page_type=DESKTOP_WEB_LISTING"
        );

        const data = await response.json();

        console.log(data.data.cards[0].data.data.cards);

        setListOfRestaurants(data?.data?.cards[0]?.data?.data?.cards);
    }

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