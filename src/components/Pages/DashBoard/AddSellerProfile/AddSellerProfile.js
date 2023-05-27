import React, { useContext } from "react";
import { useFieldArray,useForm } from "react-hook-form";
import { FiTrash } from "react-icons/fi";


import './AddSellerProfile.css'
import { AuthContext } from "../../../Context/AuthProvider";
const AddSellerProfile = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();
  const {
    fields: resFields,
    append: resAppend,
    remove: resRemove,
  } = useFieldArray({ control, name: "responsibilities" });
  const {
    fields: siblingsFields,
    append: siblingsAppend,
    remove: siblingsRemove,
  } = useFieldArray({ control, name: "siblings" });
  const {
    fields: reqFields,
    append: reqAppend,
    remove: reqRemove,
  } = useFieldArray({ control, name: "requirements" });
  const { user } = useContext(AuthContext);
  console.log(user.email)

  

  return (
    <div>
        <ul className="steps w-[100%]">
  <li data-content="✕" className="step step-primary">Personal Info</li>
  <li data-content="✕" className="step step-primary">Professional Info</li>
  <li data-content="✓" className="step step-primary">Verification Info</li>
  <li data-content="✕" className="step step-primary">Payment Info</li>
  <li data-content="✕" className="step step-primary">Gig & Project Info</li>

</ul>
  <div className="addprofilemain">
   <div class="containermainprofile">
    <div class="title">Add a Seller Profile Profile</div>
    <div class="content">
      <form className="formprofile">
        <div class="user-details">
          <div class="input-box">
            <span class="details">Category</span>
           <select
            {...register("id")}
            className="select select-bordered w-full max-w-lg defa"
          >
            <option >Select Brand Name</option>
            <option>Select Brand Name</option>
            <option>Select Brand Name</option>
           
          </select>
          </div>
          <div class="input-box">
            <span class="details">Name</span>
            <input  {...register("name")} type="text" placeholder="Enter your name"   />
          </div>
          <div class="input-box">
            <span class="details">Age</span>
            <input  {...register("age")} type="number" placeholder="Enter your age"   />
          </div>
          <div class="input-box">
            <span class="details">Email</span>
            <input {...register("email")} type="text" placeholder="Enter your email"   />
          </div>
          <div class="input-box">
            <span class="details">Gender</span>
            <select
            {...register("gender")}
            className="select select-bordered w-full max-w-lg"
          >
            <option disabled>Select Gender</option>
            <option>Male</option>
            <option>Female</option>
        
          </select>
          </div>
          <div class="input-box">
            <span class="details">Facebook ID</span>
            <input  {...register("facebook")} type="text" placeholder="N/A"   />
          </div>
          <div class="input-box">
            <span class="details">Twitter ID</span>
            <input  {...register("twitter")} type="text" placeholder="N/A"   />
          </div>
          <div class="input-box">
            <span class="details">Instagram ID</span>
            <input   {...register("instagram")} type="text" placeholder="N/A"   />
          </div>
         
          <div class="input-box">
            <span class="details">Phone No</span>
            <input  {...register("phone")} type="number" placeholder="Enter your phone number"   />
          </div>
          <div class="input-box">
            <span class="details">Present Address</span>
            <input {...register("presentlocation")} type="text" placeholder="Present Address"   />
          </div>
          <div class="input-box">
            <span class="details">Permanent Address</span>
            <input  {...register("permanentlocation")} type="text" placeholder="Permanent Address"   />
          </div>
          <div class="input-box">
            <span class="details">Date of birth</span>
            <input {...register("birth")} type="date" placeholder=""   />
          </div>
          <div class="input-box">
            <span class="details">Your Nationality</span>
            <input  {...register("Nationality")} type="text" placeholder="Nationality"   />
          </div>

          <div class="input-box">
            <span class="details">Your Image</span>
            <input {...register("img")} type="text" placeholder="Photo"   />
          </div>    
          <div class="input-box">
            <span class="details">Your Image</span>
            <input {...register("img")} type="text" placeholder="Photo"   />
          </div>    
        </div>
       
        <div class="button w-[20%]">
          <input type="submit" value="Next Step"  />
        </div>
      </form>
    </div>
  </div>

  </div>
  </div>
  );
};

export default AddSellerProfile;
