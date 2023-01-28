import React from "react";
import "./CheckJobs.css";
import "bootstrap/dist/css/bootstrap.css";

function CheckJobs() {
  return (
    <div className=" d-flex check_jobs my-10">
      <h1 className="check_jobs_heading">WANT TO JOIN OUR GROWING TEAM?</h1>
      <div>
        <button className="py-2 px-6 bg-transparent text-white font-semibold border border-red-600 rounded hover:bg-white hover:text-black hover:border-transparent transition ease-in duration-200">
          CHECK OUT OUR JOBS
        </button>
      </div>
    </div>
  );
}

export default CheckJobs;
