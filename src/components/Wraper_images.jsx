import img from "../assets/wraper_img1.png";
import img2 from "../assets/wraper_img2.png";
import img3 from "../assets/wraper_img3.png";
import img4 from "../assets/wraper_img4.png";

const Wraper_images = () => {
  return (
    <div className="w-full h-[962px] flex items-center justify-center mt-40">
      <div className="w-[1300px] flex justify-center h-[962px] ">
        <ul className="flex justify-center flex-wrap gap-6">
          <li className="w-[588px] h-[449px] ">
            <a href="#">
              <img
                className="w-[588px] rounded-sm h-[418px]"
                src={img}
                alt=""
              />
            </a>
            <h1 className="text-xl pl-1 font-normal">Phone Booth</h1>
          </li>
          <li className="w-[588px] h-[449px] ">
            <a href="#">
              <img
                className="w-[588px] rounded-sm h-[418px]"
                src={img2}
                alt=""
              />
            </a>
            <h1 className="text-xl pl-1 font-normal">Focus Room</h1>
          </li>
          <li className="w-[588px] h-[449px] ">
            <a href="#">
              <img
                className="w-[588px] rounded-sm h-[418px]"
                src={img3}
                alt=""
              />
            </a>
            <h1 className="text-xl pl-1 font-normal">Meeting Room</h1>
          </li>
          <li className="w-[588px] h-[449px] ">
            <a href="#">
              <img
                className="w-[588px] rounded-sm h-[418px]"
                src={img4}
                alt=""
              />
            </a>
            <h1 className="text-xl pl-1 font-normal">Open Meeting Room</h1>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Wraper_images;
