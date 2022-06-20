import React, { useState } from "react";
// import { handleAdopt } from "./PetsList";
function PetItem({ pet, handleAdopt }) {
  const [petImg, setPetImg] = useState(pet.image);
  const petpet = () => {
    setPetImg(pet.image2);
  };
  // i can put setPetImg directly in onclick no need for a new function
  // onClick{()=>setPetImg(pet.image2)}
  return (
    <div className="col-lg-4 col-md-8 col-sm-10">
      <div className="single-doctor">
        <img className="image" alt={pet.name} src={petImg} />
        <div className="content">
          <h3>{pet.name}</h3>
          <button onClick={petpet} type="button" className="btn btn-info">
            Pet
          </button>
          <button
            onClick={() => handleAdopt(pet.id)}
            type="button"
            class="btn btn-info  m-2"
          >
            Adopt
          </button>
        </div>
      </div>
    </div>
  );
}

export default PetItem;
