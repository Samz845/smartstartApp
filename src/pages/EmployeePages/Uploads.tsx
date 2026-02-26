import EmployeeDocUploads from "../../features/employee/EmployeeDocUploads";
import PageWrapper from "../../ui/PageWrapper";

function Uploads() {
  return (
    <PageWrapper>
      <div className="-mt-4 mb-4">
        <h1 className="font-bold">Document Uploads</h1>
        <p className="text-sm text-slate-700">
          Upload your documents to complete this step
        </p>
      </div>
      <EmployeeDocUploads />
    </PageWrapper>
  );
}

export default Uploads;
