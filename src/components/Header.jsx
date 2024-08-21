import img from "../assets/Logo.png";
import { Mesta, Karzina } from "../Constantas";

const Header = () => {
  return (
    <div className="relative">
      <div className="w-full  h-24  flex items-center justify-around">
        <div className="flex pl-4 items-center -translate-x-20 justify-center">
          <a href="#">
            <img src={img} alt="" />
          </a>
        </div>
        <div className="flex items-center justify-center translate-x-14">
          <ul className="flex items-center justify-center gap-28">
            <li>
              <a className="font-normal text-base" href="#">
                Products
              </a>
            </li>
            <li>
              <a className="font-normal text-base" href="#">
                Explore
              </a>
            </li>
            <li>
              <a className="font-normal text-base" href="#">
                Shop
              </a>
            </li>
          </ul>
        </div>
        <div className="w-[255px] translate-x-24 h-24 flex items-center justify-center">
          <div className="w-44 h-24 flex items-center justify-center gap-2">
            <a href="#">
              <Mesta />
            </a>
            <a className="font-medium text-base" href="#">
              Showrooms
            </a>
          </div>
          <div className="w-20 h-24 flex items-center justify-center">
            <a href="#">
              <Karzina />
            </a>
          </div>
        </div>
      </div>
      <button className="w-full h-[1.5px] absolute bg-[#AAAAAA] -bottom-0"></button>
    </div>
  );
};

export default Header;
