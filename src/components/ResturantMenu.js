import { useEffect, useState } from "react";

export default ResturatMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        try {
            const response = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5894036&lng=88.2388162&restaurantId=427371&catalog_qa=undefined&submitAction=ENTER');

            const json = await response.json();

            setResInfo(json.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h1>Resturant Menu</h1>
        </div>
    )
}