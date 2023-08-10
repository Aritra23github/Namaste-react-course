import User from "./User";
import UserClass from "./UserClass";

export default About = () => {
    return (
        <div>
            <h1>About Us</h1>
            {/* <User 
                name="Aritra Jana (function)" 
                location="kolkata"
                phone="9875590730"
            /> */}
            <UserClass 
                name="Aritra Jana (class)"
                location="kolkata"
                phone="9875590730"
            />
        </div>
    );
}