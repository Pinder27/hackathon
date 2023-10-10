import Navbar from "./Navbar";
import landscapeImage from "../assests/images/landscapeImage.png"
import Footer from "./Footer";

export default function Contact() {
    return (
        <>
            <Navbar />

            <div className="d-flex p-5 ms-5 mb-5">
                <div className="container-sm-6 flex-fill ms-5">
                    <div className="h1">Get in Touch</div>
                    <div className=" d-flex flex-column">
                        <div className="input-group mb-2 flex-fill ">
                            <input className="form-control" placeholder="your name" />
                        </div>
                        <div className="input-group mb-2 ">
                            <input className="form-control" placeholder="Email" />
                        </div>
                        <div className="input-group mb-2 ">
                            <input className="form-control" placeholder="Subject" />
                        </div>
                        <div className="input-group mb-2 ">
                            <input className="form-control" placeholder="your Message" />
                        </div>

                        <button className="btn text-white" style={{ backgroundColor: "#ef4815", }}>send mesage</button>
                    </div>
                </div>
                <div className="container-sm-6 flex-fill d-flex justify-content-center align-items-center mt-5">
                    <img src={landscapeImage} height="230" />
                </div>
            </div>
            <Footer />
        </>
    )
}