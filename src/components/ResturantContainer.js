import { Card, Button } from "react-bootstrap";
import { IMG_URl } from "../utils/constants";

const RestaurantContainer = (props) => {
    const { resData } = props;
    const {cloudinaryImageId, name, cuisines, avgRating, slaString, costForTwo} = resData?.data;
    return (
        <div>
            <Card style={{ width: '18rem' }} className="res-cart">
                <Card.Img variant="top" 
                    src={IMG_URl + cloudinaryImageId} 
                />
                <Card.Body>
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
                    <span role="button" aria-label="open" className="view_btn">Quick View</span>
                </Card.Body>
            </Card>
        </div>
    )
}

export default RestaurantContainer;