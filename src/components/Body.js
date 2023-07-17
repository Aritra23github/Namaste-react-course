import RestaurantContainer from "./ResturantContainer";
import restList from "../utils/mockData";

const Body = () => {
    return (
        <div className="body">
            <div className="search-bar">
                Search
            </div>
            <div className="res-container">
                {
                    restList.map(res => {
                        return (
                            <RestaurantContainer 
                                key={res.data.id} 
                                resData={res} 
                            />  
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Body;