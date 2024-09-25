import "./LeftBar.scss";
import Friends from "../../assets/friends.png";
import Groups from "../../assets/people.png";
import Market from "../../assets/market.png";
import Watch from "../../assets/watch.png";
import Memories from "../../assets/memories.png";
import Events from "../../assets/event.png";
import Gaming from "../../assets/gaming.png";
import Gallery from "../../assets/gallery.png";
import Videos from "../../assets/video.png";
import Messages from "../../assets/comments.png";
import Tutorials from "../../assets/tutorials.png";
import Courses from "../../assets/courses.png";
import Funds from "../../assets/funds.png";
import { Group } from "@mui/icons-material";

const LeftBar = () => {
  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              src="https://media.gettyimages.com/id/1490484744/photo/new-york-new-york-john-cena-attends-a-conversation-with-josh-horowitz-for-fast-x-at-the-92nd.jpg?s=612x612&w=0&k=20&c=lG-kd8J7K47ZgDuPN8DF1ZXKKwcwxmjs-qtO7ruXzjI="
              alt=""
            />
            <span>John Cena</span>
          </div>

          <div className="item">
            <img src={Friends} alt="" />
            <span>Friends</span>
          </div>

          <div className="item">
            <img src={Groups} alt="" />
            <span>Groups</span>
          </div>

          <div className="item">
            <img src={Market} alt="" />
            <span>Marketplace</span>
          </div>

          <div className="item">
            <img src={Watch} alt="" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Memories} alt="" />
            <span>Memories</span>
          </div>
        </div>

        <hr />
        <div className="menu">
          <span>Your Shorcuts</span>
          <div className="item">
            <img src={Events} alt="" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={Gaming} alt="" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Videos} alt="" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={Messages} alt="" />
            <span>Messages</span>
          </div>
        </div>

        <hr/>
        <div className="menu">
          <span>Others</span>

          <div className="item">
            <img src={Tutorials} alt="" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={Courses} alt="" />
            <span>Courses</span>
          </div>
          <div className="item">
            <img src={Funds} alt="" />
            <span>Funds</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LeftBar;
