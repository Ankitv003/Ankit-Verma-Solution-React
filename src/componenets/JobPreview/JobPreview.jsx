import "./JobPreview.css";

const JobPreview = () => {
  return (
    <div className="job-preview">
      <header className="job-header">
        <h1>Senior Product Designer</h1>
        <p>
          Delaware, USA • $300k-$400k • <span className="status">Open</span>
        </p>
      </header>
      <section className="job-details">
        <div className="skills">
          <h3>Skills Required</h3>
          <span>Figma</span>
          <span>Adobe Illustrator</span>
          <span>Adobe XD</span>
        </div>
        <div className="info">
          <h3>Preferred Language</h3>
          <p>English</p>
          <h3>Type</h3>
          <p>Full time</p>
          <h3>Years of Experience</h3>
          <p>3+ Years of Experience</p>
        </div>
      </section>
      <section className="job-description">
        <h3>About the job</h3>
        <p>Handle the UI/UX research design...</p>
      </section>
      <section className="company-details">
        <h3>Atlassian</h3>
        <p>Company size: 1k - 2k Employees</p>
        <p>Type: Private</p>
        <p>Sector: Information Technology, Infrastructure</p>
        <p>Founded: 2019</p>
        <p>Founded By: Scott Farquhar, Mike Cannon-Brookes</p>
      </section>
    </div>
  );
};

export default JobPreview;
