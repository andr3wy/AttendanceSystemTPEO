import "./topbar.css";
import { Home, Search, Person, Chat, Notifications,Event } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
      <Home className="HomeIcon" />
      <Person className="PersonIcon" />
      <Event className="EventIcon" />
      </div>
      
    </div>
  );
}
