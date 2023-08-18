interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  //00:10:52
  return <div>{children}</div>;
};

export default Sidebar;
