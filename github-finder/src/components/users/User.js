import React, { Component, Fragment} from 'react'
import Spinner from '../layout/Spinner'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'

export class User extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.login)
    }
    static propTypes = {
        loading: propTypes.bool,
        user: propTypes.object.isRequired,
        getUser: propTypes.func.isRequired
    }
    render() {
        const {
            login,
            avatar_url,
            html_url,
            name,
            company,
            location,
            hireable,
            bio,
            public_repos,
            public_gists,
            followers,
            following,
            
        } = this.props.user;
        const {loading} = this.props;

        if(loading) return <Spinner/>;
        return (
            <Fragment>
               <Link to='/' className='btn ntn-ligth'>
                   Back to search
               </Link>
               Hireable: {' '}
               {hireable ? <i className="fas fa-check text-success"/> : <i className="fas fa-times-circle text-danger"/>} 
               <div className="card grid-2">
                   <div className="all-center">
                       <img src={avatar_url} className="round-img" alt="" style={{width:'150px'}} />
                       <h1>{name}</h1>
                       <p>Location: {location}</p>
                    </div>
                    <div>
                        {bio && <Fragment>
                            <h3>Bio Data</h3>
                            <p>{bio}</p>
                            </Fragment>}
                            <a href={html_url} className="btn btn-dark my-1">
                            Visit git hub profile
                            </a>
                            <ul>
                                <li>
                                    {login && <Fragment>
                                        <strong>Username: {login}</strong>
                                        </Fragment>}
                                </li>
                                <li>
                                    {company && <Fragment>
                                        <strong>company: {company}</strong>
                                        </Fragment>}
                                </li>
                               
                            </ul>
                    </div>
               </div>
               <div className="card text-center">
               <div className="badge badge-primary">Followers: {followers}</div>
               <div className="badge badge-success">Following: {following}</div>
               <div className="badge badge-light">Public Repos: {public_repos}</div>
               <div className="badge badge-dark">public_gists: {public_gists}</div>
               </div>
            </Fragment>
        )
    }
}

export default User
