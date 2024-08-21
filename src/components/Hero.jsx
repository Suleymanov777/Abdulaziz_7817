import img from "../assets/Hero_logo.png";

const Hero = () => {
  return (
    <div className="w-full h-[746px] flex items-center justify-center mt-10">
      <a href="#">
        <img className="w-[1550px] h-[746px] mt-5" src={img} alt="" />
      </a>
    </div>
  );
};

export default Hero;
