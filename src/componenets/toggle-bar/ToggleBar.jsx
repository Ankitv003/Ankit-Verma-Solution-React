import "./ToggleBar.css";

const ToggleBar = () => {
  return (
    <div className="job">
      <ul className="toggle-list">
        <li className="tab active" id="toggle-list-job">
          Job preview
        </li>
        <li className="tab">Applicants</li>
        <li className="tab">Match</li>
        <li className="tab">Messages</li>
      </ul>
    </div>
  );
};

export default ToggleBar;
