import Shimmer from "./Shimmer";
import {IMG_URl} from '../utils/constants';
import {Link, useParams} from 'react-router-dom';
import useResturantMenu from "../utils/useResturantMenu";

export default ResturantMenu = () => {
    const { id } = useParams();

    let resInfo = useResturantMenu(id);
    console.log(resInfo);
    return resInfo.length == 0 ? <Shimmer /> : (
        <div>
            <div>
                <Link to={'/'} style={{textDecoration: 'none', color: 'black'}}>Back To Restaurant Menu</Link>
            </div>
            <img 
                src={IMG_URl + resInfo.cloudinaryImageId} 
                alt="" 
                style={{justifyContent: 'center'}} 
                height={200} 
                width={200}
            />
            <ul>
                <li>
                Restaurant Name: {resInfo.name}
                </li>  
               <li>
                Cuisins: {resInfo.cuisines.join(',')}
               </li>
               <li>
                Cost For Two: {resInfo.costForTwoMessage}
               </li>
               <li>
                Rating: {resInfo.avgRating}
               </li>
               <li>
                Locality: {resInfo.locality}
               </li>
               <li>
                Area Name: {resInfo.areaName}
               </li>
            </ul>
        </div>
    )
}