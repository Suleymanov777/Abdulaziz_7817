// import img from "../assets/Logo.png";
import { Facebok, In, Instagram2, Logo, Piton } from "../Constantas";

const Footer = () => {
  return (
    <div className="w-full h-[619px] bg-[#2B2B2B] flex items-center mt-20 justify-center">
      <div className="w-[1300px] flex items-center justify-center h-[500px] ">
        <ul className="flex items-center justify-center gap-[84px] text-[#FFFFFF]">
          <li className="w-[87px] h-[471px] mt-12 ">
            <a href="#">
              <Logo />
            </a>
          </li>
          <li className="w-[340px] h-[471px] flex flex-wrap items-center justify-center gap-0 ">
            <div className="w-[170px] font-medium text-sm h-[198px] ">
              <h1>About</h1>
              <h2 className="mt-1">Compare</h2>
              <h3 className="mt-[2px]">Reviews</h3>
              <h4 className="mt-[2px]">Risk-Free Trial</h4>
              <h5 className="mt-[2px]">Careers</h5>
              <h6 className="mt-[2px]">Press</h6>
              <p className="mt-[2px]">Podcast</p>
              <p className="mt-[2px]">Blog</p>
            </div>
            <div className="w-[170px] font-medium text-sm h-[198px] ">
              <h1>Support</h1>
              <h2 className="mt-1">FAQ</h2>
              <h3 className="mt-[2px]">Booth Assembly</h3>
              <h4 className="mt-[2px]">Delivery</h4>
              <h5 className="mt-[2px]">Room Service</h5>
              <h6 className="mt-[2px]">Warranty</h6>
              <p className="mt-[2px]">Terms of Use</p>
              <p className="mt-[2px]">Privacy Policy</p>
              <p className="mt-[2px]">Copyright</p>
            </div>
            <div className="w-[170px] font-medium text-sm h-[198px] ">
              <h1>Showrooms</h1>
              <h2 className="mt-1">New York</h2>
              <h3 className="mt-[1px]">London</h3>
              <h4 className="mt-[1px]">San Francisco</h4>
              <h5 className="mt-[1px]">Paris</h5>
              <h6 className="mt-[1px]">Copenhagen</h6>
              <p className="mt-[1px]">Zürich</p>
              <p className="mt-[1px]">Los Angeles</p>
              <p className="mt-[1px]">Berlin</p>
              <p className="mt-[1px]">Belgium</p>
              Virtual Demo
            </div>
            <div className="w-[170px] font-medium text-sm h-[198px] ">
              <h1>Office</h1>
              <h2 className="mt-1 w-32">
                599 Broadway, FL 9 New York, NY 10012
              </h2>
            </div>
          </li>
          <li className="w-32 h-[471px] mt-10 ">
            <h1 className="text-sm font-medium">Follow us</h1>
            <div className="flex w-32 h-7 -translate-x-2 items-center justify-center gap-4 mt-4 ">
              <a href="">
                <Facebok />
              </a>
              <a href="">
                <Instagram2 />
              </a>
              <a href="">
                <In />
              </a>
              <a href="">
                <Piton />
              </a>
            </div>
          </li>
          <li className="w-[375px] h-[471px] pt-4  ">
            <h1 className="font-medium text-sm">Join our mailing list</h1>
            <h2 className="font-medium text-sm mt-4">
              Be the first to hear everything about ROOM.
            </h2>
            <div className="w-[327px] h-20">
              <input
                className="w-[327px]  h-14 border-2 border-[#6C6C6C] rounded-md bg-[#2B2B2B] mt-8"
                type="text"
                name="inpt"
                id="inpt"
              />
              <div className="flex items-center justify-center ml-[242px] text-[#959595] mt-2">
                <label className="text-sm font-medium " htmlFor="inpt">
                  United States
                </label>
              </div>
            </div>
            <div className="w-[375px] h-20 flex items-center gap-5 justify-center mt-14 ">
              <input
                className="w-28 h-28  border-2  border-[#959595]"
                type="checkbox"
                name=""
                id=""
              />
              <p className="text-xs font-medium text-[#666666]">
                {" "}
                Yes. I would like to receive marketing communications from ROOM
                about product updates and special offers. Please refer to ROOM’s
                Privacy Policy for more information about how we process your
                data (including how to unsubscribe).{" "}
              </p>
            </div>
            <h1 className="text-lg ml-[300px] font-medium mt-14">Sign Up</h1>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
