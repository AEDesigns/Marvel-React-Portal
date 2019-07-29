import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

class CustomCard extends React.Component{
    render(){
        return(
            <div>
                <Card>
                    <CardImg top width="100%" src={this.props.img} alt={this.props.title} />
                    <CardBody>
                    <CardTitle>{this.props.title}</CardTitle>
                    <CardText>{this.props.body}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default CustomCard