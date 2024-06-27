import "./AboutCompany.css";
const AboutCompany = () => {
  return (
    <section className="company-details">
      <img src="images/atlassian-frame.png" alt="atlassian-frame" />
      <div className="company-details-text">
        <div className="col">
          <div>
            <p className="text-header">Company size</p>
            <p className="text-bold">1k - 2k Employees</p>
          </div>
          <div>
            <p className="text-header">Sector</p>
            <p className="text-bold">Information Technology, Infrastructure</p>
          </div>
          <div>
            <p className="text-header">Founded in</p>
            <p className="text-bold">2019</p>
          </div>
        </div>
        <div className="col">
          <div>
            <p className="text-header">Type</p>
            <p className="text-bold">Private</p>
          </div>
          <div>
            <p className="text-header">Funding:</p>
            <p className="text-bold">Bootstrapped</p>
          </div>
          <div>
            <p className="text-header">Founded By:</p>
            <p className="text-bold">Scott Farquhar, Mike Cannon-Brookes</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
