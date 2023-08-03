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
            console.log(json.data.cards);
            setResInfo(json.data);
        } catch (error) {
            console.log('e:',error);
        }
    }

    return (
        <div>
            <ul>    
                <li>
                    {resInfo?.cards[0].card.card.info.name}
                </li>
                <li>
                {resInfo?.cards[0].card.card.info.locality}
                </li>
            </ul>
        </div>
    )
}