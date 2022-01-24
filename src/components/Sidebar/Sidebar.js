import {
  MdExitToApp,
  MdHistory,
  MdHome,
  MdLibraryBooks,
  MdSentimentSatisfied,
  MdSubscriptions,
  MdThumbUp,
} from "react-icons/md";
import { useDispatch } from "react-redux";
import { log_out } from "../../redux/actions/auth.action";
import "./_sidebar.scss";

export const Sidebar = ({ menu, handlemenu }) => {
  
  
  
  const dispatch = useDispatch();
  const logOut_Handler = () =>{
dispatch(log_out())

  }


  return (
    <nav
      className={menu ? "slidebar open" : "slidebar"}
      onClick={() => handlemenu(false)}
    >
      <li>
        <MdHome size={23} />
        <span>Home</span>
      </li>

      <li>
        <MdSubscriptions size={23} />
        <span>Subscription</span>
      </li>

      <li>
        <MdThumbUp size={23} />
        <span>Liked Videos</span>
      </li>

      <li>
        <MdHistory size={23} />
        <span>History</span>
      </li>

      <li>
        <MdLibraryBooks size={23} />
        <span>Library</span>
      </li>

      <li>
        <MdSentimentSatisfied size={23} />
        <span>I dont Know</span>
      </li>

      <li onClick={logOut_Handler  }>
        <MdExitToApp size={23} />
        <span>Logout</span>
      </li>
      <hr />
    </nav>
  );
};
