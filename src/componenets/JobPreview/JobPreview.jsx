import AboutCompany from "../AboutCompany/AboutCompany";
import JobPreviewDescription from "../JobPreviewDescription/JobPreviewDescription";
import JobPreviewHeader from "../JobPreviewHeader/JobPreviewHeader";
import JobPreviewSpecifics from "../JobPreviewSpecifics/JobPreviewSpecifics";
import "./JobPreview.css";

const JobPreview = () => {
  return (
    <div className="job-preview">
      <JobPreviewHeader />
      <JobPreviewSpecifics />
      <JobPreviewDescription />
      <AboutCompany />
    </div>
  );
};

export default JobPreview;
