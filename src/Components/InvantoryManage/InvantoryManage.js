import React from "react";
import { useForm } from "react-hook-form";
import "./InvantoryManage.css";

const InvantoryManage = () => {
  const [file, setFile] = React.useState(null)
  const handleChangeFIle = (event) => {
    const newFile = event.target.files[0]
    setFile(newFile)
}
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const formData = {
      file: file,
      type:data.type,
      description: data.description,
      offer: data.offer,
      price: data.price,
      review: data.review,
      material: data.material,
      time: data.time,
      availability: data.availability,
    }

  
    fetch('https://dentist-care.herokuapp.com/addDoctors', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      if(data){
        alert('product has been added')
      }
    })
    .catch(error => {
      console.error(error)
    })

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
              name="availability"
              id="availability"
              className="form-input"
              placeholder="Enter Product availability"
              ref={register({ required: true })}
            />
            <br />
            {errors.availability && (
              <span className="text-danger">Add Product Availability</span>
            )}
            <br />
            <input
              name="material"
              id="material"
              className="form-input"
              placeholder="material"
              ref={register({ required: true })}
            />
            <br />
            {errors.material && (
              <span className="text-danger">Add material</span>
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
            <input
              name="time"
              type="text"
              id="time"
              className="form-input"
              placeholder="Enter delivery time"
              ref={register({ required: true })}
            />
            <br />
            {errors.time && (
            <span className="text-danger">Add Delivery time</span>
            )}
            <br />
          <textarea
            className="product-description"
            placeholder="Description"
            {...register("description", { required: true })}
          ></textarea> <br />
                      {errors.description && (
              <span className="text-danger">Add product Description</span>
            )}
          <br />
            <select className="form-input" {...register("Select a offer")}>
              <option value="10">10% offer</option>
              <option value="20">20% offer</option>
              <option value="30">30% offer</option>
              <option value="50">50% offer</option>
            </select>
            <br /> <br />
            <input
              className="w-100"
              ref={register}
              type="file"
              name="file"
              onChange={handleChangeFIle}
            />{" "}
            <br /> <br />
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
