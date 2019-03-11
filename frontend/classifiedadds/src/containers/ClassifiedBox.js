import React, { Component, Fragment } from 'react';
import AdvertList from '../components/AdvertList'
import Navbar from '../components/NavBar';
import AdForm from "../components/AdForm"
import ErrorPage from "../components/ErrorPage"
import AdminSelector from "../components/AdminSelector"
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";


class ClassifiedBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            adminsDB: [],
            advertsDB: [],
            currentAdmin: null
        }

        this.handleAddSubmit = this.handleAddSubmit.bind(this)

    }

    componentDidMount() {
        const url = "http://localhost:8080/admins"
        const url2 = "http://localhost:8080/adverts"

        fetch(url)
            .then(res => res.json())
            .then(data => {
                this.setState({ adminsDB: data._embedded.admins })
                console.log(data)
            })

        fetch(url2)
            .then(res => res.json())
            .then(data => {
                this.setState({ advertsDB: data._embedded.adverts })
                console.log(data);
            })
    }

    handleAdminSelected(index) {
        const selectedAdmin = this.state.admins[index];
        this.setState({currentAdmin: selectedAdmin})
      }


    handleAddSubmit(submittedAd){
        // submittedComment.id = Date.now()
        const updatedAds = [...this.state.advertsDB, submittedAd] // spread operator is ..., copies state then makes new one.
        this.setState({advertsDB: updatedAds})
      }

    render() {
        return (

            <Router>
                <Fragment>
                    <Navbar />
                    <Switch>



                       <Route 
                       exact path="/home" 
                       render= {() =>
                        <div>
                        <AdvertList adverts = {this.state.advertsDB} onCommentSubmit = {this.handleAddSubmit}/>}
                        </div>
                       }
                        />
                        
                        <Route 
                        path="/createad"
                        render= {() => 
                <div>
                       <AdminSelector admins = {this.state.adminsDB} onAdminSelected = {this.handleAdminSelected}/>
                       <AdForm onAdSubmit = {this.handleAddSubmit}/> 
                       <AdvertList adverts = {this.state.advertsDB} onCommentSubmit = {this.handleAddSubmit}/>
                </div>
                    } 
                       />
                       <Route component={ErrorPage}/>
                       </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default ClassifiedBox;