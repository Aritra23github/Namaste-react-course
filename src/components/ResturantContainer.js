import { Card, Button } from "react-bootstrap";
import { IMG_URl } from "../utils/constants";
import { Link } from "react-router-dom";

const RestaurantContainer = (props) => {
    const { resData } = props;
    const {cloudinaryImageId, name, cuisines, avgRating, slaString, costForTwo, id} = resData?.data;
    return (
        <div>
            <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
                <img src={IMG_URl + cloudinaryImageId} className="rounded-lg" alt="res-logo" />
                <span className="font-bold py-4 text-lg text-slate-400">{name}</span>
                <h4 className="no-underline">{cuisines.join(", ")}</h4>
                <h4>{avgRating} stars</h4>
                <h4>₹{costForTwo / 100} FOR TWO</h4>
            </div>
        </div>
    )
}

// Higher Order Components

export const PromotedResturant = (RestaurantContainer) => {
    return (props) => {
        return (
            <div>
                <label htmlFor="promotion">Promoted</label>
                <RestaurantContainer {...props} />
            </div>
        )
    }
}

export default RestaurantContainer;