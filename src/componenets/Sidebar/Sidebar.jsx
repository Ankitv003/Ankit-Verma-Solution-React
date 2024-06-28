import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="actions">
        <button className="btn delete">
          <img src="images/delete.png" />
          Delete job
        </button>
        <button className="btn edit">
          <img src="images/edit.png" />
          Edit job
        </button>
      </div>
      <div className="application-info">
        <ul>
          <li>
            <span className="application-info-names">
              <img src="images/applications.png" />
              Applicants
            </span>
            <span className="application-info-numbers">400</span>
          </li>
          <li>
            <span className="application-info-names">
              <img src="images/matches.png" />
              Matches
            </span>
            <span className="application-info-numbers">100</span>
          </li>
          <li className="message-item">
            <span className="application-info-names">
              <img src="images/messages.png" />
              Messages
            </span>
            <span className="application-info-numbers">147</span>
          </li>
          <li className="views-item">
            <span className="application-info-names">
              <img src="images/views.png" />
              Views
            </span>
            <span className="application-info-numbers">800</span>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
