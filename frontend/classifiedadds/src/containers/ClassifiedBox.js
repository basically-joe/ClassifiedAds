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
            admins: [],
            advertsDB: []
        }

        this.handleCommentSubmit = this.handleCommentSubmit.bind(this)

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
                console.log(this.state.advertsDB);
            })
    }

    handleCommentSubmit(submittedComment){
        submittedComment.id = Date.now()
        const updatedComments = [...this.state.advertsDB, submittedComment] // spread operator is ..., copies state then makes new one.
        this.setState({advertsDB: updatedComments})
      }

    render() {
        return (

            <Router>
                <Fragment>
                    <Navbar />
                    <Switch>
                       <Route 
                       exact path="/home" 
                       render= {() => <AdvertList adverts = {this.state.advertsDB} onCommentSubmit = {this.handleCommentSubmit}/>}
                       />
                       <Route path="/createad" component={AdForm}/>
                       <Route component={ErrorPage}/>
                       </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default ClassifiedBox;