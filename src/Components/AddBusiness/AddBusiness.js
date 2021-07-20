import React from "react";
import { useForm } from "react-hook-form";

const AddBusiness = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <h3>Add your Business to our page and become berrybox partners</h3>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <strong className="mt-3">Business Name : </strong>
          <br />
          <input
            name="name"
            id="name"
            className="rounded border-success w-100 "
            placeholder="Enter your Business name"
            ref={register("name", { required: true })}
          />{" "}
          <br />
          {errors.name && (
            <span className="text-danger">Name field is required</span>
          )}
          <br />
          <strong className="mt-3">Owner : </strong>
          <br />
          <input
            name="owner"
            id="owner"
            className="rounded border-success w-100"
            placeholder="Enter owner name"
            ref={register("owner", { required: true })}
          />
          <br />
          {errors.email && (
            <span className="text-danger">Owner field is required</span>
          )}
          <br />
          <strong className="mt-3"> Address : </strong>
          <br />
          <input
            name="address"
            id="address"
            className="rounded border-success w-100"
            placeholder="Enter Your Address"
            ref={register({ required: true })}
          />
          <br />
          {errors.address && (
            <span className="text-danger">Address field is required</span>
          )}
          <br />
          <strong className="mt-3"> Phone Number:</strong>
          <br />
          <input
            name="mobile"
            type="number"
            id="mobile"
            className="rounded border-success w-100"
            placeholder="Enter Your Phone Number"
            ref={register({ required: true })}
          />
          <br />
          {errors.mobile && (
            <span className="text-danger">Add a phone number</span>
          )}
          <br />
          <strong className="mt-3"> Select a Category:</strong>
          <br />
          <select
            className="rounded border-success w-100"
            {...register("Select a Category")}
          >
            <option value="female">Jewelry</option>
            <option value="male">Clothes</option>
            <option value="other">Shows</option>
          </select>{" "}
          <br /> <br />
          <h3>Additional Information</h3>
          <input
            name="email"
            id="email"
            className="rounded border-success w-100 "
            placeholder="Enter your email"
            ref={register("email")}
          />{" "}
          <br /> <br />
          <input
            name="payment"
            id="payment"
            className="rounded border-success w-100 "
            placeholder="Enter your payment"
            ref={register("payment")}
          />{" "}
          <br /> <br />
          <input
            name="timing"
            id="timing"
            className="rounded border-success w-100 "
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
    </div>
  );
};

export default AddBusiness;
