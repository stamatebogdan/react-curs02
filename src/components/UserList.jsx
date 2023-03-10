import React from "react";
import UserItem from "./UserItem";

class UserList extends React.Component{
    // console.log(props)
    constructor(props){
        console.log("UserList constructor has been called")
        super(props);
        this.state = {}
    }

    componentDidMount(){
        console.log("UserList was mounted")
    }

    // const {users} = props;
    render() {
        console.log("UserList render has been called")

    return (
        <div>
            {
                this.props.users.map((user, index) => {
                    return <UserItem 
                        name={user.name}
                        email={user.email}
                        isGoldClient={user.isGoldClient}
                        key={index}
                    />
                })
            }
        </div>
    );
        }
}

export default UserList;