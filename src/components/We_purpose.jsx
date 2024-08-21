import img from "../assets/Purpose_img.png";

const We_purpose = () => {
  return (
    <div className="w-full h-[672px] flex items-end justify-center mt-16  ">
      <div className="w-[1300px] h-[672px] flex items-center justify-center ">
        <div className="w-[630px] h-[672px] flex items-center justify-center ">
          <div className="pl-[110px]">
            <h1 className="text-[32px] font-medium w-[210px]">
              We build with purpose.
            </h1>
            <p className="mt-7 font-normal text-base text-[#AAAAAA]">
              We’re not just building another room with four walls, we’re
              building a more productive workspace. We design with you in mind,
              looking at every detail as an opportunity to enable a better
              working environment for everyone.
            </p>
          </div>
        </div>
        <div className="w-[671px] h-[672px] flex items-center justify-center">
          <a href="#">
            <img className="w-[671px] h-[672px]" src={img} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default We_purpose;
