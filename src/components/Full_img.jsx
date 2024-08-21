import img from "../assets/full_img.png";

const Full_img = () => {
  return (
    <div className="w-full h-[700px] flex items-center justify-center mt-80">
      <div className="w-[1350px] h-[700px] flex items-center justify-center">
        <a href="#">
          <img className="w-[1300px]" src={img} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Full_img;
