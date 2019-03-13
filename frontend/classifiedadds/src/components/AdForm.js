import React, { Component } from "react"

class AdForm extends Component {

    constructor(props) {
        // pass in admin through props
    
        super(props)
        this.state = {
            image: "",
            askingPrice: "",
            category: "",
            description: "",
            title: "",
            admins: []
        }

        this.handleImageChange = this.handleImageChange.bind(this)
        this.handleaskingPriceChange = this.handleaskingPriceChange.bind(this)
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
        this.handleTitleChange = this.handleTitleChange.bind(this)
        this.handleCategory1Change = this.handleCategory1Change.bind(this)

        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleImageChange(e){
        this.setState({image: e.target.value})
    }

    handleaskingPriceChange(e) {
        this.setState({ askingPrice: parseInt(e.target.value) })
    }

    handleDescriptionChange(e) {
        this.setState({ description: e.target.value })
    }

    handleTitleChange(e) {
        this.setState({ title: e.target.value })
    }

    handleCategory1Change(e) {
        this.setState({ category: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();

        const newAd = { askingPrice: this.state.askingPrice, category: this.state.category, description: this.state.description, title: this.state.title, image: this.state.image }
        this.props.onAdSubmit(newAd)
        this.setState({ image: "", askingPrice: "", category: "", description: "", title: "" })
    }


    render() {
        
        return (
            
            <form
                className="ad-form"
                onSubmit={this.handleSubmit}
            >

            <input
                type="text"
                placeholder="Enter a URL"
                value = {this.state.image}
                onChange={this.handleImageChange}
            />
           
           <br></br>

                <input
                    type="number"
                    placeholder="Asking price..."
                    value={this.state.askingPrice}
                    onChange={this.handleaskingPriceChange}
                /><br/>
                <input
                    type="text"
                    placeholder="Description..."
                    value={this.state.description}
                    onChange={this.handleDescriptionChange}
                /><br/>
                <input
                    type="text"
                    placeholder="Title..."
                    value={this.state.title}
                    onChange={this.handleTitleChange}
                /><br/>


                <div className="radio-buttons">
                <label>
                    <input type="radio" onChange={this.handleCategory1Change.bind(this)}
                        checked={this.state.category === "Beauty"}
                        value="Beauty"
                        name="radio1" />
                    Beauty </label>

                    <label>
                    <input type="radio" onChange={this.handleCategory1Change.bind(this)}
                        checked={this.state.category === "Automobile"}
                        value="Automobile"
                        name="radio2" />
                    Automobile </label><br/>

                    <label>
                    <input type="radio" onChange={this.handleCategory1Change.bind(this)}
                        checked={this.state.category === "Clothing"}
                        value="Clothing"
                        name="radio3" />
                    Clothing </label>

                    <label>
                    <input type="radio" onChange={this.handleCategory1Change.bind(this)}
                        checked={this.state.category === "Tech"}
                        value="Tech"
                        name="radio4" /> 
                    Tech </label><br/>

                    <label>
                    <input type="radio" onChange={this.handleCategory1Change.bind(this)}
                        checked={this.state.category === "Furniture"}
                        value="Furniture"
                        name="radio5" />
                    Furniture </label><br/>
                    </div>

                {/* <label>
                    <options 
                </label> */}


                <input
                    type="submit"
                    value="Post"
                />
            </form>
            
        )
    }
}


export default AdForm;