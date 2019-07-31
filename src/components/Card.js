import React from 'react';
import '../App.css';

class CustomCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: false
        }
        this.toggleCSS = this.toggleCSS.bind(this);
    }
    toggleCSS() {
        this.setState = {
            display: !this.state.display
        }
    }
    render() {
        return (
            <div>
                <div class="card" style={{ width: "15rem" }} className="EventsDiv">
                    <img class="card-img-top" src={this.props.img + "/standard_medium.jpg"} alt={"The Cover Photo for the Comic series " + this.props.title} />
                    <div class="card-body">
                        <h5 class="card-title">{this.props.title}</h5>
                        <button type="button" class="btn btn-primary" onClick={this.toggleCSS}>View Description</button>
                        <p class={`card-text custom-overflow${this.state.display ? '-2' : ''}`}>{this.props.body}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default CustomCard