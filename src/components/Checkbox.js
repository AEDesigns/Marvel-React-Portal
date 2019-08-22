import React from 'react';
import '../App.css';

class Checkboxes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Character: 'Search Characters',
            Events: 'Search Events',
            Comics: 'Search Comics'
        }
    }

    render() {
        return (
            <div className="container">
                <div class="row">
                    <div>
                        <input id="characters" type="checkbox" /><label class="labelly" for="characters">{this.state.Character}</label>
                    </div>
                    <div>
                        <input id="comics" type="checkbox" label="Comics" /><label class="labelly" for="comics">{this.state.Events}</label>
                    </div>
                    <div>
                        <input id="events" type="checkbox" label="Events" /><label class="labelly" for="events">{this.state.Comics}</label>
                    </div>
                </div>
            </div>
        )
    }
}



export default Checkboxes