import React, { Component, Fragment } from 'react';
import AdvertList from '../components/AdvertList'
import Navbar from '../components/NavBar';
import AdForm from "../components/AdForm"
import ErrorPage from "../components/ErrorPage"
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import CategorySelector from "../components/CategorySelector";


class ClassifiedBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            admins: [],
            advertsDB: [],
            currentAdvert: null
        }

        this.handleAddSubmit = this.handleAddSubmit.bind(this)
        this.handleAdvertSelect = this.handleAdvertSelect.bind(this)

    }

    componentDidMount() {
        const url = "http://localhost:8080/admins"
        const url2 = "http://localhost:8080/adverts"

        fetch(url)
            .then(res => res.json())
            .then(data => console.log(data))

        fetch(url2)
            .then(res => res.json())
            .then(data => {
                this.setState({ advertsDB: data._embedded.adverts })
                console.log(data);
            })
    }

    handleAddSubmit(submittedAd){
        // submittedComment.id = Date.now()
        const updatedAds = [...this.state.advertsDB, submittedAd] // spread operator is ..., copies state then makes new one.
        this.setState({advertsDB: updatedAds})
      }

    handleAdvertSelect(index){
        const selectedAdvert = this.state.advertsDB[index];
        this.setState({currentAdvert: selectedAdvert})
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
                        <CategorySelector adverts={this.state.advertsDB} onAdvertSelected={this.handleAdvertSelect}/>
                        <AdvertList adverts = {this.state.advertsDB} onCommentSubmit = {this.handleAddSubmit}/>}
                        </div>
                       }
                        />
                        
                        <Route 
                        path="/createad"
                        render= {() => 
                <div>
                    <CategorySelector adverts={this.state.advertsDB} onAdvertSelected={this.handleAdvertSelect}/>       
                       <AdForm onAdSubmit = {this.handleAddSubmit}/> 
                       <AdvertList adverts = {this.state.advertsDB} onCommentSubmit = {this.handleAddSubmit}/>
                </div>} />

                       <Route component={ErrorPage}/>
                       </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default ClassifiedBox;