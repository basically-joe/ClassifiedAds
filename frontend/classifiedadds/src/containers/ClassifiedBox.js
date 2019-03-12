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
            currentAdmin: null,
        }

        this.handleAdSubmit = this.handleAdSubmit.bind(this);
        this.handleAdDelete = this.handleAdDelete.bind(this);
        this.handleAdminSelected = this.handleAdminSelected.bind(this);
        this.updateAdvertsArray = this.updateAdvertsArray.bind(this);
    }

    componentDidMount() {
        const url = "http://localhost:8080/admins"
        const url2 = "http://localhost:8080/adverts"

        fetch(url)
            .then(res => res.json())
            .then(data => {
                this.setState({ adminsDB: data._embedded.admins })
                // console.log(data)
            })

        fetch(url2)
            .then(res => res.json())
            .then(data => {
                this.setState({ advertsDB: data._embedded.adverts })
                // console.log(data);
            })
    }

    handleAdminSelected(index) {
        const selectedAdmin = this.state.adminsDB[index];
        this.setState({currentAdmin: selectedAdmin}) // this needs to be passed through to advert list which would also need an if condotional to single or multiple items.h
    }

      handleAdSubmit(newAdvert){

        console.log(newAdvert)
        
        const dataToPost = JSON.stringify(newAdvert)

        fetch("http://localhost:8080/adverts", {
            method: 'POST',
            body: dataToPost,
            headers: {
                "Content-Type": "application/json",
            },
        });
        const updatedAds = [...this.state.advertsDB, newAdvert]
        this.setState({advertsDB: updatedAds})
    }

    updateAdvertsArray(idToCheck){
        console.log(this.state.advertsDB)


        let objectToUse = this.state.advertsDB.find((advert) => {
            return advert.id === idToCheck
        })

        return this.state.advertsDB.indexOf(objectToUse)
        // for(const advert of this.state.advertsDB){
            
        //   if(advert.id === idToCheck){
        //       console.log(advert.index);
              
        //     return advert.index}
        //     console.log(advert.index)
        //     }
    }

    handleAdDelete(itemId){
        
        const indexToDelete = this.updateAdvertsArray(itemId);
        let adverts = this.state.advertsDB
        adverts.splice(indexToDelete, 1)
        // const advertsWithoutDeletedItem = [...this.state.advertsDB.splice(indexToDelete)];
        console.log(adverts);
        
        this.setState({advertsDB: adverts})

        fetch(`http://localhost:8080/adverts/${itemId}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
            }

        //     .then(()=>{
        //         const indexToDelete = this.updateAdvertsArray(itemId);
        //         const advertsWithoutDeletedItem = [...this.state.advertsDB.splice(indexToDelete)];
        //         this.setState({advertsDB: advertsWithoutDeletedItem})
        // })
        });

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
                        <AdvertList adverts = {this.state.advertsDB} onCommentSubmit = {this.handleAdSubmit} admin = {this.currentAdmin} onAdDelete = {this.handleAdDelete}/>}
                        
                        </div>
                       }
                        />
                        
                        <Route 
                        path="/createad"
                        render= {() => 
                <div>
                       <AdForm onAdSubmit = {this.handleAdSubmit} admins = {this.state.adminsDB} onAdminSelected = {this.handleAdminSelected}/> 
                       <AdvertList adverts = {this.state.advertsDB} onCommentSubmit = {this.handleAdSubmit} admin = {this.currentAdmin} onAdDelete = {this.handleAdDelete}/>
                       {/* {console.log(currentAdmin)} */}
                       
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