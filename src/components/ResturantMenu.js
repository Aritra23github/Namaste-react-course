import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {resturant_menu_api, IMG_URl} from '../utils/constants';
import {Link, useParams} from 'react-router-dom';

export default ResturatMenu = () => {
    const [resInfo, setResInfo] = useState([]);
    const [recommendedList, setRecommendedList] = useState([]);
    const { id } = useParams();
    
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        try {
            const response = await fetch(resturant_menu_api + id);
            const json = await response.json();
            let resposeList = json.data.cards[0].card.card.info;
            setResInfo(resposeList);
        } catch (error) {
            console.log('e:',error);
        }
    }

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