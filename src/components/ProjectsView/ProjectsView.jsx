import React, { Component } from "react";
import './ProjectsView.css';
import { ProjectCategoryItems } from "./ProjectCategoryItems";
import { ProjectItems } from "./ProjectItems";
import ProjectCategoryItemView from "./ProjectCategoryItemView/ProjectCategoryItemView";
import ModalView from "../ModalView/ModalView";
class ProjectsView extends Component {
    state = { isModalOpen: false, modalContent: {
        name: 'COVID-19 Live Data App which is a really long name',
        time: 'August 2020',
        logo: 'sb-wApp.png',
        descriptionItems: [
            'this is a temporary test message, will be populated with real data later',
            'this is a temporary test message, will be populated with real data later',
            'this is a temporary test message, will be populated with real data later',
            'this is a temporary test message, will be populated with real data later',
            'this is a temporary test message, will be populated with real data later',
            'this is a temporary test message, will be populated with real data later',
            'this is a temporary test message, will be populated with real data later',
            'this is a temporary test message, will be populated with real data later',
            'this is a temporary test message, will be populated with real data later',
            'this is a temporary test message, will be populated with real data later',
            'this is a temporary test message, will be populated with real data later',
            'this is a temporary test message, will be populated with real data later',
            'this is a temporary test message, will be populated with real data later',
            'this is a temporary test message, will be populated with real data later',
            'this is a temporary test message, will be populated with real data later',
            'this is a temporary test message, will be populated with real data later',
        ],
    } }
    

    handleModalClick = (item) => {
        this.setState({ isModalOpen: !this.state.isModalOpen });
        if (item) {
            this.setState({ modalContent: item });
        }
    }
    render() {
        return(
            <div className="ProjectView" id="projects">
                <h2 className="sub-headings slide-in">Projects</h2>
                <div className="projects-wrapper">
                    {ProjectCategoryItems.map((item, index) => {
                            return (
                                <ProjectCategoryItemView key={index} item={item} handleModalClick={this.handleModalClick}></ProjectCategoryItemView>
                            )
                        }
                    )}
                </div>
                <ModalView key={new Date().getTime()} state={this.state} handleModalClick={this.handleModalClick}></ModalView>
            </div>
        );
    }
}

export default ProjectsView;