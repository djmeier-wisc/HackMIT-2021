import React from 'react';
import './contactCard.css'
class ContactCard extends React.Component {
    render() {
        return (
        <div className="container border border-dark">
            <div className="text-center p-3 contact-card">
                <img className="img-rounded img-crop" src={"./" + this.props.image} alt={"" + this.props.name + ""} />
                <br />
                <h3>{this.props.name}</h3>
                <br />
                <p>{this.props.description}</p>
            </div>
        </div>
        );
    }
}

export default ContactCard;