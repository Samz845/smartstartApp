import { mockOnboarding } from "../data/OnboardingData";
import MilestoneItem from "./MileStoneItem";

function MilestoneList({
  milestones,
}: {
  milestones: typeof mockOnboarding.milestones;
}) {
  return (
    <div className="mt-4 border border-gray-300 rounded-lg p-2">
      <h2 className="font-bold text-xl text-slate-800 mb-2">Milestones</h2>
      {milestones.map((milestone, index) => {
        const isLast = index === milestones.length - 1;
        return (
          <MilestoneItem
            key={milestone.id}
            data={milestone}
            index={index}
            isLast={isLast}
          />
        );
      })}
    </div>
  );
}

export default MilestoneList;
