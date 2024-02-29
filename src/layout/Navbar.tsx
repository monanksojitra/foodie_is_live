import logo from "../../public/assets/mainlogo.png";
import menu from "../../public/assets/menu.png";
const Navbar = () => {
  return (
    <div className="bg-white h-28 lg:h-40 flex items-center justify-center w-full">
      <div className="flex justify-between items-center w-full px-6 lg:px-24">
        <div className="-translate-y-3">
          <img src={logo} alt="" className="lg:h-28" />
        </div>
        <div className=" lg:hidden block">
          <img src={menu} alt="" />
        </div>
        <ul className="hidden lg:flex gap-x-24 font-semibold justify-between items-center">
          <li className="text-[#FA4A0C]">Home</li>
          <li>Product</li>
          <li>Faq</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
