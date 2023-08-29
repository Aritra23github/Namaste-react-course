import User from "./User";
import UserClass from "./UserClass";
import userContext from "../utils/userContext";

class About extends React.Component {
    constructor(props) {
        super(props);

        console.log('Parent constructor');
    }

    componentDidMount() {
        console.log('Parent componentDidMount');
    }

    render() {
        console.log('Parent render');

        return (
            <>
                <h1>About Us</h1>
                <userContext.Consumer>
                    {
                        ({loggedInUser}) => {
                            return (
                                <h1>user : {loggedInUser}</h1>
                            )
                        }
                    }
                </userContext.Consumer>
                <UserClass name="First Child"/>

                {/* <UserClass 
                    name="Second Child"
                    location="kolkata"
                    phone="9875590730"
                />

                <UserClass 
                    name="Third Child"
                    location="kolkata"
                    phone="9875590730"
                /> */}
            </>
        );
    }
}

export default About;

// export default About = () => {
//     return (
//         <div>
//             <h1>About Us</h1>
//             {/* <User 
//                 name="Aritra Jana (function)" 
//                 location="kolkata"
//                 phone="9875590730"
//             /> */}
//             <UserClass 
//                 name="Aritra Jana (class)"
//                 location="kolkata"
//                 phone="9875590730"
//             />
//         </div>
//     );
// }


/**
 *  console log will be ----------------------------------------------------------------
 * 
 *  Parent Constructor
 *  Parent render
 * 
 *  First Child constructor
 *  First Child render
 *  Second Child constructor
 *  Second Child render
 *  Third Child constructor
 *  Third Child render
 * 
 *  First child componetDidMount
 *  Second child componetDidMount
 *  Third child componetDidMount
 * 
 *  Parent componetDidMount
 * 
 *  This is beacuse React have two phases, first one is Render phase and second phase is Commit phase. Here when react sees a class component is load then first constructor method is called then render method is called. For this reason we are seeing Parent Constructor and Parent render inside console. Next React shows a child component inside parent component, then react calls the Render phase again inside child component so First child constructor and then First child constructor is printed inside console, next react shows inside parent component that again same child component is called so React will not go Commit phase it will again call Render phase. So Second child constructor and Second child render will be printed inside console and same will be happens for Third child component also. At last React will go Commit phase and print first child componentDidMount, second child componentDidMount, third child componentDidMount.
 *  It is because inside Commit phase React updating the DOM, and we know that DOM manipulation is costly, so here react optimize our application and patch all render methods first and then commit phase will be called so that React will perform DOM manipulation only once.
 * 
 * It will happen each and every component.
 */