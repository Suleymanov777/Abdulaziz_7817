import { Fore, Tele, Timer } from "../Constantas";

const Modul_product = () => {
  return (
    <div className="w-full h-[655px] mt-72 flex items-center justify-center">
      <div
        className="w-[1300px] 
       h-[655px]"
      >
        <div className="flex items-center justify-center">
          <div className="w-[1090px] flex  justify-center flex-col h-[216px]  -mt-12">
            <h1 className="text-5xl font-normal mb-4">
              Our simple and seamless modular products allow teams to shape and
              then reshape their work environment with ease.
            </h1>
            <a className="text-base text-[#46856E]" href="#">
              GET IN TOUCH
            </a>
          </div>
        </div>
        <div className="w-[1300px] h-[340px]  mt-12">
          <ul className="flex justify-center items-center gap-10">
            <li className="w-[323px] h-[340px] ">
              <div className="flex justify-center">
                <a className="" href="#">
                  <Tele />
                </a>
              </div>
              <h1 className="text-2xl font-normal mt-10">Cost-effective</h1>
              <p className="text-[#AAAAAA] text-base font-normal mt-2">
                At a fraction of the cost of traditional construction, our
                pre-fab solutions create additional space for focused work and
                collaboration without constant noise, debris and distraction.
              </p>
            </li>
            <li className="w-[323px] h-[340px] ">
              <div className="flex justify-center ">
                <a className="-mt-1" href="#">
                  <Timer />
                </a>
              </div>
              <h1 className="text-2xl font-normal mt-10">Time Saving</h1>
              <p className="text-[#AAAAAA] text-base font-normal mt-2">
                Thoughtful design ensures simple installation in a few hours or
                less. And, because our products are safety ensured, you`ll never
                have to spend time or money chasing after permits, contractors,
                and more.
              </p>
            </li>
            <li className="w-[323px] h-[340px] 0">
              <div className="flex justify-center">
                <a className="" href="#">
                  <Fore />
                </a>
              </div>
              <h1 className="text-2xl font-normal mt-10">Flexible</h1>
              <p className="text-[#AAAAAA] text-base font-normal mt-2">
                Unlike traditional construction, our purpose-built products were
                designed to adapt with your workspace and can easily be
                positioned in various places throughout your office, or to an
                entirely new location.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Modul_product;
