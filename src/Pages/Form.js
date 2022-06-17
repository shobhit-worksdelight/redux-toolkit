import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { add } from "../Store/formSlice";

const Form = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(add(data));
  };

  return (
    <>
       <form onSubmit={handleSubmit(onSubmit)}>
       <input {...register('firstName')} />
       <input {...register('lastName', { required: true })} />
       {errors.lastName && <p>Last name is required.</p>}
       <input {...register('age', { pattern: /\d+/ })} />
       {errors.age && <p>Please enter number for age.</p>}
       <input type="submit" />
     </form>
      {/* <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="form-group">
            <label>First Name</label>
            <input
              type="name"
              class="form-control"
              id="name"
              aria-describedby="name"
              placeholder="Enter first name"
            />
          </div>
          <div class="form-group">
            <label>Second Name</label>
            <input
              type="name"
              class="form-control"
              id="name"
              aria-describedby="name"
              placeholder="Enter second name"
            />
          </div>
          <div class="form-group">
            <label>Age</label>
            <input type="age" class="form-control" id="age" placeholder="Age" />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div> */}
    </>
  );
};

export default Form;
