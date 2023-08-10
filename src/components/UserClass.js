// import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        //! This is the way to create local state variables inside our class based component.
        this.state = {
            count: 0
        };
    }

    render() {
        const {name, location, phone} = this.props;
        const {count} = this.state;

        return (
            <div className="user-card-container">
                <h1>Count: {count}</h1>
                <button 
                    type="button" 
                    onClick={() => {
                        this.setState({
                            count: this.state.count + 1
                        })
                    }}
                >
                    Click
                </button>
                <h1>{name}</h1>
                <h2>Location: {location}</h2>
                <h3>Contact: {phone}</h3>
            </div>
        );
    }

}

export default UserClass;