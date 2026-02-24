import { useState } from "react";
import uploadCardData from "../api/UploadCardData";

function CardForm() {
  const [requestStatus, setRequestStatus] = useState(false);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  return (
    <div>
      <form
        id="form"
        className="text-xl shadow-xl py-6 px-8 rounded-2xl bg-neutral-50 relative"
      >
        <div className="name-container mb-4">
          <label htmlFor="name" className="block text-neutral-700 pl-3 mb-1">
            Enter your name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="John Doe"
            className="bg-neutral-200 w-xs h-10 rounded-md pl-8 outline-none"
          />
        </div>
        <div className="age-container mb-4">
          <label htmlFor="age" className="block text-neutral-700 pl-3 mb-1 ">
            Enter your age:
          </label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
            placeholder="25"
            className="bg-neutral-200 w-xs h-10 rounded-md pl-8 outline-none"
          />
        </div>
        <div className="gender-container mb-4">
          <label className="block text-neutral-700 pl-3 mb-1 ">
            Select your gender:
          </label>

          <div className="gender-options text-neutral-600 ml-3">
            <div className="inline mr-4">
              <input
                type="radio"
                name="gender"
                id="male"
                className="mr-1"
                value="male"
              />
              <label htmlFor="male">Male</label>
            </div>

            <div className="inline">
              <input
                type="radio"
                name="gender"
                id="female"
                className="pr-6 mr-1"
                value="female"
              />
              <label htmlFor="female">Female</label>
            </div>
          </div>
        </div>

        <button
          className="rounded-md w-full h-8 bg-blue-600 hover:bg-blue-500 text-neutral-50 font-medium cursor-pointer transition-all ease-in duration-150"
          onClick={(event) => {
            event.preventDefault();
            if (!name) {
              console.log("Please enter something in the name field!");
            } else {
              uploadCardData(name, age);
              setRequestStatus(true);
            }
          }}
        >
          Submit
        </button>
      </form>

      {requestStatus && (
        <p
          id="toast"
          className="border border-green-700 bg-green-600 shadow-2xl shadow-neutral-500 text-neutral-50 font-medium absolute bottom-22 w-96 h-10 flex justify-center items-center rounded-md"
        >
          <span className="absolute left-7 text-xl font-bold text-green-50 ">
            ✓
          </span>
          Data Submitted
        </p>
      )}
    </div>
  );
}

export default CardForm;
