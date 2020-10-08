import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            isFriendly: true,
            gender: "",
            favColor: "blue"
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChange(event) {
        const {name, value, type, checked} = event.target

        type === "checkbox" ? 
        this.setState({[name]: checked}) :
        this.setState({[name]: value})
        
    }

    handleSubmit() {
        console.log("Ahora habría que hacer algo con la información...")
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    value={this.state.firstName} 
                    name="firstName" 
                    placeholder="First Name" 
                    onChange={this.handleChange} 
                />
                <br />
                <input 
                    type="text" 
                    value={this.state.lastName} 
                    name="lastName" 
                    placeholder="Last Name" 
                    onChange={this.handleChange} 
                />
                <br />

                {
                    /**
                     * Other useful form elements:
                     * 
                     *  <textarea /> element
                     *  <input type="checkbox" />
                     *  <input type="radio" />
                     *  <select> and <option> elements
                     */
                }
                
                
                <textarea 
                    value={"Some default value"}
                    onChange={this.handleChange}
                />
                <br />

                <label>
                    <input 
                        type="checkbox" 
                        checked={this.state.isFriendly}
                        name="isFriendly" 
                        onChange={this.handleChange}
                    /> Is friendly?
                </label>
                <br />
                <br />
                <br />

                <label>
                    <input 
                        type="radio" 
                        name="gender"
                        value="male"
                        checked={this.state.gender === "male"}
                        name="gender" 
                        onChange={this.handleChange}
                    /> Male
                </label>
                <br />

                <label>
                    <input 
                        type="radio" 
                        name="gender"
                        value="female"
                        checked={this.state.gender === "female"}
                        name="gender" 
                        onChange={this.handleChange}
                    /> Female
                </label>
                <br />
                <br />
                <br />

                <label>Color favorito: </label>
                <select 
                    value={this.state.favColor}
                    onChange={this.handleChange}
                    name="favColor"
                >
                    <option value="red">Rojo</option>
                    <option value="blue">Azul</option>
                    <option value="green">Verde</option>
                </select>
                
                <h1>{this.state.firstName} {this.state.lastName}</h1>

                <br />
                <br />
                <button>Submit</button>


            </form>
        )
    }
}

export default App