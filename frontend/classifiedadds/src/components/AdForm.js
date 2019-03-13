import React, { Component } from "react"

class AdForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            image: "",
            askingPrice: "",
            category: "",
            description: "",
            title: "",
            admins: this.props.admins,
            adminRender: ""
        }

        this.handleImageChange = this.handleImageChange.bind(this)
        this.handleaskingPriceChange = this.handleaskingPriceChange.bind(this)
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
        this.handleTitleChange = this.handleTitleChange.bind(this)
        this.handleCategory1Change = this.handleCategory1Change.bind(this)
        this.getAdminById = this.getAdminById.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.returnAdminNameById = this.returnAdminNameById.bind(this)

    }

  

    getAdminById(userName){
        let id 
        for (const admin of this.state.admins){
            if (admin.userName === userName)
            id = admin.id;
        }
        return id;
    }

    returnAdminNameById(id){
        let name
        for (const admin of this.state.admins){
            if (admin.id === id)
            name = admin.userName
        }
        return name
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
    
    handlAdminSelect(e){
        const name = this.returnAdminNameById(e.target.value)
        this.setState({adminRender: name})
    }

    handleSubmit(e) {
        e.preventDefault();

        const newAd = { askingPrice: this.state.askingPrice, category: this.state.category, description: this.state.description, title: this.state.title, image: this.state.image, adminRender: this.state.adminRender }
        this.props.onAdSubmit(newAd)
        this.setState({ image: "", askingPrice: "", category: "", description: "", title: "", adminRender: "" })
    }


    render() {
     
        if (this.state.admins.length) {
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

            <select onChange={this.handleAdminSelect}>
                <option>Choose An Admin</option>
                <option value={this.getAdminById('raul_2000')}>raul_2000</option>
                <option value={this.getAdminById('gilroy_ms')}>gilroy_ms</option>
                <option value={this.getAdminById("tony_piano_fingers")}>tony_piano_fingers</option>
            </select>




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

                <input
                    type="submit"
                    value="Post"
                />
            </form>
            
        )}
        else{
            return <div>BE PATIENT, I'M LOADING</div>
        }
    }
}


export default AdForm;