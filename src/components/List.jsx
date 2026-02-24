function List() {
  let items = ["Mango", "Banana", "Grapes", "Pear", "Peach"];
  return (
    <div className="w-40 py-4 bg-neutral-50 flex flex-col rounded-md shadow-md text-neutral-800 items-center ">
      <h1 className="text-xl mb-2">List of Fruits</h1>
      <ul className="list-disc">
        {items.map((element) => {
          return <li>{element}</li>;
        })}
      </ul>
    </div>
  );
}

export default List;
