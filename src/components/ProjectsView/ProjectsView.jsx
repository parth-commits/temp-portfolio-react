import React, { Component } from "react";
import './ProjectsView.css';
import { ProjectCategoryItems } from "./ProjectCategoryItems";
import { ProjectItems } from "./ProjectItems";
import ProjectCategoryItemView from "./ProjectCategoryItemView/ProjectCategoryItemView";
class ProjectsView extends Component {
    

    render() {
        return(
            <div className="ProjectView" id="projects">
                <h2 className="sub-headings slide-in">Projects</h2>
                <div className="projects-wrapper">
                    {ProjectCategoryItems.map((item, index) => {
                            return (
                                <ProjectCategoryItemView key={index} item={item}></ProjectCategoryItemView>
                            )
                        }
                    )}
                </div>
            </div>
        );
    }
}

export default ProjectsView;