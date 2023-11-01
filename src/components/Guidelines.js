import { useNavigate } from "react-router";
import Footer from "./Footer";
import Navbar from "./Navbar";
import faq from "../assests/images/Faq2.jpg";

export default function GuideLines({ user, setUser }) {
  var navigate = useNavigate();

  function HandleApply(e) {
    e.preventDefault();
    if (user) {
      navigate("/teamdetail");
    } else {
      navigate("/reg2");
    }
  }
  return (
    <div className="d-flex p-5 " style={{ background: "#fff" }}>
      <div className="col-7">
        <div
          class="accordion m-5 me-5"
          id="accordionExample"
          style={{
            
            backgroundColor: "rgba(0,0,0,0)",
            borderWidth: "0px",
            marginRight: "50%",
          }}
        >
          <div
            class="accordion-item"
            style={{ backgroundColor: "rgba(0,0,0,0.1)" }}
          >
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={{ backgroundColor: "#d5f1ff96", fontWeight: "600" }}
              >
                What are the Dates and Timing ?
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show "
              data-bs-parent="#accordionExample"
              style={{ backgroundColor: "#d7c6e0", fontWeight: "600" }}
            >
              <div class="accordion-body">
                Submission Period: August 15th, 2023 (10:00 am Eastern Time) –
                October 10th, 2023 (3:00 pm Eastern Time) (“Submission Period”).
                Feedback Period: August 15th, 2023 (10:00 am Eastern Time) –
                October 15th (3:00 pm Eastern Time) (“Feedback Period”). Judging
                Period: October 16th, 2023 (10:00 am Eastern Time) – October
                23rd, 2023 (5:00 pm Eastern Time) (“Judging Period”). Winners
                Announced: On or around October 27th, 2023 (3:00 pm Eastern
                Time).
              </div>
            </div>
          </div>
          <div
            class="accordion-item"
            style={{ backgroundColor: "rgba(0,0,0,0.1)" }}
          >
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={{ backgroundColor: "#d5f1ff96", fontWeight: "600" }}
              >
                What are the requirements, What to build?
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse "
              data-bs-parent="#accordionExample"
              style={{ backgroundColor: "#d7c6e0", fontWeight: "600" }}
            >
              <div class="accordion-body">
                Entrants must create a (or update an existing) software
                prototype or application that uses Dropbox Sign API and any
                publicly available AI technology to revolutionize how agreements
                get signed.
              </div>
            </div>
          </div>
          <div
            class="accordion-item"
            style={{ backgroundColor: "rgba(0,0,0,0.1)" }}
          >
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={{ backgroundColor: "#d5f1ff96", fontWeight: "600" }}
              >
                what is the eligibility criteria?
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse "
              data-bs-parent="#accordionExample"
              style={{ backgroundColor: "#d7c6e0", fontWeight: "600" }}
            >
              <div class="accordion-body">
                The Hackathon IS open to: Individuals who are at least the age
                of 18 at the time of entry (“Eligible Individuals”); Teams of
                Eligible Individuals (“Teams”); and Organizations (including
                corporations, not-for-profit corporations and other nonprofit
                organizations, limited liability companies, partnerships, and
                other legal entities) that exist and have been organized or
                incorporated at the time of entry (the above are collectively,
                “Entrants”) An Eligible Individual may join more than one Team
                or Organization and an Eligible Individual who is part of a Team
                or Organization may also enter the Hackathon on an individual
                basis. If a Team or Organization is entering the Hackathon, they
                must appoint and authorize one individual (the “Representative”)
                to represent, act, and enter a Submission (defined below), on
                their behalf. By entering a Submission on behalf of a Team or
                Organization you represent and warrant that you are the
                Representative authorized to act on behalf of your Team or
                Organization.
              </div>
            </div>
          </div>
          <div
            class="accordion-item"
            style={{ backgroundColor: "rgba(0,0,0,0.1)" }}
          >
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse3"
                aria-expanded="false"
                aria-controls="collapse3"
                style={{ backgroundColor: "#d5f1ff96", fontWeight: "600" }}
              >
                How To Enter?
              </button>
            </h2>
            <div
              id="collapse3"
              class="accordion-collapse collapse "
              data-bs-parent="#accordionExample"
              style={{ backgroundColor: "#d7c6e0", fontWeight: "600" }}
            >
              <div class="accordion-body">
                Entrants may enter by visiting dropboxhackathon2023.devpost.com
                (“Hackathon Website”) and following the below steps:
                <p>
                  {" "}
                  1. Register for the Hackathon on the Hackathon Website by
                  clicking the “Join Hackathon” button. To complete
                  registration, sign up to create a free  account, or log
                  in with an existing  account. This will enable you to
                  receive important updates and to create your Submission.
                </p>
                <p>
                  {" "}
                  2. Once registered you can create team by clicking on getStarted button on home paage
                   ,every team member need to be registered to participate in event, after submiting team details
                   you have to submit idea details, then you can view the team and idea in your dashboard ,remember only leader of
                   team can edit the details.
                </p>
                <p>
                  3. you need to upload pdf file on any cloud platform like google drive ,and 
                  you need to put the drive link in idea form
                </p>
                <p>
                  4. To be considered for the Most Valuable Feedback Prizes,
                  participants must be registered for the hackathon on Devpost,
                  have started a project, and complete an online form (each a
                  “Feedback Submission”). Feedback must be submitted during the
                  Feedback Period. Participants who have begun a project must
                  complete the survey with actionable comments, as determined by
                  Sponsor, that Sponsor can use to improve the Dropbox Sign API
                  or related documentation (for example, bug reports, user
                  interface improvements, suggested integrations, and more).
                  Each Entrant may submit only one (1) Feedback Submission.
                </p>
                <p>
                  5. Create a video that includes footage that explains your
                  project’s features and functionality through a comprehensive
                  demonstration.
                </p>
                <p>
                  6. Complete and enter all of the required fields on the “Enter
                  a Submission” page of the Hackathon Website (each of the
                  above, together with the Project as defined below, are
                  collectively a “Submission”) during the Submission Period and
                  follow the requirements below.
                </p>
              </div>
            </div>
          </div>
          <div
            class="accordion-item"
            style={{ backgroundColor: "rgba(0,0,0,0.1)" }}
          >
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse4"
                aria-expanded="false"
                aria-controls="collapse4"
                style={{ backgroundColor: "#d5f1ff96", fontWeight: "600" }}
              >
                what are the Prizes?
              </button>
            </h2>
            <div
              id="collapse4"
              class="accordion-collapse collapse "
              data-bs-parent="#accordionExample"
              style={{ backgroundColor: "#d7c6e0", fontWeight: "600" }}
            >
              <div class="accordion-body">
                <p>WinnerPrizeQuantityEligible Submissions</p>
                <p>1st Place $9,000 USD1All Eligible Submissions</p>
                <p>2nd Place $7,500 USD1All Eligible Submissions</p>
                <p>3rd Place $5,000 USD1All Eligible Submissions</p>
                <p>Runners Up$2,000 USD3All Eligible Submissions</p>
                <p>
                  Honorable Mentions$5003All Eligible SubmissionsFeedback Prizes
                  Most Valuable Feedback$10010All Eligible Feedback Submissions
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center mb-5 ">
          <button
            className="mb-2 mt-5 btn btn-lg  text-white "
            style={{
              backgroundColor: "#ef4815",
              boxShadow: "0px 0px 8px 1px rgba(0, 0, 0, 0.2)",
            }}
            onClick={HandleApply}
          >
            Apply Now
          </button>
        </div>
      </div>
      <div className="col-5">
        <img src={faq} height="300vh" className="mt-5" />
      </div>
    </div>
  );
}
