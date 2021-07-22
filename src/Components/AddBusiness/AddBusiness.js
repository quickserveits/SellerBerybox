import React from "react";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";

const AddBusiness = () => {
  const [category, setCategory] = React.useState("");
  const handleChange = (e) => {
    setCategory(e.target.value);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    const businessData = {
      address: data.address,
      businessName: data.businessName,
      email: data.email,
      mobile: data.mobile,
      owner: data.owner,
      payment: data.payment,
      timing: data.timing,
      category: category,
    };
    
    fetch("http://localhost:5000/addBusiness", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(businessData),
    })
      .then((res) => res.json())
      .then((success) => {
        if (success) {
          alert("Great!", " successfully added", "success");
        } else {
          alert("Opppsss!", "something wrong", "error");
        }
      });
  };
  return (
    <div>
      <h3>Add your Business to our page and become berrybox partners</h3>
      <div
        className="container "
        style={{
          background: " url(./barrybox.jpg)",
          backgroundRepeat: " no-repeat",
          backgroundSize: "auto",
        }}
      >
        <div className="row">
          <div
            className="col-md-5 frame p-4 ml-0 text-white"
            style={{ height: "auto", background: "rgba(11, 57, 99, 255)" }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                name="businessName"
                id="businessName"
                className="form-styling text-white p-2"
                placeholder="Enter your Business name"
                ref={register({ required: true })}
              />{" "}
              {errors.businessName && (
                <span className="text-danger">Name field is required</span>
              )}
              {/* <strong className="mt-3">Owner : </strong> */}
              <input
                name="owner"
                id="owner"
                className="form-styling text-white p-3"
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
                className="form-styling text-white p-3"
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
                className="form-styling text-white p-3"
                placeholder="Enter Your Phone Number"
                ref={register({ required: true })}
              />
              {errors.mobile && (
                <span className="text-danger">Add a phone number</span>
              )}
              <Form>
                <Form.Group controlId="exampleForm.SelectCustom">
                  <Form.Control
                    onChange={(e) => handleChange(e)}
                    as="select"
                    custom
                  >
                    <option>--Select a Category--</option>
                    <option value="jewelry">Jewelry</option>
                    <option value="cloths">Cloths</option>
                    <option value="shop">Shop</option>
                  </Form.Control>
                </Form.Group>
              </Form>
              <h5 className="mb-2">Additional Information</h5>
              <input
                name="email"
                id="email"
                className="form-styling text-white p-3"
                placeholder="Enter your email"
                ref={register}
              />{" "}
              <input
                name="payment"
                id="payment"
                className="form-styling text-white p-3"
                placeholder="Enter your payment"
                ref={register}
              />{" "}
              <input
                name="timing"
                id="timing"
                className="form-styling text-white p-3"
                placeholder="Enter your timing"
                ref={register}
              />
              <button
                className="btn mr-5 text-white"
                type="submit"
                style={{ background: "#ebb2c1" }}
              >
                Register
              </button>
            </form>
            <div className="pt-5">
              <strong>
                By Registering your Business to the Site you agree with BeryBox
                Partner Terms and Conditions
              </strong>
            </div>
          </div>
          {/* <div className="com-md-8">
            <img
              src="https://images.unsplash.com/photo-1586880244386-8b3e34c8382c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZSUyMGNvbW1lcmNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AddBusiness;
