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
                    <Link to={"/resturant-menu/" + id} style={{textDecoration: 'none', color: 'black'}}>Quick View</Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default RestaurantContainer;