import React, { useState } from "react";
import ItemList from "./ItemList";

const ResturantCategory = ({categoryData}) => {
    const [headerOpen, setHeaderOpen] = useState(false);

    const toggleHeader = () => {
        setHeaderOpen(!headerOpen);
    }

    return (
        <div className="w-6/12 mx-auto my-4 shadow-lg p-4">
            <div className="flex justify-between cursor-pointer" onClick={toggleHeader}>    
                <span className="font-bold text-lg">{categoryData.title}({categoryData.itemCards.length})</span>
                <span className="cursor-pointer">⬇️</span>
            </div>
            {headerOpen && <ItemList items={categoryData.itemCards}/>}
        </div>
    )
}

export default ResturantCategory;