import deleteCardData from "../api/DeleteCardData";

function Cards({ id, name, age, gender, isActive }) {
  return (
    <div className="card-container bg-neutral-50 text-neutral-800 shadow-md py-4 w-60 rounded-md flex flex-col items-center hover:scale-105 cursor-default transition-scale duration-100 ease-in relative">
      <p>ID: {id + 1}</p>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Gender: {gender}</p>
      <p>Active: {isActive ? "True" : "False"}</p>

      <button
        className="absolute right-3 top-1 text-red-500 animate-pulse cursor-pointer hover:scale-110"
        onClick={() => {
          deleteCardData(name, age);
        }}
      >
        Del
      </button>
    </div>
  );
}
// OR
// function Cards(props) {
/* No necessity to only name the parameter/argument "props", you can name it "prop, attributes, p" or anything. */
//   return (
//     <div className="card-container border rounded-md">
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//       <p>Gender: {props.gender}</p>
//     </div>
//   );
// }

export default Cards;
