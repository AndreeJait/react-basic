import React from "react";
import '../css/Form.css'

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            FullName: '',
            BirthDate: '',
            Hobby: '',
            Email: '',
            Quotes: '',
            persons: [],
            validate: false,
        };
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        if(this.state.validate){
            var person = {fullName: this.state.FullName};
            person["email"] = this.state.Email
            console.log(person);
        }
    }
    handlChange = (event) =>{
        event.preventDefault();
        this.setState({
            validate: true
        })
        if(event.target.id === "fullName"){
           this.setState({
                FullName: event.target.value
           })
        }else if(event.target.id === "email"){
            this.setState({
                Email: event.target.value
           })
        }else if(event.target.id === "birthDate"){
            this.setState({
                BirthDate: event.target.value
           })
        }else if(event.target.id === "hobby"){
            this.setState({
                Hobby: event.target.value
           })
        }else if(event.target.id === "quotes"){
            this.setState({
                Quotes: event.target.value
           })
        }

        var index = Number(event.target.attributes.getNamedItem('data-index').value);
        if(event.target.value === ""){
            this.setState({
                validate: false
            })
            document.getElementsByClassName("form-group")[index].classList.add("error");
        }else{
            document.getElementsByClassName("form-group")[index].classList.remove("error");
        }
    }
    handelBlur = (event) =>{
        if(event.target.value === ""){
            this.setState({
                validate: false
            })
            var index = Number(event.target.attributes.getNamedItem('data-index').value);
            document.getElementsByClassName("labelForm")[index].classList.remove("show");
        }
    }
    handleFocus = (event) =>{
        var index = Number(event.target.attributes.getNamedItem('data-index').value);
        document.getElementsByClassName("labelForm")[index].classList.add("show");
        if(event.target.value === ""){
            document.getElementsByClassName("form-group")[index].classList.add("error");
        }else{
            document.getElementsByClassName("form-group")[index].classList.remove("error");
        }
    }
    render() {
        return (
            <div className="wrapper">
                <div className="header">
                    <h3>Please input your biodata below...</h3>
                </div>
                <div className="content-body">
                    <form onSubmit={this.handleSubmit} className="form-temp">
                        <div className="form-group">
                            <label htmlFor="fullName" className="labelForm">Full Name</label>
                            <input data-index={0} type="text" id="fullName" onChange={this.handlChange} onFocus={this.handleFocus} onBlur={this.handelBlur} placeholder="Full Name"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="labelForm">Email</label>
                            <input data-index={1} type="email" id="email" onChange={this.handlChange} onFocus={this.handleFocus} onBlur={this.handelBlur} placeholder="Email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="birthDate" className="labelForm showed">Birth Date</label>
                            <input pattern="\d{4}-\d{2}-\d{2}"  data-index={2} type="date" id="birthDate" onChange={this.handlChange} onFocus={this.handleFocus} onBlur={this.handelBlur} placeholder="Birth Date"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="hobby" className="labelForm">Hobby</label>
                            <input data-index={3} type="text" id="hobby" onChange={this.handlChange} onFocus={this.handleFocus} onBlur={this.handelBlur} placeholder="Hobby"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="quotes" className="labelForm">Quotes</label>
                            <input data-index={4} type="text" id="quotes" onChange={this.handlChange} onFocus={this.handleFocus} onBlur={this.handelBlur} placeholder="Quotes"/>
                        </div>
                        <button type="submit">Tambahkan Saya</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Form;