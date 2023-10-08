import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Result(){
    return(
        <div>
        <Navbar/>
        <div className="mb-5 ">
            <div className="d-flex flex-column p-5 mb-5" style={{backgroundColor:"#D9D9D9", boxShadow:"0px 0px 8px 1px rgba(0, 0, 0, 0.45)"}}>
                  <div className="h4 m-3 d-flex mb-5 justify-content-center">Ongoing Hackathons</div>
                  <div className="d-flex justify-content-center mb-5">
                    <div className="d-flex p-5 me-5  text-white" style={{backgroundColor:"#4AA7C0", boxShadow:"0px 0px 8px 1px rgba(0, 0, 0, 0.2)" }}>Hackathon 1</div>
                    <div className="d-flex p-5 me-5 ms-5 text-white" style={{backgroundColor:"#4AA7C0", boxShadow:"0px 0px 8px 1px rgba(0, 0, 0, 0.2)" }}>Hackathon 2</div>
                    <div className="d-flex p-5 ms-5 text-white" style={{backgroundColor:"#4AA7C0", boxShadow:"0px 0px 8px 1px rgba(0, 0, 0, 0.2)" }}>Hackathon 3</div>
                  </div>
            </div>
            <div className="d-flex flex-column">
                  <div className="d-flex justify-content-center mt-5 h4">Completed Hackathons</div>
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="container p-4 text-white h5 m-3" style={{backgroundColor:"#B98D8D", boxShadow:"0px 0px 8px 1px rgba(0, 0, 0, 0.2)" }}>Hackathon 1</div>
                    <div className="container p-4 text-white h5 m-3" style={{backgroundColor:"#B98D8D", boxShadow:"0px 0px 8px 1px rgba(0, 0, 0, 0.2)" }}>Hackathon 2</div>
                    <div className="container p-4 text-white h5 m-3" style={{backgroundColor:"#B98D8D", boxShadow:"0px 0px 8px 1px rgba(0, 0, 0, 0.2)" }}>Hackathon 3</div>
                  </div>
            </div>
        </div>
        <Footer/>
        </div>
    )
}