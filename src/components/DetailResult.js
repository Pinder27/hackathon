import bgImage from "../assests/images/pexels-alexander-kovalev-2847648.jpg";
export default function DetailResult(){
    const divStyle = {
        backgroundImage: `url(${bgImage})`, // Adjust the path to your image
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
         // Optional, for a fixed background
      };
    const teams = [
        {
            name:"hackathons",
            idea:"ML OS"
        },
        {
            name:"Nortons",
            idea:"finance app"
        },  {
            name:"Avastas",
            idea:"VM ware"
        },  {
            name:"Posideions",
            idea:"Protocoling system"
        },
    ]
    var i = 1;
    return(
        <div className="p-5" style={{background:"linear-gradient(315deg, rgb(13 100 189) 0%, rgb(28 233 220) 100%) 100%"}}>
            <div className=" mt-4 h4">Hackathon 2023</div>
            <div className="mx-5" >
                <div className="ms-5 h5 mt-5">Round 1 Qualified Teams</div>
                <div  className="mx-5 mb-5 p-4" style={{backgroundColor:"#F4F4F4", boxShadow:"0px 0px 8px 1px rgba(0, 0, 0, 0.2)" }}>
                      <div className="d-flex mb-3 mx-3 p-2 justify-content-between" style={{backgroundColor:"#BD8690",boxShadow:"0px 0px 8px 1px rgba(0, 0, 0, 0.2)"}}>
                             <div className="col text-center" style={{fontWeight:"600"}}>Team Name</div>
                             <div className="col text-center" style={{fontWeight:"600"}}>Rank</div>
                             <div className="col text-center" style={{fontWeight:"600"}}>Rating</div>
                      </div>
                      <div className="">
                      {teams.map((team)=>{
                                return( <div className="mb-3  mx-3 p-2  d-flex justify-content-between" style={{backgroundColor:"#C3ACAC", boxShadow:"0px 0px 8px 1px rgba(0, 0, 0, 0.2)" }} >
                                     <div className="col text-center" style={{fontWeight:"500"}}>{team.name}</div>
                                     <div className="col text-center" style={{fontWeight:"500"}}>{i++}</div>
                                     <div className="col text-center"  style={{fontWeight:"500"}}>{team.idea}</div>
                                </div>)
                             })}
                             </div>
                </div>
            </div>
        </div>
    )
}