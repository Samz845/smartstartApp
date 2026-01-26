import { HiOutlineCheckCircle } from "react-icons/hi2";

function FeaturesReadySection() {
  return (
    <section className="w-full bg-gradient-to-tr from-blue-800 to-blue-400 p-6 text-white">
      <div className="text-center">
        <h1 className="mb-2 font-bold md:text-2xl lg:text-4xl">
          Ready to transform your onboarding?
        </h1>
        <p className="text-sm md:text-xl">
          Join hundreds of companies who have already revolutionized their
          employee
          <br /> onboarding process. Start your free trial today—no credit card
          required.
        </p>
        <div className="flex items-center justify-center">
          <div className="flex mt-4 text-xs md:text-sm md:mx-auto mb-3 items-center gap-2  ">
            <p className="flex items-center gap-1">
              <HiOutlineCheckCircle className="text-white" />
              <span>14-day free trial</span>
            </p>
            <p className="flex items-center gap-1">
              <HiOutlineCheckCircle className="text-white" />
              <span className="">No credit card required</span>
            </p>
            <p className="flex items-center gap-1">
              <HiOutlineCheckCircle className="text-white" />
              <span className="">Cancel anytime</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <button className="bg-white text-blue-400 p-2 rounded-md w-[120px]">
          Start Now
        </button>
      </div>
    </section>
  );
}

export default FeaturesReadySection;
