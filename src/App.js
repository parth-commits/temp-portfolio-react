import './App.css'
import Navbar from './components/Navbar/Navbar';
import LandingView from './components/LandingView/LandingView';
import SoftwareView from './components/SoftwareView/SoftwareView';
import TimelineView from './components/TimelineView/TimelineView';
import ProjectsView from './components/ProjectsView/ProjectsView';
import EducationView from './components/EducationView/EducationView';
import AwardView from './components/AwardView/AwardView';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div class="blobsArea">
      <ul class="blobs">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
      <LandingView></LandingView>
      <SoftwareView></SoftwareView>
      <TimelineView></TimelineView>
      <ProjectsView></ProjectsView>
      <EducationView></EducationView>
      <AwardView></AwardView>
      <h1>hello world</h1>
      <h1>hello world</h1>
      <h1>hello world</h1>
      <h1>testing hello world</h1>
    </div>
  );
}

export default App;
