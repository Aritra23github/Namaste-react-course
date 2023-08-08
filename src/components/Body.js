import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import RestaurantContainer from "./ResturantContainer";
import Shimmer from './Shimmer';
import restList from "../utils/mockData";
import { Link } from 'react-router-dom';

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(restList);
    const [filteredRestaurants, setFilteredRestaurants] = useState(restList);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        // fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5894036&lng=88.2388162&page_type=DESKTOP_WEB_LISTING"
        );

        const data = await response.json();
        
        let restaurantList = data?.data?.cards.filter(card => {
            return card.cardType === "seeAllRestaurants";
        });

        setListOfRestaurants(restaurantList[0]?.data?.data?.cards);
        setFilteredRestaurants(restaurantList[0]?.data?.data?.cards);
    }

    return listOfRestaurants && listOfRestaurants.length === 0 ? <Shimmer /> :  (
        <div className="body">
            <div className='filter'>    
                <div className="col-md-9 search-bar">
                    <Form.Control 
                        type="text" 
                        placeholder="search" 
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                            if (!e.target.value) setFilteredRestaurants(listOfRestaurants);
                        }}
                    />
                    <button 
                        type="button" 
                        className='btn btn-xs btn-primary'
                        onClick={() => {
                            const filteredRestaurants = listOfRestaurants.filter(
                                restaurant => restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilteredRestaurants(filteredRestaurants);
                        }}
                    >
                        Search
                    </button>
                </div>
                <div className="col-md-3 top_rated_res">
                    <button 
                        type="button" 
                        className="btn btn-primary"
                        onClick={() => {
                            const filteredRestaurants = listOfRestaurants.filter(restaurant => restaurant.data.avgRating > 4);
                            setFilteredRestaurants(filteredRestaurants);
                        }}
                    >
                        Top Rated Restaurant 🍔
                    </button>
                </div>
            </div>
            <div className="res-container">
                {
                    filteredRestaurants && filteredRestaurants.map(res => {
                        return (
                            <Link to={"/resturant-menu/" + res.data.id} key={res.data.id}>
                                <RestaurantContainer 
                                    key={res.data.id} 
                                    resData={res} 
                                />
                            </Link>
                              
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Body;