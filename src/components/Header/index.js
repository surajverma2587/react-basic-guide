import "./Header.css";

const Header = (props) => {
  const title = props.title;
  return <div className="header">{title}</div>;
};

export default Header;
