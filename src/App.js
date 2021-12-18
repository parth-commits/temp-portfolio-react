import './App.css'
import Navbar from './components/Navbar/Navbar';
import LandingView from './components/LandingView/LandingView';
import SoftwareView from './components/SoftwareView/SoftwareView';
import TimelineView from './components/TimelineView/TimelineView';
import ProjectsView from './components/ProjectsView/ProjectsView';
import EducationView from './components/EducationView/EducationView';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <LandingView></LandingView>
      <SoftwareView></SoftwareView>
      <TimelineView></TimelineView>
      <ProjectsView></ProjectsView>
      <EducationView></EducationView>
      <h1>hello world</h1>
      <h1>hello world</h1>
      <h1>hello world</h1>
      <h1>testing hello world</h1>
    </div>
  );
}

export default App;
