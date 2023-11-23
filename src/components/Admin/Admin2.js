import { useState, useEffect } from "react";
import AdminNav from "./AdminNav";
import Dashboard from "./Dashboard";
import Idea from "./Idea";
import Judge from "./Judge";
import Panelist from "./Panelist";
import Role from "./Role";
import axios from "axios";
import userimage from "../../assests/images/user-3296 1.png";
import { useNavigate } from "react-router-dom";
export default function Admin2({ alert, userName, setUser }) {
  const navigate = useNavigate();
  const [activeBtn, setActiveBtn] = useState("dashboard");
  const [ideasList, setIdeaList] = useState([
    { title: "codeit", teamname: "codebusters" },
    { title: "codeit", teamname: "codebusters" },
    { title: "codeit", teamname: "codebusters" },
    { title: "codeit", teamname: "codebusters" },
    { title: "codeit", teamname: "codebusters" },
    { title: "codeit", teamname: "codebusters" },
    { title: "codeit", teamname: "codebusters" },
    { title: "codeit", teamname: "codebusters" },
    { title: "codeit", teamname: "codebusters" },
  ]);
  const [panelistList, setPanelistList] = useState([
    { id: 1, name: "Pinder", email: "pinder@gmail.com" },
    { id: 2, name: "Pinder", email: "pinder@gmail.com" },
    { id: 3, name: "Pinder", email: "pinder@gmail.com" },
    { id: 4, name: "Pinder", email: "pinder@gmail.com" },
    { id: 5, name: "Pinder", email: "pinder@gmail.com" },
    { id: 6, name: "Pinder", email: "pinder@gmail.com" },
  ]);
  const [judgeList, setJudgeList] = useState([
    { id: 1, name: "Pinder", email: "pinder@gmail.com" },
    { id: 2, name: "Pinder", email: "pinder@gmail.com" },
    { id: 3, name: "Pinder", email: "pinder@gmail.com" },
    { id: 4, name: "Pinder", email: "pinder@gmail.com" },
    { id: 5, name: "Pinder", email: "pinder@gmail.com" },
    { id: 6, name: "Pinder", email: "pinder@gmail.com" },
  ]);
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8087/admin/getPanelistsDetails",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => {
      console.log("panelist", res.data);
      setPanelistList(res.data);
    });
  }, []);
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8087/admin/getListOfAllJudges",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => {
      console.log("judges", res.data);
      setJudgeList(res.data);
    });
  }, []);
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8087/v1/api/ideas",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => {
      console.log("ideas", res.data);
      setIdeaList(res.data);
    });
  }, []);
  return (
    <div className="d-flex">
      <div
        className=" p-0"
        style={{ backgroundColor: "#1E0156", height: "100vh", width: "25vw" }}
      >
        <div className="text-center h4 text-white mt-2">ADMINDEK</div>
        <ul className=" mt-5 pe-4 mx-4 d-flex flex-column ">
          <button
            onClick={(e) => setActiveBtn("dashboard")}
            className={`btn fs-5 mb-1 text-white ${
              activeBtn === "dashboard" ? "active" : ""
            }`}
          >
            Dashboard
          </button>
          <button
            onClick={(e) => setActiveBtn("idea")}
            className={`btn fs-5 mb-1 text-white ${
              activeBtn === "idea" ? "active" : ""
            }`}
          >
            Idea
          </button>
          <button
            onClick={(e) => setActiveBtn("judge")}
            className={`btn fs-5 mb-1 text-white ${
              activeBtn === "judge" ? "active" : ""
            }`}
          >
            Judge
          </button>
          <button
            onClick={(e) => setActiveBtn("panelist")}
            className={`btn fs-5 mb-1 text-white ${
              activeBtn === "panelist" ? "active" : ""
            }`}
          >
            Panelist
          </button>
          <button
            onClick={(e) => setActiveBtn("role")}
            className={`btn fs-5 mb-1 text-white ${
              activeBtn === "role" ? "active" : ""
            }`}
          >
            Role
          </button>
        </ul>
      </div>
      <div className="p-0" style={{ width: "75vw", background: "#f2faff" }}>
        <div
          className="p-3 d-flex justify-content-end"
          style={{
            background: "#fff",
            boxShadow: "0px 0px 5px 1px rgba(0, 0, 0, 0.15)",
          }}
        >
          <div class="dropdown me-5">
            <div
              class="dropdown-toggle d-flex"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img src={userimage} height="30px" />
              <div className="ms-2">{userName}</div>
            </div>
            <ul class="dropdown-menu dropdown-menu-right">
              <li>
                <a
                  onClick={() => {
                    setUser(false);
                    localStorage.removeItem("token");
                    navigate("/");
                  }}
                  class="dropdown-item"
                  href="#"
                >
                  Log Out
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          {activeBtn === "dashboard" && (
            <Dashboard
              ideas={ideasList.length}
              panelists={panelistList.length}
              judges={judgeList.length}
              alert={alert}
            />
          )}
          {activeBtn === "idea" && <Idea ideasList={ideasList} alert={alert} />}
          {activeBtn === "judge" && (
            <Judge judgeList={judgeList} alert={alert} />
          )}
          {activeBtn === "panelist" && (
            <Panelist panelistList={panelistList} alert={alert} />
          )}
          {activeBtn === "role" && <Role alert={alert} />}
        </div>
      </div>
    </div>
  );
}
