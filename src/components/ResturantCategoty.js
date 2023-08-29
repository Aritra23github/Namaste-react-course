import React, { useState } from "react";
import ItemList from "./ItemList";

const ResturantCategory = ({categoryData, showAcordian, setShowAcordian}) => {

    const toggleHeader = () => {
        setShowAcordian(showAcordian);
    }
    
    return (
        <div className="w-6/12 mx-auto my-4 shadow-lg p-4">
            <div>
                s:{showAcordian ? 'show' : 'hide'}
            </div>
            <div className="flex justify-between cursor-pointer" onClick={toggleHeader}>    
                <span className="font-bold text-lg">{categoryData.title}({categoryData.itemCards.length})</span>
                <span className="cursor-pointer">⬇️</span>
            </div>
            {showAcordian && <ItemList items={categoryData.itemCards}/>}
        </div>
    )
}

export default ResturantCategory;