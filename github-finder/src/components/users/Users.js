import React, { Component } from 'react'
import USeritems from './USeritems'
class Users extends Component {
       state = {
           users:[
               {
                    id:"1",
                    login:'mojombo',
                    avatar_url:'https://avatars.githubusercontent.com/u/1?v=4',
                    html_url: "https://github.com/mojombo"
                },
                {
                    id:"2",
                    login:'defunkt',
                    avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
                    html_url: "https://github.com/defunkt"
                }, 
                {
                    id:"3",
                    login:'pjhyett',
                    avatar_url:'https://avatars.githubusercontent.com/u/2?v=4',
                    html_url: "https://github.com/pjhyett"
                }]
            };
        
    render() {
        return (
            <div>
                {this.state.users.map(user  => (
                    <USeritems key={user.id} user={user}/>                 ))}
            </div>
        );
    }
}

export default Users
