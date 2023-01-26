import logo from "../images/logo.png"
import bars from "../images/bars.png"
import { Link } from "react-router-dom";
import { Component } from "react";

class Navbar extends Component {
    state={clicked:false};
    handleClick=()=>{
        this.setState({clicked:!this.state.clicked})
    }
    render() {
        return (
            <header>
                <nav>
                    
                    <a href="#"><img src={logo} alt="Logo" className="nav-logo"></img></a>
                    <div className={this.state.clicked ? "active": "inactive"}>
                        <ul className="nav-items" >
                            <Link to="/"><li>Home</li></Link>
                            <Link to="/contact"><li>Contact</li></Link>
                        </ul>
                    </div>
                    <div className="bar-nav" onClick={this.handleClick}>
                        <img className="bar-icon" src={bars}/>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Navbar;