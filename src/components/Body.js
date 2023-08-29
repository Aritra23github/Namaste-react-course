import { useState, useEffect, useContext } from 'react';
import Form from 'react-bootstrap/Form';
import RestaurantContainer, {PromotedResturant} from "./ResturantContainer";
import Shimmer from './Shimmer';
import restList from "../utils/mockData";
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import userContext from '../utils/userContext';

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(restList);
    const [filteredRestaurants, setFilteredRestaurants] = useState(restList);
    const [searchText, setSearchText] = useState("");
    const onlineStatus = useOnlineStatus();

    const PromotedRestaurants = PromotedResturant(RestaurantContainer);

    const {loggedInUser, setUserName} = useContext(userContext);

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

    if (onlineStatus === false) {
        return (
            <div>
                <h1>You are offline, please check your internet connectivity!!!</h1>
            </div>
        );
    }

    return listOfRestaurants && listOfRestaurants.length === 0 ? <Shimmer /> :  (
        <div className="body">
            <div className='filter flex'>    
                <div className="search m-4 p-4">
                    <input
                        type="text" 
                        className='border border-solid border-black'
                        placeholder="search" 
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                            if (!e.target.value) setFilteredRestaurants(listOfRestaurants);
                        }}
                    />
                    <button 
                        type="button" 
                        className='px-4 py-2 bg-green-100 m-4 rounded-lg'
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
                <div className="search m-4 p-4 flex items-center">
                    <button 
                        type="button" 
                        className="px-4 py-2 bg-gray-100 rounded-lg"
                        onClick={() => {
                            const filteredRestaurants = listOfRestaurants.filter(restaurant => restaurant.data.avgRating > 4);
                            setFilteredRestaurants(filteredRestaurants);
                        }}
                    >
                        Top Rated Restaurant 🍔
                    </button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                    <label>User name</label>
                    <input 
                        className="p-2 border-black" 
                        type="text" 
                        name="" 
                        value={loggedInUser} 
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
            </div>
            <div className="flex flex-wrap">
                {
                    filteredRestaurants && filteredRestaurants.map(res => {
                        return (
                            <Link to={"/resturant-menu/" + res.data.id} key={res.data.id}>
                                <label>{loggedInUser}</label>
                                {
                                    res.data.promoted ? 
                                        <PromotedRestaurants 
                                            key={res.data.id} 
                                            resData={res} 
                                        /> : 
                                        <RestaurantContainer 
                                            key={res.data.id} 
                                            resData={res} 
                                        />
                                }
                                
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Body;