import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";
import "./_header.scss";



export const Header = ({ handlemenu }) => {
  return (
    <div className="border border-dark header">
      <FaBars
        className="header__menu "
        size={26}
        onClick={() => handlemenu()}
        />

      <img
        src="https://www.freepnglogos.com/uploads/youtube-logo-png-images-0.png"
        className="header__logo"
        alt=""
      />
      <form>
        <input placeholder="Search" type="text" />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>

      <div className="header_icon">
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img src="https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png" />
      </div>
    </div>
  );
};
