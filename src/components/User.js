import { useState } from "react";

export default User = ({name, location, phone}) => {
    const [count, setCount] = useState(0);
    const [countTwo, setCountTwo] = useState(0);
    
    return (
        <div className="user-card-container">
            <h1>Count: {count}</h1>
            <h1>Count Two: {countTwo}</h1>
            <h1>{name}</h1>
            <h2>Location: {location}</h2>
            <h3>Contact: {phone}</h3>
        </div>
    );
}