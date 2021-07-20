import React from "react";
import { useForm } from "react-hook-form";

const AddBusiness = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    alert("Register Completed")
    console.log(data)};
  return (
    <div>
      <h3>Add your Business to our page and become berrybox partners</h3>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
          <form onSubmit={handleSubmit(onSubmit)}>
          <strong className="input-text mt-3">Business Name : </strong>
          <br />
          <input
            name="name"
            id="name"
            className="form-input "
            placeholder="Enter your Business name"
            ref={register({ required: true })}
          />{" "}
          <br />
          {errors.name && (
            <span className="text-danger">Name field is required</span>
          )}
          <br />
          <strong className="input-text mt-3">Owner : </strong>
          <br />
          <input
            name="owner"
            id="owner"
            className="form-input"
            placeholder="Enter owner name"
            ref={register({ required: true })}
          />
          <br />
          {errors.owner && (
            <span className="text-danger">Owner field is required</span>
          )}
          <br />
          <strong className="input-text mt-3"> Address : </strong>
          <br />
          <input
            name="address"
            id="address"
            className="form-input"
            placeholder="Enter Your Address"
            ref={register({ required: true })}
          />
          <br />
          {errors.address && (
            <span className="text-danger">Address field is required</span>
          )}
          <br />
          <strong className="input-text mt-3"> Phone Number:</strong>
          <br />
          <input
            name="mobile"
            type="number"
            id="mobile"
            className="form-input"
            placeholder="Enter Your Phone Number"
            ref={register({ required: true })}
          />
          <br />
          {errors.mobile && (
            <span className="text-danger">Add a phone number</span>
          )}
          <br />
          <strong className="input-text mt-3"> Select a Category:</strong>
          <br />
          <select
            className="form-input"
            {...register("Select a Category")}
          >
            <option value="female">Jewelry</option>
            <option value="male">Clothes</option>
            <option value="other">Shows</option>
          </select>
          <br />
          {errors.select && (
            <span className="text-danger">Add a phone number</span>
          )}
          <br /> <br />
          <h3>Additional Information</h3>
          <input
            name="email"
            id="email"
            className="form-input "
            placeholder="Enter your email"
            ref={register("email")}
          />{" "}
          <br /> <br />
          <input
            name="payment"
            id="payment"
            className="form-input "
            placeholder="Enter your payment"
            ref={register("payment")}
          />{" "}
          <br /> <br />
          <input
            name="timing"
            id="timing"
            className="form-input "
            placeholder="Enter your timing"
            ref={register("timing")}
          />
          <br /> <br />
          <button className="btn btn-success mr-5" type="submit">
            Register
          </button>
        </form>
        <strong>
          By Registering your Business to the Site you agree with BeryBox
          Partner Terms and Conditions
        </strong>
          </div>
          <div className="com-md-5 pl-5">
            <img src="https://images.unsplash.com/photo-1586880244386-8b3e34c8382c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZSUyMGNvbW1lcmNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default AddBusiness;
