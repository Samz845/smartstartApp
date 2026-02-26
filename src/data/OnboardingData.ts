export interface MilestoneProps {
  id: string;
  title: string;
  status: "completed" | "pending";
  completedAt?: string;
  dueDate?: string;
  order: number;
}

interface OnboardingDataProps {
  userId: string;
  progressPercentage: number;
  milestones: MilestoneProps[];
}

export const mockOnboarding: OnboardingDataProps = {
  userId: "user-123",
  progressPercentage: 60,
  milestones: [
    {
      id: "1",
      title: "Welcome Email Sent",
      status: "completed",
      completedAt: "2025-10-25",
      order: 1,
    },
    {
      id: "2",
      title: "Documentation Submitted",
      status: "completed",
      completedAt: "2025-10-30",
      order: 2,
    },
    {
      id: "3",
      title: "IT Equipment Assigned",
      status: "completed",
      completedAt: "2025-10-30",
      order: 3,
    },
    {
      id: "4",
      title: "Complete All Tasks",
      status: "pending",
      dueDate: "2025-11-05",
      order: 4,
    },
    {
      id: "5",
      title: "First Day Ready",
      status: "pending",
      dueDate: "2025-11-05",
      order: 5,
    },
  ],
};
