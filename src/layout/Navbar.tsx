import logo from "../../public/assets/mainlogo.png";
import menu from "../../public/assets/menu.png";
const Navbar = () => {
  return (
    <div className="bg-white h-28 flex items-center justify-center w-full">
      <div className="flex justify-between items-center w-full px-6">
        <div className="-translate-y-3">
          <img src={logo} alt="" />
        </div>
        <div>
          <img src={menu} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
