import React from "react";
import { CreateCandidateForm } from "../../../components/Forms/CreateCandidateForm";
import { AuthNav } from "../../../components/Navbar/Navbar";

const CreateCandidate = () => {
  return (
    <div className="flex flex-col h-screen">
      <AuthNav />
      <div className="container mx-auto max-w-screen-xl flex-grow">
        <h1 className="text-xl font-medium mt-4 mb-1">Create Candidate</h1>

        <CreateCandidateForm />
      </div>
    </div>
  );
};

export default CreateCandidate;
