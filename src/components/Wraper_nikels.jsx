import { Google, Nike, Nisa, Salefroce, Uber, Walmal } from "../Constantas";

const Wraper_nikels = () => {
  return (
    <div className="w-full h-[560px] flex items-center justify-center mt-40">
      <div className="w-[1300px] flex items-center  flex-col gap-4 h-[560px]">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-medium text-center">
            The world`s leading brands choose ROOM.
          </h1>
          <p className="text-2xl font-normal text-[4A4A4A] mt-8 text-center">
            Over 3,000 and counting.
          </p>
        </div>
        <div className="flex gap-12 flex-col w-[1200px] pl-12 pr-10 h-[327px]   mt-20">
          <ul className="flex justify-center gap-20">
            <li>
              <a href="#">
                <Nike />
              </a>
            </li>
            <li>
              <a href="#">
                <Nisa />
              </a>
            </li>
            <li>
              <a href="#">
                <Google />
              </a>
            </li>
            <li>
              <a href="#">
                <Uber />
              </a>
            </li>
            <li>
              <a href="">
                <Walmal />
              </a>
            </li>
            <li>
              <a href="#">
                <Salefroce />
              </a>
            </li>
          </ul>
          <ul className="flex justify-center gap-20">
            <li>
              <a href="#">
                <Nike />
              </a>
            </li>
            <li>
              <a href="#">
                <Nisa />
              </a>
            </li>
            <li>
              <a href="#">
                <Google />
              </a>
            </li>
            <li>
              <a href="#">
                <Uber />
              </a>
            </li>
            <li>
              <a href="">
                <Walmal />
              </a>
            </li>
            <li>
              <a href="#">
                <Salefroce />
              </a>
            </li>
          </ul>
          <ul className="flex justify-center gap-20">
            <li>
              <a href="#">
                <Nike />
              </a>
            </li>
            <li>
              <a href="#">
                <Nisa />
              </a>
            </li>
            <li>
              <a href="#">
                <Google />
              </a>
            </li>
            <li>
              <a href="#">
                <Uber />
              </a>
            </li>
            <li>
              <a href="">
                <Walmal />
              </a>
            </li>
            <li>
              <a href="#">
                <Salefroce />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Wraper_nikels;
