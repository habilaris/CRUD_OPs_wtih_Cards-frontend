import { useEffect, useState } from "react";
import Cards from "../components/Cards";

function CardPage() {
  let [cards, setCards] = useState([
    { name: "Habil", age: 21, gender: "Male" },
  ]);

  useEffect(() => {
    const API_URI = "http://localhost:3000/api/admin/cards";

    fetch(API_URI)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setCards(data);
      })
      .catch((err) => {
        console.error(
          "Request failed to the API endpoint /api/admin/cards:",
          err,
        );
      })
      .finally(() => {
        console.log("Fetch request for getting cards");
      });
  }, []);

  return (
    <>
      <h1 className="text-5xl text-neutral-700 mb-5 cursor-default">
        User Cards
      </h1>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-6 flex-wrap">
        {cards.map((card, index) => {
          return (
            <Cards
              key={index} // This doesn't go to prop
              id={index}
              name={card.name}
              age={card.age}
              gender="Male"
              // gender={card.gender}
              // isActive={card.isActive}
              isActive={true}
            />
          );
        })}
        {/* OR
         {cards.map(({ name, age, gender, isActive }) => {
          return (
            <Cards name={name} age={age} gender={gender} isActive={isActive} />
          );
        })} 
        */}
      </div>
    </>
  );
}

export default CardPage;
