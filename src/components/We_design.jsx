import img from "../assets/Desing.png";

const We_design = () => {
  return (
    <div className="w-full h-[672px] flex items-center justify-center mt-16">
      <div className="flex items-center justify-center w-[1300px] gap-[90px] -translate-x-2">
        <a href="#">
          <img className="w-[671px] rounded-sm h-[672px]" src={img} alt="" />
        </a>
        <div className="w-[630px] h-[672px] pl-[110px] pt-[258px]">
          <h1 className="text-[32px] font-normal w-[176px]">
            We design sustainably..
          </h1>
          <p className="mt-6 font-normal text-base text-[#AAAAAA] w-[315px]">
            From design to delivery, we strive to lessen our impact on the
            environment. Our products are engineered with recycled materials and
            replace multiple cycles of construction, minimizing noise and our
            footprint.
          </p>
        </div>
      </div>
    </div>
  );
};

export default We_design;
