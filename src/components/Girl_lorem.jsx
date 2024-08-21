import img from "../assets/girl_img.png";
import img2 from "../assets/Reaction.png";
import { Flexport, Google2, Wondefull } from "../Constantas";

const Girl_lorem = () => {
  return (
    <div className="w-full flex items-center justify-center relative h-[800px]  mt-52">
      <img className="relative w-[1550px] -z-2" src={img} alt="" />
      <div className="w-[350px] h-36 absolute top-[120px] left-[200px]">
        <div className="">
          <img src={img2} alt="" />
        </div>
        <h1 className="w-[228px] mt-1 text-2xl font-normal text-white">
          “We can now have meetings in peace.”
        </h1>
        <div className="mt-3">
          <a className="" href="#">
            <Google2 />
          </a>
        </div>
      </div>
      <div className="w-[350px] h-36 absolute top-[322px] left-[200px]">
        <div className="">
          <img src={img2} alt="" />
        </div>
        <h1 className="w-[264px] mt-1 text-2xl font-normal text-white">
          “Amazing private space to get work done.”
        </h1>
        <div className="">
          <a className="" href="#">
            <Wondefull />
          </a>
        </div>
      </div>
      <div className="w-[350px] h-36 absolute top-[510px] left-[200px]">
        <div className="">
          <img src={img2} alt="" />
        </div>
        <h1 className="w-[201px] mt-1 text-2xl font-normal text-white">
          “Our booths are in constant use.”
        </h1>
        <div className="mt-3">
          <a className="" href="#">
            <Flexport />
          </a>
        </div>
      </div>
      <div className="w-[184px] h-3 absolute top-[690px] left-[200px]">
        <a href="#" className="text-base font-normal text-white">
          READ MORE REVIEWS
        </a>
      </div>
    </div>
  );
};

export default Girl_lorem;
