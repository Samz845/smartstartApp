import { HiCheckCircle } from "react-icons/hi";
import type { MilestoneProps } from "../data/OnboardingData";
type MilestoneItemProps = {
  data: MilestoneProps;
  index: number;
  isLast: boolean;
};
function MilestoneItem({ data, index, isLast }: MilestoneItemProps) {
  const { title, status, completedAt, dueDate } = data;
  const isCompleted = status === "completed";
  const isPending = status === "pending";
  let statusIcon: number | React.ReactNode;
  let statusColor = "";

  if (isCompleted) {
    statusIcon = <HiCheckCircle />;
    statusColor = "bg-green-500 text-white border-green-500";
  } else if (isPending) {
    statusIcon = index + 1;
    statusColor = "border-gray-500 text-gray-700";
  }

  return (
    <div className={`flex items-center space-x-2 ${isLast ? "mb-4" : ""}`}>
      <div className="flex flex-col relative items-center ">
        <span
          className={`w-8 h-8 border ${statusColor} flex items-center justify-center rounded-full`}
        >
          {statusIcon}
        </span>
        {!isLast && <div className="w-[2px] bg-slate-500 h-8"></div>}
      </div>

      <div className={`flex flex-col ${!isLast ? "-mt-4" : ""}`}>
        <p className="text-slate-700 font-medium">{title}</p>
        <span className="text-sm text-gray-500">{completedAt}</span>
        {dueDate && <span className="text-sm text-gray-500"> {dueDate}</span>}
      </div>
    </div>
  );
}
export default MilestoneItem;
