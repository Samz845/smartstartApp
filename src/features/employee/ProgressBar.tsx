export function ProgressBar() {
  return (
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
      <p className="text-right text-xs font-semibold mt-1">2 of 5 completed</p>
    </div>
  );
}
export default ProgressBar;
