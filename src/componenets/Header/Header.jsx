import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Logo</div>
      <nav>
        <ul className="nav-links">
          <li className="nav-links-jobs">
            <img src="images/briefcase.png" /> Jobs
          </li>
          <li className="nav-links-messages">
            <img src="images/messages.png" />
            <span className="span-messages"></span> Messages
          </li>
          <li className="nav-links-payments">
            <img src="images/payments.png" />
            Payments
          </li>
        </ul>
      </nav>
      <div className="user-profile">
        <ul>
          <li className="notification-icon">
            <img className="img-notification" src="images/notification.png" />
            <span className="span-notification"></span>
          </li>
          <li>
            <img className="img-atlassian" src="images/atlassian.png" />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
