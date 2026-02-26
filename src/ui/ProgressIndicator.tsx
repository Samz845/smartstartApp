type IndicatorProps = {
  icon: React.ReactNode;
  progressPercentage: number;
};
function ProgressIndicator({ icon, progressPercentage }: IndicatorProps) {
  const isProgressGood = progressPercentage >= 50;
  return (
    <div
      className={`flex items-center gap-4 mt-4 border ${isProgressGood ? "border-blue-200 bg-blue-50" : "border-red-50 bg-red-100"} rounded-3xl px-4 py-3 `}
    >
      <div
        className={`flex items-center justify-center ${isProgressGood ? " bg-blue-200" : " bg-red-200"} p-3 rounded-full`}
      >
        <span className={isProgressGood ? "text-blue-500" : "text-red-500"}>
          {icon}
        </span>
      </div>
      <div className="flex flex-col">
        <p className="text-s mb-1 text-slate-500 font-semibold">
          {isProgressGood ? "Great Progress!" : "Keep Going!"}
        </p>
        <p className="text-xs text-slate-800">
          {isProgressGood
            ? "Past the halfway mark- amazing progress"
            : "You're on your way to completing your onboarding!"}
        </p>
      </div>
    </div>
  );
}
export default ProgressIndicator;
