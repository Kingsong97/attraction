import { AiFillGithub } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { ImBlogger2 } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";

// import { ImYoutube2 } from "react-icons/im";
import { CgGym } from "react-icons/cg";
import { GiGymBag } from "react-icons/gi";
import { GiLeg } from "react-icons/gi";
import { GiStrongMan } from "react-icons/gi";
import { MdOutlineSportsGymnastics } from "react-icons/md";
import { GiStrong } from "react-icons/gi";
import { AiFillYoutube } from "react-icons/ai";

export const headerMenu = [
    {
        title: "홈",
        icon: <CgGym />,
        src: "/search/home"
    },
    {
        title: "가슴",
        icon: <CgGym />,
        src: "/search/chest"
    },
    {
        title: "등",
        icon: <GiStrong />,
        src: "/search/back"
    },
    {
        title: "하체",
        icon: <GiLeg />,
        src: "/search/reg"
    },
    {
        title: "어깨",
        icon: <GiStrongMan />,
        src: "/search/sholder"
    },
    {
        title: "코어",
        icon: <MdOutlineSportsGymnastics />,
        src: "/search/core"
    },
    {
        title: "추천영양제",
        icon: <GiGymBag />,
        src: "/search/drug"
    },
    {
        title: "추천유튜버",
        icon: <AiFillYoutube />,
        src: "/search/youtuber"
    }
]

export const searchKeyword = [
    {
        title: "Bench_Press",
        src: "/search/Bench_Press"
    },
    {
        title: "Deadlift",
        src: "/search/Deadlift"
    },
    {
        title: "Squat",
        src: "/search/Squat"
    },
    {
        title: "Overhead_Press",
        src: "/search/Overhead_Press"
    },
    {
        title: "Pull_Up",
        src: "/search/Pull_Up"
    },
    {
        title: "Push_Up",
        src: "/search/Push_Up"
    },
    {
        title: "Crunch",
        src: "/search/Crunch"
    },
    {
        title: "Barbell_Curl",
        src: "/search/Barbell_Curl"
    },
    {
        title: "Dumbbell_Curl",
        src: "/search/Dumbbell_Curl"
    }
]

export const snsLink = [
    {
        title: "github",
        url: "https://github.com/kingsong97",
        icon: <AiFillGithub />
    },
    {
        title: "youtube",
        url: "https://github.com/kingsong97",
        icon: <FaYoutube />
    },
    {
        title: "blog",
        url: "https://github.com/kingsong97",
        icon: <ImBlogger2 />
    },
    {
        title: "instagram",
        url: "https://github.com/kingsong97",
        icon: <FaInstagram />
    },
]