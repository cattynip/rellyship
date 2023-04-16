interface IRellyShipLayoutProps {
  children: React.ReactNode;
}

const RellyShipLayout = ({ children }: IRellyShipLayoutProps) => {
  return (
    <div className="dark:mix-blend-darken dark:text-zinc-50 mix-blend-lighten text-black">
      {children}
    </div>
  );
};

export default RellyShipLayout;
