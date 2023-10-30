import { useState, useEffect } from "react";
import vrGlasses from "../assests/images/VRGlasses.png";
import google from "../assests/images/google.png";
import microsoft from "../assests/images/microsoft.png";
import ola from "../assests/images/ola.png";
import fedex from "../assests/images/fedex.png";
import fedx from "../assests/images/fedx.png";
import amazon from "../assests/images/amazon.png";
import walmart from "../assests/images/walmart.png";
import incedologo from "../assests/images/incedo-logo.png"
import Poster from "../assests/images/Poster.png";
import { useNavigate } from "react-router";
import bgImage from "../assests/images/pexels-alexander-kovalev-2847648.jpg"
import "../assests/css/Home.css"

 



const Home = ({user,setUser}) => {
  const divStyle = {
    backgroundImage: `url(${bgImage})`, // Adjust the path to your image
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    boxShadow:"0px 1px 2px 1px rgba(0, 0, 0, 0.25)"
   
     // Optional, for a fixed background
  };
  
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };
  const targetDate = "2023-11-09T10:00:00";
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const { days, hours, minutes, seconds } = timeLeft;
 
  var navigate =  useNavigate();
   function HandleGetStarted(){
    if(user){
         navigate("/teamdetail")
    }
    else {
      navigate("/reg2")
    }
   }
  return (
    <div>
      
      <div
        className="container-fluid body-store  d-flex row m-0 pb-5"
       
      >
        <div
          className="col-5 d-flex mt-5 flex-column "
          style={{ paddingLeft: "160px" }}
        >
          <div className="mb-2 h5 d-flex ">
            <img src={incedologo} height="30px"/>
          </div>
          <div className="mb-3 h5 d-flex ">PRESENTS</div>
          <div className=" display-5 d-flex " style={{ fontWeight: "bold" }}>
            Hackathon 2023
          </div>
        
          <div className="mb-2 text-left d-flex ">
            The 4th iteration of Incedo Hackathon, Hackathon 2023 welcomes
            you!
          </div>
          <button
            className="mb-2 mt-5 btn btn-lg text-white col-5"
            style={{ backgroundColor: "#ef4815", boxShadow:"0px 0px 8px 1px rgba(0, 0, 0, 0.2)" }}
            onClick={HandleGetStarted}
          >
            Get Started
          </button>
        </div>
        <div className="  col-7 position-relative p-0">
          <img
            src={vrGlasses}
            className="img-fluid"
            alt="VR Glasses"
          />
          <div
            className="display-3   text-white"
            style={{
              position: "absolute",
              top: "30%",
              left: "20%",
              fontWeight: "bold",
            }}
          >
            {`${days}` +
              " : " +
              `${hours}` +
              " : " +
              `${minutes}` +
              " : " +
              `${seconds}`}
          </div>
          <pre
            className="  h5  text-white"
            style={{ position: "absolute", top: "50%", left: "23%" }}
          >
            days     hours      minutes   seconds
          </pre>
        </div>
      </div>

      <div className="p-5 d-flex justify-content-center" >
        <img src={Poster}/>
      </div>

      <div
        className="container-fluid pb-5"
        style={{ backgroundColor: "#F4F4F4", boxShadow:"0px 0px 8px 1px rgba(0, 0, 0, 0.2)" }}
      >
        <div className="text-center mb-5 h1 pt-4">Meet Our Sponsors</div>
        <div>
          <div className="d-flex justify-content-center mb-5">
            <div
              className="p-4 rounded-top-1 me-5"
              style={{ backgroundColor: "#E4E4E4", boxShadow:"0px 0px 8px 1px rgba(0, 0, 0, 0.2)" }}
            >
              <img src={google} height="40px" />
            </div>

            <div
              className="p-4 rounded-top-1 me-5"
              style={{ backgroundColor: "#E4E4E4", boxShadow:"0px 0px 8px 1px rgba(0, 0, 0, 0.2)" }}
            >
              <img src={ola} height="40px" />
            </div>

            <div
              className="p-4 rounded-top-1 me-5"
              style={{ backgroundColor: "#E4E4E4", boxShadow:"0px 0px 8px 1px rgba(0, 0, 0, 0.2)" }}
            >
              <img src={fedex} height="40px" />
            </div>

            <div
              className="p-4 rounded-top-1"
              style={{ backgroundColor: "#E4E4E4", boxShadow:"0px 0px 8px 1px rgba(0, 0, 0, 0.2)" }}
            >
              <img src={microsoft} height="40px" />
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <div
              className="p-4 rounded-top-1 me-5"
              style={{ backgroundColor: "#E4E4E4", boxShadow:"0px 0px 8px 1px rgba(0, 0, 0, 0.2)" }}
            >
              <img src={walmart} height="40px" />
            </div>

            <div
              className="p-4 rounded-top-1 me-5"
              style={{ backgroundColor: "#E4E4E4", boxShadow:"0px 0px 8px 1px rgba(0, 0, 0, 0.2)" }}
            >
              <img src={amazon} height="40px" />
            </div>
            <div
              className="p-4 rounded-top-1 me-5"
              style={{ backgroundColor: "#E4E4E4", boxShadow:"0px 0px 8px 1px rgba(0, 0, 0, 0.2)" }}
            >
              <img src={fedx} height="40px" />
            </div>
          </div>
        </div>
      </div>

      <div className="p-5">
        <div className="h1 text-center mb-3">
          What is incedo Hackathon 2023?
        </div>
        <div className="mb-3">
          Hackathon 2023  is an initiative in sync with the vision of incedo,
          towards providing a mega platform to the programming community,
          technophiles and techpreneurs to address the critical challenges of
          the industry and society by building innovative solutions in form of
          prototypes leveraging technologies under the umbrella of incedo.
        </div>

        <div>
          Hackathon 2023 is a 96 hour coding marathon planning to invite
          participants from G20 Nations and our associate International
          Universities to come together and participate in developing solutions
          towards achieving UN SDG goals leveraging the emerging technologies
          and technologies of tomorrow i.e, Metaverse Technologies.
        </div>
      </div>

      <div className="p-5">
        <div className="h1 text-center">Our History</div>
        <div>
          First Hackathon  was held on 5th and 6th August 2019. The event witnessed
          participation from SAARC Nations as well. The event was applauded by
          Honorable Prime Minister Of India, Shri Narendra Modi.
        </div>
        <div>
          The first version of the event - “Hackathon 1.0” was organized in May,
          2019, which attracted student participation from 10 states of the
          country. The hackathon was unique in its concept to have problem
          statements from more than 20 esteemed organizations from government
          and private sectors. Participants also got the opportunities to get
          internships with the associate organizations. The second version -
          Hackathon 2.0 was held in February ‘2020. It was a big success whose
          grand finale witnessed the participation of more than 50 teams from 11
          states of the country. Winners received the prizes worth INR 10 lac.
          Three outstanding teams from the hackathon were chosen for the
          opportunity of participation in IEEE International Hackathon- YESIST,
           held in Malaysia in 2020. Few participants also got the
          opportunity of internships with the industry associates.
        </div>
        <div>
          After the success of Hackathon 1.0, 2.0 & 3.0 
           is back with the 4th edition of incedo s Flagship event
          Hackathon 2023 to be held on 1st and 2nd September 2023. 
        </div>
      </div>
        
    </div>
  );
};

export default Home;
