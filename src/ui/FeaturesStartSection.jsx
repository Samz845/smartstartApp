function FeaturesStartSection() {
  return (
    <section className="w-full p-6 md:px-10 bg-gray-100">
      <div className="text-center mb-4">
        <h1 className="text-xl font-bold text-slate-800 md:text-4xl">
          Get started in minutes
        </h1>
        <p className="text--slate-700">
          Simple setup, powerful results. No technical expertise required.
        </p>
      </div>
      <div className="flex flex-col w-full lg:flex-row gap-6 lg:gap-14 xl:max-w-[1200px] lg:mx-auto">
        <div className="bg-white py-6 px-4 md:px-8 rounded-lg flex justify-center flex-col mb-5 gap-5 lg:w-[30%]">
          <div className="rounded-full mx-auto bg-blue-300 text-blue-600  w-8 h-8 flex items-center justify-center">
            <span>1</span>
          </div>
          <h1 className="text-center md:text-xl">Create Your Workspace</h1>
          <p className="text-center text-slate-600">
            Sign up and set up your organization in under 5 minutes. Import your
            team and customize your workflows.
          </p>
        </div>
        <div className="bg-white py-6 px-4 md:px-8 rounded-lg flex justify-center flex-col mb-8 gap-5 lg:w-[30%]">
          <div className="rounded-full mx-auto bg-purple-300 text-purple-500 w-8 h-8 flex items-center justify-center">
            <span>2</span>
          </div>
          <h1 className="text-center md:text-xl">Build Your Checklists</h1>
          <p className="text-center text-slate-600">
            Use our templates or create custom onboarding checklists tailored to
            each role and department.
          </p>
        </div>
        <div className="bg-white py-6 px-4 md:px-8 rounded-lg flex justify-center flex-col mb-8 gap-5 lg:w-[30%]">
          <div className="rounded-full mx-auto bg-green-200 text-green-600  w-8 h-8 flex items-center justify-center">
            <span>3</span>
          </div>
          <h1 className="text-center md:text-xl">Track & Optimize</h1>
          <p className="text-center text-slate-600">
            Monitor progress in real-time, automate reminders, and continuously
            improve your onboarding process.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FeaturesStartSection;
