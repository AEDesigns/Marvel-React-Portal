import React from 'react';
import '../App.css';

class CustomCard extends React.Component{
    render(){
        return(
            <div>
                <div class="card" style={{width: "18rem"}} className="EventsDiv">
                <img class="card-img-top" src={this.props.img + "/standard_medium.jpg"} alt={"The Cover Photo for the Comic series " + this.props.title}/>
                <div class="card-body">
                    <h5 class="card-title">{this.props.title}</h5>
                    <p class="card-text">{this.props.body}</p>
                </div>
                </div>
            </div>
        )
    }
}

export default CustomCard