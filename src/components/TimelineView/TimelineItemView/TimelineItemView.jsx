import React, { Component } from "react";
import './TimelineItemView.css'
class TimelineItemView extends Component {
    
    render() {
        return(
            <div className="timeline-item fade-in">
                <label className="timeline-item-title">
                    <h3 className="timeline-item-title-title">{this.props.item.position}, {this.props.item.company}</h3>
                    <p className="timeline-item-title-date">{this.props.item.time}</p>
                </label>
                <div className="timeline-item-content">
                    <ul>
                        {this.props.item.descriptionItems.map((item, index) => {
                            return (
                                <li key={index} dangerouslySetInnerHTML={{__html: item}}></li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default TimelineItemView;