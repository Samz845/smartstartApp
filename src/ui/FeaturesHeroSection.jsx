function FeaturesHeroSection() {
  return (
    <section className="w-full py-10 px-4 sm:px-8 xl:px-2">
      <div className=" max-w-2xl text-center mx-auto">
        <h1 className="text-2xl font-bold mb-2 md:text-4xl">
          <span className="text-blue-400">Transform</span> Your Employee
          <span className="text-blue-400 ml-1">Onboarding</span>
        </h1>
        <p className=" text-slate-900 text-base mb-4 leading-6">
          Smartstart streamlines the entire onboarding journey. From day one to
          full productivity,
          <br /> give your new hires the experience they deserve while saving
          your HR team countless hours.
        </p>
      </div>
      <div className="flex items-center justify-center gap-6">
        <button className="text-white w-[130px] bg-blue-700 p-2 rounded-md ">
          Start free Trial
        </button>
        <button className="border w-[130px] border-blue-400 p-2 rounded-md">
          Get Demo
        </button>
      </div>
    </section>
  );
}

export default FeaturesHeroSection;
