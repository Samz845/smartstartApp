export type formRowProps = {
  label: string;
  error?: string;
  children: React.ReactElement<{ id: string }>;
};

export type protectedRoutesProps = {
  allowedRoles: string[];
  children: React.ReactNode;
};

export type cardProps = {
  first: string;
  second: string;
  status: string;
  border: string;
  bg: String;
  color: string;
};
