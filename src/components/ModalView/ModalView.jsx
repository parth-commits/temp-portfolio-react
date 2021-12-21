import React, { Component } from "react";
import './ModalView.css';

class ModalView extends Component {
    
    
    handleClick = () => {
        this.props.handleModalClick();
    }
    notclick = (e) => {
        // do nothing
        e.stopPropagation();
    }

    render() {
        return(
            <div id="my-modal" className={`ModalView ${this.props.state.isModalOpen ? 'modal-is-open' : 'modal-is-closed'}`} onClick={this.handleClick}>
                <div className="modal-wrapper" onClick={this.notclick}>
                    <div className="modal-logo">
                        <i className="close-button fas fa-times" onClick={this.handleClick}></i>
                        <img src={require(`../ProjectsView/ProjectCategoryItemView/img/${this.props.state.modalContent.logo}`)} alt=""></img>
                    </div>
                    <div className="modal-content-wrapper">
                        <h2 className="modal-title">{this.props.state.modalContent.name}</h2>
                        <p className="modal-time">{this.props.state.modalContent.time}</p>
                        <ul className="modal-contents">
                            {this.props.state.modalContent.descriptionItems.map((item, index) => {
                                return (
                                    <li key={index} dangerouslySetInnerHTML={{__html: item}}>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalView;