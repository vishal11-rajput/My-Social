import "./NavBar.scss"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import PersonIcon from '@mui/icons-material/Person';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";

const NavBar = () =>{

    return(
        <div className="navbar">
           <div className="left" >
            <Link to="/" style={{textDecoration : "none"}}> 
            <span>My Social</span> 
            </Link>
            <HomeOutlinedIcon />
            <DarkModeOutlinedIcon />
            <AppsOutlinedIcon />
            <div className="search">
                <SearchOutlinedIcon />
                <input type="text" placeholder="Search..." />
            </div>

           </div>
           <div className="right">
            <PersonIcon />
            <EmailOutlinedIcon />
            <NotificationsNoneOutlinedIcon />
            <div className="user">
                <img src="https://media.gettyimages.com/id/1490484744/photo/new-york-new-york-john-cena-attends-a-conversation-with-josh-horowitz-for-fast-x-at-the-92nd.jpg?s=612x612&w=0&k=20&c=lG-kd8J7K47ZgDuPN8DF1ZXKKwcwxmjs-qtO7ruXzjI=" alt="" />
                <span>John Cena</span>
            </div>
           </div>
        </div>
    )
}

export default NavBar