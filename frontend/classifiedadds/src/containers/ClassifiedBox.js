import React, { Component, Fragment } from 'react';
import AdvertList from '../components/AdvertList'
import Navbar from '../components/NavBar';
import AdForm from "../components/AdForm"
import ErrorPage from "../components/ErrorPage"
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";


class ClassifiedBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            adminsDB: [],
            advertsDB: [],
            currentAdmin: null
        }

        this.handleAddSubmit = this.handleAddSubmit.bind(this);
        this.handleAdminSelected = this.handleAdminSelected.bind(this);
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
        const selectedAdmin = this.state.adminsDB[index];
        this.setState({currentAdmin: selectedAdmin}) // this needs to be passed through to advert list which would also need an if condotional to single or multiple items.h
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
                       <AdForm onAdSubmit = {this.handleAddSubmit} admins = {this.state.adminsDB} onAdminSelected = {this.handleAdminSelected}/> 
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