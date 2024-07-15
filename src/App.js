import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './component/Home';
import Experience from './component/Experience';
import Projects from './component/Projects';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import ProjectDisplay from './component/ProjectDisplay';
import Extras from './component/Extras';
import LiveProject from './component/LiveProject'
import JobListings from './component/JobListings';
import AdminRegister from './component/AdminRegister';
import AddJobPost from './component/AddJobPost'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Routes>
          <Route path="/" element = {<Home />}/>
          <Route path="/projects" element = {<Projects />}/>
          <Route path="/experience" element = {<Experience />}/>
          <Route path="/extras" element = {<Extras />}/>
          <Route path = "/project/:id" element = {<ProjectDisplay />} />
          <Route path="/liveProject" element = {<LiveProject />}/>
          <Route path="/jobListing" element = {<JobListings />}/>
          <Route path="/login" element = {<AdminRegister />}></Route>
          <Route path="/post-job" element={<AddJobPost/>}></Route>
          
          </Routes>
        <Footer />

      </Router>
    </div>
  );
}

export default App;
