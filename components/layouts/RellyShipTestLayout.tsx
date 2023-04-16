interface IRellyShipTestLayoutProps {
  children: React.ReactNode;
}

const RellyShipTestLayout = ({ children }: IRellyShipTestLayoutProps) => {
  return <div className="mx-auto">{children}</div>;
};

export default RellyShipTestLayout;
