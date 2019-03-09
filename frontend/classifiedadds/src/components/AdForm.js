import React, {Component} from "react"


class AdForm extends Component{

    constructor(props) {
    super(props)
    this.state = {
        askingPrice: 0,
        category: "",
        description: "",
        title: ""
    }
    this.handleaskingPriceChange = this.handleaskingPriceChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)

    this.handleSubmit = this.handleSubmit.bind(this)
    
    
    }
    
    handleaskingPriceChange(e){
        this.setState({askingPrice: e.target.value})
    }
    
    handleDescriptionChange(e){
        this.setState({description: e.target.value})
    }

    handleTitleChange(e){
        this.setState({title: e.target.value})
    }
    
    handleSubmit(e){
        e.preventDefault();
        const newComment = {askingPrice: this.state.askingPrice, description: this.state.description, title: this.state.title}
        this.props.onCommentSubmit(newComment)
        this.setState({askingPrice: "", description: "", title: ""})
    }
    
        render(){
            return(
                <form 
                className="ad-form"
                onSubmit={this.handleSubmit}
                >
                
                <input
                type="text"
                placeholder="Asking price eg £100"
                value={this.state.askingPrice}
                onChange={this.handleaskingPriceChange}
                />
                <input
                type = "text"
                placeholder= "Description..."
                value={this.state.description}
                onChange={this.handleDescriptionChange}
                />
                <input
                type = "text"
                placeholder= "Title..."
                value={this.state.title}
                onChange={this.handleTitleChange}
                />
                <input
                type="submit"
                value="Post"
                />
                </form>
            )
        }
    }


export default AdForm;