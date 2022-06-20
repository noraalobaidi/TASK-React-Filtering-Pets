import petsData from "../petsData";
import PetItem from "./PetItem";
import React, { useState } from "react";

function PetsList() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");
  const [pets, setPets] = useState(petsData);

  const handleAdopt = (petId) =>
    setPets(pets.filter((pet) => pet.id !== petId));

  //the function in line 10 works exactly like the one below

  //check the following !!!
  // function handleAdopt(petId) {
  //   let petidList = pets.map((pet) => pet.id);
  //   let index = petidList.indexOf(petId);
  //   let arr = pets;
  //   setPets(arr.splice(index, 1));
  // }

  // if(pets.includes(query)){}
  // const petlistf=pets.filter((pet)=>)
  // pets.forEach((pet) => {
  //   if (pet.name == query) {
  //     alert("pet found");
  //   }
  // });
  // if (pets.includes(query)) {
  // }
  // const petlistfilter = pets.filter((pet) => pet.name == query);
  // let petList = petlistfilter.map((pet) => <PetItem pet={pet} key={pet.id} />);
  // if (query.length == 0) {
  //   petList = pets.map((pet) => <PetItem pet={pet} key={pet.id} />);
  // }
  const petList = pets
    .filter(
      (pet) =>
        pet.name.toLowerCase().includes(query.toLowerCase()) &&
        pet.type.includes(type)
    )
    .map((pet) => <PetItem pet={pet} key={pet.id} handleAdopt={handleAdopt} />);
  // in the line above we passed the method handleAdopt =>>> handleAdopt={handleAdopt}
  return (
    <section id="doctors" className="doctor-section pt-140">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-5 col-xl-6 col-lg-7">
            <div className="section-title text-center mb-30">
              <h1 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                Fur-ends
              </h1>
              <div className="input-group rounded">
                <input
                  onChange={(e) => setQuery(e.target.value)}
                  type="search"
                  className="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
              </div>
              <br />
              Type:
              <select
                className="form-select"
                onChange={(e) => setType(e.target.value)}
              >
                <option value="" selected>
                  All
                </option>
                <option value="Cat">Cat</option>
                <option value="Dog">Dog</option>
                <option value="Rabbit">Rabbit</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">{petList}</div>
      </div>
    </section>
  );
}

export default PetsList;
// export { handleAdopt, PetsList };
