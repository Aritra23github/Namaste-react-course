import { Card, Button } from "react-bootstrap";
import { IMG_URl } from "../utils/constants";
import { Link } from "react-router-dom";

const RestaurantContainer = (props) => {
    const { resData } = props;
    const {cloudinaryImageId, name, cuisines, avgRating, slaString, costForTwo, id} = resData?.data;
    return (
        <div>
            <Card style={{ width: '18rem' }} className="res-cart">
                <Card.Img variant="top" 
                    src={IMG_URl + cloudinaryImageId} 
                />
                <Card.Body style={{textDecoration: 'none', color: 'black'}}>
                    <Card.Title>{resData.data.name}</Card.Title>
                    <Card.Text style={{fontSize: '12px'}}>
                        {cuisines.join(', ')}
                    </Card.Text>
                    <div className="rating-tag rate">
                        <span className="icon-star style-icon">*</span>
                        <span>{avgRating}</span>
                    </div>
                    <div>
                        <span>{slaString}</span>
                    </div>
                    <div>
                        <span>{costForTwo/100} FOR TWO</span>
                    </div>
                </Card.Body>
            <div>
                <Link to={"/resturant-menu/" + id} style={{textDecoration: 'none', color: 'black'}}>Quick View</Link>
            </div>
            </Card>
        </div>
    )
}

// Higher Order Components

export const PromotedResturant = (RestaurantContainer) => {
    return (props) => {
        return (
            <div>
                <label for="">Promoted</label>
                <RestaurantContainer {...props} />
            </div>
        )
    }
}

export default RestaurantContainer;