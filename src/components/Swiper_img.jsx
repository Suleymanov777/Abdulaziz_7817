import img from "../assets/swiper_img.png";

const Swiper_img = () => {
  return (
    <div className="w-full h-[736px]  flex items-center justify-center mt-40">
      <div className="w-full h-[736px] flex items-center justify-center">
        <a href="#">
          <img className="w-[1550px]" src={img} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Swiper_img;
