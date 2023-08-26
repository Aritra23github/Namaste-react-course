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
            setResInfo(json?.data?.cards);
        } catch (error) {
            console.log('e:',error);
        }
    }

    return resInfo;
}