import "./index.css";
import STATUS_BAR from "../status_bar";

export default function Home({ children, style }) {
  return (
    <div className="home" style={style}>
      <STATUS_BAR />
      {children}
      <div className="home-indicator"></div>
    </div>
  );
}
