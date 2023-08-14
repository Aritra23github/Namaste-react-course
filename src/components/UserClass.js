// import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        //! This is the way to create local state variables inside our class based component.
        this.state = {
            userInfo: {
                name: "Dummy Name",
                location: "Dummy Location",
                twitter_username: "Dummy Phone",
            }
        };

        console.log(this.props.name + " constructor");
    }

    async componentDidMount() {
        console.log(this.props.name + " componentDidMount");
        try {
            const response = await fetch("https://api.github.com/users/ARITRA06");
            const json = await response.json();
            this.setState({
                userInfo: json
            });
        } catch (error) {
            console.log(error);
        }
    }

    componentDidUpdate() {
        console.log(this.props.name + ' Component did update');
    }

    componentWillUnmount() {
        console.log(this.props.name + ' Component will unmount');
    }

    render() {
        console.log(this.props.name + " render");

        const {name, location, twitter_username} = this.state.userInfo;

        return (
            <div className="user-card-container">
                <h1>Name: {name}</h1>
                <h2>Location: {location}</h2>
                <h3>Contact: {twitter_username}</h3>
            </div>
        );
    }

}

export default UserClass;