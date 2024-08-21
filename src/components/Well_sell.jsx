import img from "../assets/Well_girl.png";

const Well_sell = () => {
  return (
    <div className="w-full h-[672px] flex items-center justify-center ">
      <div className="flex items-center justify-center w-[1300px] gap-[90px] -translate-x-2">
        <a href="#">
          <img className="w-[671px] rounded-sm h-[672px]" src={img} alt="" />
        </a>
        <div className="w-[630px] h-[672px] pl-[110px] pt-[258px]">
          <h1 className="text-[32px] font-normal">We sell direct.</h1>
          <p className="mt-6 font-normal text-base text-[#AAAAAA] w-[311px]">
            We make extra room in the budget without compromising quality by
            selling direct. No middle man, and no additional construction
            required.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Well_sell;
