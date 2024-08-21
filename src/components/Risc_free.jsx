import { Filebox, Player, Socker } from "../Constantas";

const Risc_free = () => {
  return (
    <div className="w-full h-[465px] mt-80 flex items-center justify-center">
      <div className="w-[1300px] flex  justify-center rounded-sm h-[465px] bg-[#F2F2F2]">
        <div className="">
          <h1 className="text-5xl font-medium mt-14 text-center">
            100 day risk-free trial
          </h1>
          <ul className="flex items-center justify-center mt-14 gap-16">
            <li className="w-[300px] h-[150px]  flex flex-col items-center justify-center">
              <div className="mr-3">
                <a href="#">
                  <Socker />
                </a>
              </div>
              <p className="text-sm text-[1A1A1A] font-medium  mt-3">
                FREE SHIPPING
              </p>
            </li>
            <li className="w-[300px] h-[150px]  flex flex-col items-center justify-center">
              <div className="">
                <a href="#">
                  <Player />
                </a>
              </div>
              <p className="text-sm text-[1A1A1A] font-medium  mt-3">
                PLUG & PLAY
              </p>
            </li>
            <li className="w-[300px] h-[150px]  flex flex-col items-center justify-center">
              <div className="ml-1">
                <a href="#">
                  <Filebox />
                </a>
              </div>
              <p className="text-sm text-[1A1A1A] font-medium  mt-3">
                FREE RETURNS
              </p>
            </li>
          </ul>
          <div className="flex items-center flex-col justify-center mt-10">
            <button className="w-36 h-12 rounded bg-[#46856E] flex items-center justify-center">
              <p className="text-xs font-medium text-white">GET A ROOM</p>
            </button>
            <p className="text-xs text-[#AAAAAA] font-normal mt-6">
              Terms & Conditions apply
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Risc_free;
