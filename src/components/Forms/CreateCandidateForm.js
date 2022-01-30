import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
// import { createPlanRequest, clearCreatePlanSuccess } from "../../redux/action";
import toast from "react-hot-toast";
import { RegisterButton } from "../Button";

export const CreateCandidateForm = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  const { createPlanSuccess, createPlanError, createPlanLoading, user } =
    useSelector((state) => {
      const {
        success: { createPlan: createPlanSuccess },
        errors: { createPlan: createPlanError },
      } = state.ajaxStatuses;

      const { createPlanLoading } = state.loadingIndicator;

      const { user } = state.userData;

      return {
        createPlanSuccess,
        createPlanError,
        createPlanLoading,
        user,
      };
    });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      department: "",
      faculty: "",
      imgUrl: "",
    },
    validationSchema: yup.object({
      fullName: yup.string().required("Field is required"),
      department: yup.string().required("Field is required"),
      faculty: yup.string().required("Field is required"),
      imgUrl: yup.string().required("Field is required"),
    }),

    onSubmit: (prop) => {
      console.log(prop);

      //   dispatch(createPlanRequest(prop));
    },
  });

  useEffect(() => {
    if (createPlanError) {
      toast.error(createPlanError, {
        duration: 4000,
      });
    }
  }, [createPlanError]);

  useEffect(() => {
    if (createPlanSuccess) {
      toast.success(createPlanSuccess, {
        duration: 4000,
      });

      history.push("/dashboard");

      //   dispatch(clearCreatePlanSuccess());
    }
  }, [createPlanSuccess]);

  return (
    <div className="rounded-xl shadow  mx-auto max-w-screen-sm p-6 mt-5">
      <h1 className="text-2xl">Create Candidate</h1>
      <form onSubmit={formik.handleSubmit} className="">
        <div className="mt-5">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Full Name
          </label>
          <input
            type="text"
            className=" w-full py-2 px-4 rounded-md bg-gray-50 border focus:outline-none    placeholder-gray-200::placeholder placeholder-opacity-75 "
            placeholder="Plan name"
            name="planName"
            {...formik.getFieldProps("fullName")}
          />
        </div>
        <div className="mt-5">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Department
          </label>
          <input
            type="Number"
            className=" w-full py-2 px-4 rounded-md bg-gray-50 border focus:outline-none    placeholder-gray-200::placeholder placeholder-opacity-75 "
            placeholder="department"
            name="department"
            {...formik.getFieldProps("department")}
          />
        </div>
        <div className="mt-5">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Faculty
          </label>
          <input
            type="Text"
            className=" w-full py-2 px-4 rounded-md bg-gray-50 border focus:outline-none    placeholder-gray-200::placeholder placeholder-opacity-75 "
            placeholder="faculty"
            name="faculty"
            {...formik.getFieldProps("faculty")}
          />
        </div>

        <div className="mt-5">
          <RegisterButton
            loading={false}
            disable={!(formik.dirty && formik.isValid)}
            action={formik.handleSubmit}
            text="Create plan"
          />
        </div>
      </form>
    </div>
  );
};
