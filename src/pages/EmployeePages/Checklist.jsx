import EmployeeCheckCard from "../../features/employee/EmployeeCheckCard";

const Checklist = () => {
  return (
    <>
      <div>
        <h1 className="font-bold text-2xl text-stone-700">
          Onboarding Checklist
        </h1>
        <p className="text-sm text-stone-600 mb-1">
          Complete all tasks to finish your onboarding
        </p>
        <progress
          value={2}
          max={5}
          className="w-full rounded-lg h-2 bg-blue-200 accent-blue-600"
        ></progress>
        <p className="text-right text-xs font-semibold mt-1">
          2 of 5 completed
        </p>
      </div>
      <div className=" mt-6">
        <EmployeeCheckCard
          first="Complete Employee Information Form"
          second="Fill out all required personal and contact information"
          status="Completed"
          border="border-green-300"
          color="text-green-500"
          bg="bg-green-100"
        />
        <EmployeeCheckCard
          first="Upload Government-issued ID"
          second="Provide a clear copy of your driver's license or passport"
          status="Completed"
          border="border-green-300"
          color="text-green-500"
          bg="bg-green-100"
        />
        <EmployeeCheckCard
          first="Upload Offer Letter"
          second="Review and electronically sign your employment offer"
          status="processing"
          border="border-blue-300"
          color="text-blue-500"
          bg="bg-blue-100"
        />
        <EmployeeCheckCard
          first="Read Company Handbook"
          second="Go through the culture, policies and values to get familiar with how we work"
          status="pending"
          border="border-yellow-700"
          color="text-yellow-500"
          bg="bg-yellow-100"
        />
        <EmployeeCheckCard
          first="Complete Tax Forms"
          second="Fill out your required employment and payroll forms"
          status="pending"
          border="border-yellow-700"
          color="text-yellow-500"
          bg="bg-yellow-100"
        />
      </div>
    </>
  );
};

export default Checklist;
