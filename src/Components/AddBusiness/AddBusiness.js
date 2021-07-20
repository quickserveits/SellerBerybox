import React from "react";
import { useForm } from "react-hook-form";

const AddBusiness = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    alert("Register Completed");
    console.log(data);
  };
  return (
    <div
    // style={{
    //   backgroundImage:
    //     "URL(https://images.unsplash.com/photo-1586880244386-8b3e34c8382c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZSUyMGNvbW1lcmNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)",
    // }}
    >
      <h3>Add your Business to our page and become berrybox partners</h3>
      <div className="container ">
        <div className="row">
<<<<<<< HEAD
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
=======
          <div className="col-md-5 frame p-4 ml-0" style={{ height: "auto" }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* <label htmlFor="fullname" className="text-start ">
                Business Name
              </label> */}
              <input
                name="name"
                id="name"
                className="form-styling"
                placeholder="Enter your Business name"
                ref={register({ required: true })}
              />{" "}
              {errors.name && (
                <span className="text-danger">Name field is required</span>
              )}
              {/* <strong className="mt-3">Owner : </strong> */}
              <input
                name="owner"
                id="owner"
                className="form-styling"
                placeholder="Enter owner name"
                ref={register({ required: true })}
              />
              {errors.owner && (
                <span className="text-danger">Owner field is required</span>
              )}
              {/* <strong className="mt-3"> Address : </strong> */}
              <input
                name="address"
                id="address"
                className="form-styling"
                placeholder="Enter Your Address"
                ref={register({ required: true })}
              />
              {errors.address && (
                <span className="text-danger">Address field is required</span>
              )}
              {/* <strong className="mt-3"> Phone Number:</strong> */}
              <input
                name="mobile"
                type="number"
                id="mobile"
                className="form-styling"
                placeholder="Enter Your Phone Number"
                ref={register({ required: true })}
              />
              {errors.mobile && (
                <span className="text-danger">Add a phone number</span>
              )}
              {/* <strong className="mt-3"> Select a Category:</strong> */}
              <select
                className="form-styling"
                {...register("Select a Category")}
              >
                <option value="">--Select Category---</option>
                <option value="female">Jewelry</option>
                <option value="male">Clothes</option>
                <option value="other">Shows</option>
              </select>
              {errors.select && (
                <span className="text-danger">Add a phone number</span>
              )}
              <h5 className="mb-2">Additional Information</h5>
              <input
                name="email"
                id="email"
                className="form-styling"
                placeholder="Enter your email"
                ref={register("email")}
              />{" "}
              <input
                name="payment"
                id="payment"
                className="form-styling"
                placeholder="Enter your payment"
                ref={register("payment")}
              />{" "}
              <input
                name="timing"
                id="timing"
                className="form-styling"
                placeholder="Enter your timing"
                ref={register("timing")}
              />
              <button className="btn btn-success mr-5" type="submit">
                Register
              </button>
            </form>
            <strong>
              By Registering your Business to the Site you agree with BeryBox
              Partner Terms and Conditions
            </strong>
>>>>>>> 9d5a2742b68fce7c201fca1f7a3746bc02f76ffb
          </div>
          <div className="com-md-8">
            <img
              src="https://images.unsplash.com/photo-1586880244386-8b3e34c8382c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZSUyMGNvbW1lcmNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBusiness;
