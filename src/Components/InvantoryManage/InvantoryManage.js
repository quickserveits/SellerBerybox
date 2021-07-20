import React from "react";
import { useForm } from "react-hook-form";
import "./InvantoryManage.css";

const InvantoryManage = () => {
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
    <div>
      <h3 className="p-4">Listing</h3>
      <div className="inventory-container">
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              name="type"
              id="type"
              className="form-input"
              placeholder="Type"
              ref={register({ required: true })}
            />{" "}
            <br />
            {errors.type && (
              <span className="text-danger">This field is required</span>
            )}
            <br />
            <input
              name="description"
              id="description"
              className="form-input"
              placeholder="Enter Product Description"
              ref={register({ required: true })}
            />
            <br />
            {errors.description && (
              <span className="text-danger">Add Product Description</span>
            )}
            <br />
            <input
              name="review"
              id="review"
              className="form-input"
              placeholder="Review"
              ref={register({ required: true })}
            />
            <br />
            {errors.review && (
              <span className="text-danger">review field is required</span>
            )}
            <br />
            <input
              name="price"
              type="number"
              id="price"
              className="form-input"
              placeholder="Enter product price"
              ref={register({ required: true })}
            />
            <br />
            {errors.price && (
              <span className="text-danger">Add product price</span>
            )}
            <br />
            <select className="form-input" {...register("Select a offer")}>
              <option value="female">10% offer</option>
              <option value="20">20% offer</option>
              <option value="30">30% offer</option>
              <option value="50">50% offer</option>
            </select>
            <br /> <br />
            <input
              className="w-100"
              ref={register}
              type="file"
              name="picture"
            />{" "}
            <br />
            <button className="btn btn-primary mr-5" type="submit">
              Add Item
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InvantoryManage;
