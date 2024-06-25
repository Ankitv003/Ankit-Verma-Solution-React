import "./App.css";
import Header from "./componenets/Header/Header.jsx";
import JobPreview from "./componenets/JobPreview/JobPreview.jsx";
import Sidebar from "./componenets/Sidebar/Sidebar.jsx";
import ToggleBar from "./componenets/toggle-bar/ToggleBar.jsx";

function App() {
  return (
    <div className="app">
      <Header />
      <ToggleBar />
      <div className="main-content">
        <JobPreview />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
