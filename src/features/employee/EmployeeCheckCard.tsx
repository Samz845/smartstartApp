import { FaUpload } from "react-icons/fa";
import type { cardProps } from "../../types";

const EmployeeCheckCard = ({
  first,
  second,
  status,
  border,
  bg,
  color,
}: cardProps) => {
  return (
    <div
      className={`border-2 ${border} border-l-8 rounded-lg p-2 mb-6 flex flex-col gap-3 bg-white`}
    >
      <div className="flex gap-6 justify-between items-center">
        <p className="text-sm font-medium text-stone-900 sm:text-xl">{first}</p>
        <span
          className={`text-sm border-2 py-1 px-2 rounded-lg  flex items-center ${border} ${bg} ${color} `}
        >
          {status}
        </span>
      </div>

      <div className="flex gap-3 justify-between items-center">
        <p className="text-[0.75rem] text-stone-700 sm:text-[0.9rem]">
          {second}
        </p>
        <span className="text-xs sm:text-[0.85rem] items-end text-stone-400 flex-shrink-0">
          oct 30, 2025
        </span>
      </div>

      <p className="flex items-center gap-2 text-xs text-stone-400">
        <FaUpload /> Upload Required
      </p>
    </div>
  );
};

export default EmployeeCheckCard;
