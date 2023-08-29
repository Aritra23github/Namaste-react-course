import Shimmer from "./Shimmer";
import {IMG_URl} from '../utils/constants';
import {Link, useParams} from 'react-router-dom';
import useResturantMenu from "../utils/useResturantMenu";
import ResturantCategory from "./ResturantCategoty";
import { useState, useCallback } from "react";

export default ResturantMenu = () => {
    const { id } = useParams();
    const [showIndex, setShowIndex] = useState(null); 

    let resInfo = useResturantMenu(id);

    const toggleAcordians = () => {
        // setShowIndex(prevIndex => !prevIndex);
        console.log('click');
        console.log(showIndex);
    }
    
    let FilterRestaurantCategory = resInfo.filter(res => {
        return res?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
    });

    let filteredRestaurantsDetails = FilterRestaurantCategory[0]?.card?.card.info;

    let categories = resInfo[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(res => {
        return res?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    });
    
    return FilterRestaurantCategory.length == 0 ? <Shimmer /> : (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{filteredRestaurantsDetails.name}</h1>
            <p style={{fontWeight: 'bold', fontSize: 'large'}}>
                {filteredRestaurantsDetails.cuisines.join(", ")} - {filteredRestaurantsDetails.costForTwoMessage}
            </p>
            {
                categories.map((category, index) => (
                    <ResturantCategory 
                        key={index} 
                        categoryData={category?.card?.card}
                        showAcordian={index === showIndex ?? true}
                        setShowAcordian={() => setShowIndex(index)}
                    />
                ))
            }
        </div>
    )
}