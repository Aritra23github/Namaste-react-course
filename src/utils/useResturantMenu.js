import { useState, useEffect } from 'react';
import { resturant_menu_api } from './constants';

export default useResturantMenu = (resId) => {
    const [resInfo, setResInfo] = useState([]);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        try {
            const response = await fetch(resturant_menu_api + resId);
            const json = await response.json();
            let resposeList = json.data.cards[0].card.card.info;
            console.log(resposeList);
            setResInfo(resposeList);
        } catch (error) {
            console.log('e:',error);
        }
    }

    return resInfo;
}