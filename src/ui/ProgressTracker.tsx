import { HiCheckCircle } from "react-icons/hi2";

type ProgressTrackerProps = {
  progressPercentage: number;
};
function ProgressTracker({ progressPercentage }: ProgressTrackerProps) {
  const IsCompleted = progressPercentage === 100;
  return (
    <div
      className={`border mt-4 p-2 rounded-full ${IsCompleted ? "border-green-200 bg-green-200" : "border-red-200 bg-red-200"}`}
    >
      {IsCompleted ? (
        <p>
          <HiCheckCircle /> Documentaions completed
        </p>
      ) : (
        <p className="text-xs">
          <span className="bg-orange-400 px-1.5 py-0.5 rounded-full text-[8px] mr-2">
            &#10071;
          </span>
          complete Tax & Employment Forms
        </p>
      )}
    </div>
  );
}
export default ProgressTracker;
