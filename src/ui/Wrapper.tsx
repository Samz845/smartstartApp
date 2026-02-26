interface WrapperProps {
  children: React.ReactNode;
}

function Wrapper({ children }: WrapperProps) {
  return <div className="hidden">{children}</div>;
}
export default Wrapper;
