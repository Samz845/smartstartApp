import { FaMedal } from "react-icons/fa";
import ProgressIndicator from "../../ui/ProgressIndicator";
import { mockOnboarding } from "../../data/OnboardingData";
import MilestoneList from "../../ui/MilestoneList";
import ProgressTracker from "../../ui/ProgressTracker";
import PageWrapper from "../../ui/PageWrapper";

function Progress() {
  const { progressPercentage, milestones } = mockOnboarding;
  return (
    <PageWrapper>
      <h2 className="font-bold text-2xl text-slate-800 mb-2">
        Progress Tracker
      </h2>
      <p className="text-slate-500">Your onboarding journey so far</p>

      <ProgressIndicator
        icon={<FaMedal size={15} />}
        progressPercentage={progressPercentage}
      />
      <MilestoneList milestones={milestones} />
      <ProgressTracker progressPercentage={progressPercentage} />
    </PageWrapper>
  );
}
export default Progress;
