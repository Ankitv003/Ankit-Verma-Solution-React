import "./JobPreviewSpecifics.css";
const JobPreviewSpecifics = () => {
  return (
    <section className="job-details">
      <div className="container">
        <div className="row">
          <p>Skills Required</p>
          <img src="images/figma.png" alt="figma" />
          <img src="images/adobe-illustrator.png" alt="adobe-illustrator" />
          <img src="images/adobe-xd.png" alt="adobe-xd" />
        </div>
        <div className="row">
          <p>Preferred Language</p>
          <p className="bold">English</p>
        </div>
        <div className="row">
          <p>Type</p>
          <p className="bold">Full-Time</p>
        </div>
        <div className="row">
          <p>Years of Experience</p>
          <p className="bold">3+ Years of Experience</p>
        </div>
      </div>
    </section>
  );
};
export default JobPreviewSpecifics;
