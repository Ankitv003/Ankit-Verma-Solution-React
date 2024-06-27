import "./JobPreviewHeader.css";
const JobPreviewHeader = () => {
  return (
    <header className="job-header">
      <div className="job-header-title">
        <h1>Senior Product Designer </h1>
        <span>•</span>
        <span>
          posted 2 days ago
          <img
            className="open-badge"
            src="images/open-badge.png"
            alt="open-badge"
          />
        </span>
      </div>
      <div className="job-header-info">
        <p>
          <img
            className="location"
            src="images/location.png"
            alt="location image"
          />{" "}
          Delaware, USA
        </p>
        <span className="dot">•</span>
        <p>
          <img className="salary" src="images/salary.png" alt="coins stacked" />
          $300k-$400k
        </p>
      </div>
    </header>
  );
};
export default JobPreviewHeader;
