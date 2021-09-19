import React from 'react';
import './contactCard.css'

class ScholarCard extends React.Component {
    render() {
        return (
        <div className="container border border-dark">
            <div className="text-center p-3 contact-card">
                <h3>{this.props.title}</h3>
                <br />
                <h3>{this.props.deadline}</h3>
                <br />
                <p><a href = {''+ this.props.link}>Details</a></p>
                <br />
                <p className = "overflow-ellipsis">{this.props.description}</p>
            </div>
        </div>
        );
    }
}

export default ScholarCard;