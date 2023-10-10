import Footer from "./Footer";
import Navbar from "./Navbar";

export default function GuideLines() {
  return (
    <div>
      <Navbar />
      <div></div>
      <div>
        <section className="mb-5 mt-5">
          <div className="container-md mb-2 h5">1. Dates and Timing</div>
          <div className="container-md">
            Submission Period: August 15th, 2023 (10:00 am Eastern Time) –
            October 10th, 2023 (3:00 pm Eastern Time) (“Submission Period”).
            Feedback Period: August 15th, 2023 (10:00 am Eastern Time) – October
            15th (3:00 pm Eastern Time) (“Feedback Period”). Judging Period:
            October 16th, 2023 (10:00 am Eastern Time) – October 23rd, 2023
            (5:00 pm Eastern Time) (“Judging Period”). Winners Announced: On or
            around October 27th, 2023 (3:00 pm Eastern Time).
          </div>
        </section>
        <section className="mb-5">
          <div className="container-md mb-2 h5">REQUIREMENTS WHAT TO BUILD</div>
          <div className="container-md mb-2">
            Entrants must create a (or update an existing) software prototype or
            application that uses Dropbox Sign API and any publicly available AI
            technology to revolutionize how agreements get signed.
          </div>
        </section>
        <section className="mb-5">
          <div className="container-md mb-2 h5">3. Eligibility</div>
          <div className="container-md mb-2">
            The Hackathon IS open to: Individuals who are at least the age of 18
            at the time of entry (“Eligible Individuals”); Teams of Eligible
            Individuals (“Teams”); and Organizations (including corporations,
            not-for-profit corporations and other nonprofit organizations,
            limited liability companies, partnerships, and other legal entities)
            that exist and have been organized or incorporated at the time of
            entry (the above are collectively, “Entrants”) An Eligible
            Individual may join more than one Team or Organization and an
            Eligible Individual who is part of a Team or Organization may also
            enter the Hackathon on an individual basis. If a Team or
            Organization is entering the Hackathon, they must appoint and
            authorize one individual (the “Representative”) to represent, act,
            and enter a Submission (defined below), on their behalf. By entering
            a Submission on behalf of a Team or Organization you represent and
            warrant that you are the Representative authorized to act on behalf
            of your Team or Organization.
          </div>
        </section>
        <section className="mb-5">
          <div className="container-md mb-2 h5">4. How To Enter</div>
          <div className="container-md mb-2">
            Entrants may enter by visiting dropboxhackathon2023.devpost.com
            (“Hackathon Website”) and following the below steps:
            <p> 1. Register for
              the Hackathon on the Hackathon Website by clicking the “Join
              Hackathon” button. To complete registration, sign up to create a
              free Devpost account, or log in with an existing Devpost account.
              This will enable you to receive important updates and to create your
              Submission.</p>
            <p> 2. Entrants will obtain access to the required developer
              tools/platform and complete a Project described below in Project
              Requirements. Use of the developer tools will be subject to the
              license agreement related thereto. Entry in the Hackathon
              constitutes consent for the Sponsor and Devpost to collect and
              maintain an Entrant’s personal information for the purpose of
              operating and publicizing the Hackathon.</p>
            <p>
              3. Sign up for a free Test
              Mode DropboxSign account at https://app.hellosign.com/account/signUp
            </p>
            <p>
              4. To be considered for the Most Valuable Feedback Prizes, participants
              must be registered for the hackathon on Devpost, have started a
              project, and complete an online form (each a “Feedback Submission”).
              Feedback must be submitted during the Feedback Period. Participants
              who have begun a project must complete the survey with actionable
              comments, as determined by Sponsor, that Sponsor can use to improve
              the Dropbox Sign API or related documentation (for example, bug
              reports, user interface improvements, suggested integrations, and
              more). Each Entrant may submit only one (1) Feedback Submission.
            </p>
            <p>
              5. Create a video that includes footage that explains your project’s
              features and functionality through a comprehensive demonstration.
            </p>
            <p>
              6. Complete and enter all of the required fields on the “Enter a
              Submission” page of the Hackathon Website (each of the above,
              together with the Project as defined below, are collectively a
              “Submission”) during the Submission Period and follow the
              requirements below.
            </p>

          </div>
        </section>
        <section className="mb-5">
          <div className="container-md mb-2 h5">5.Prizes</div>
          <div className="container-md mb-2">
            <p>WinnerPrizeQuantityEligible Submissions</p>
            <p>1st Place    $9,000 USD1All Eligible Submissions</p>
            <p>2nd Place  $7,500 USD1All Eligible Submissions</p>
            <p>3rd Place   $5,000 USD1All Eligible Submissions</p>
            <p>Runners Up$2,000 USD3All Eligible Submissions</p>
            <p>Honorable Mentions$5003All Eligible SubmissionsFeedback Prizes Most Valuable Feedback$10010All Eligible Feedback Submissions</p>
          </div>
        </section>
      </div>
      <div className="d-flex justify-content-center mb-5 ">
        <button
          className="mb-2 mt-5 btn btn-lg text-white "
          style={{ backgroundColor: "#ef4815", boxShadow: "0px 0px 8px 1px rgba(0, 0, 0, 0.2)" }}
        >
          Apply Now
        </button>
      </div>

      <Footer />
    </div>
  );
}
