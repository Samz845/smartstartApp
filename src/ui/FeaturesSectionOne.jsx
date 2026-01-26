import {
  HiClipboardList,
  HiOutlineUsers,
  HiTrendingUp,
  HiUpload,
} from "react-icons/hi";

function FeaturesSectionOne() {
  return (
    <section className="w-full bg-blue-50 py-8 px-4 md:px-8">
      <div className=" text-center">
        <h1 className="text-xl font-bold mb-2 md:text-2xl lg:text-4xl">
          Everything you need for seamless onboarding
        </h1>
        <p className="text-sm mb-4 text-slate-900 md:text-xl">
          Powerful features designed to make employee onboarding effortless,
          <br />
          efficient, and engaging.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 w-full lg:grid-cols-4 xl:max-w-[1200px] lg:mx-auto lg:gap-10">
        <div className="bg-white p-4 flex flex-col gap-4 rounded-md border ">
          <span className="bg-blue-600 w-6 rounded-lg p-1">
            <HiOutlineUsers className="text-white" />
          </span>
          <h1 className="text-slate-900 xl:text-sm xl:font-bold">
            Smart Employee Management
          </h1>
          <p className="text-slate-600 lg:text-sm">
            Centralize all employee information, track onboarding progress, and
            manage teams effortlessly from one intuitive dashboard.
          </p>
        </div>

        <div className="bg-white p-4 flex flex-col gap-4 rounded-md border">
          <span className="bg-blue-600 w-6 rounded-lg p-1">
            <HiTrendingUp className="text-white" />
          </span>
          <h1 className="text-slate-900 xl:text-sm xl:font-bold">
            Real-Time Progress Tracking
          </h1>
          <p className="text-slate-600 lg:text-sm">
            Monitor onboarding milestones with visual progress indicators. Get
            instant insights into who's on track and who needs support.
          </p>
        </div>

        <div className="bg-white p-4 flex flex-col gap-4 rounded-md border">
          <span className="bg-blue-600 w-6 rounded-lg p-1">
            <HiClipboardList className="text-white" />
          </span>
          <h1 className="text-slate-900 xl:text-sm xl:font-bold">
            Customizable Checklists
          </h1>
          <p className="text-slate-600 lg:text-sm">
            Create role-specific onboarding checklists with automated task
            assignment. Ensure nothing falls through the cracks.
          </p>
        </div>

        <div className="bg-white p-4 flex flex-col gap-4 rounded-md border">
          <span className="bg-blue-600 w-6 rounded-lg p-1">
            <HiUpload className="text-white" />
          </span>
          <h1 className="text-slate-900 xl:text-sm xl:font-bold">
            Document Management
          </h1>
          <p className="text-slate-600 lg:text-sm">
            Securely store and manage all onboarding documents. Easy upload,
            organization, and access for HR teams and new hires.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSectionOne;
