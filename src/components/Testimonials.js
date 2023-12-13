import ratings from "../assets/icons/rating.png";
import profile1 from "../assets/images/profile1.jpg";
import profile2 from "../assets/images/profile2.jpg";
import profile3 from "../assets/images/profile3.jpg";
import profile4 from "../assets/images/profile4.jpg";

function Testimonials() {
  return (
    <>
      <div className="flex flex-col gap-5 justify-center bg-[#495e57] p-5">
        <h3 className="text-xl font-bold text-white">Testimonials</h3>
        <div className="flex gap-5">
          <div className="flex flex-col gap-5 bg-white p-5">
            <img src={ratings} alt="rating" />
            <img src={profile1} alt="profile of reviewer" />
            <h2>Jonny Johns</h2>
            <p>Review goes here</p>
          </div>
          <div className="flex flex-col gap-5 bg-white p-5">
            <img src={ratings} alt="rating" />
            <img src={profile2} alt="profile of reviewer" />
            <h2>Jonny Johns</h2>
            <p>Review goes here</p>
          </div>

          <div className="flex flex-col gap-5 bg-white p-5">
            <img src={ratings} alt="rating" />
            <img src={profile3} alt="profile of reviewer" />
            <h2>Jonny Johns</h2>
            <p>Review goes here</p>
          </div>

          <div className="flex flex-col gap-5 bg-white p-5">
            <img src={ratings} alt="rating" />
            <img src={profile4} alt="profile of reviewer" />
            <h2>Jonny Johns</h2>
            <p>Review goes here</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
