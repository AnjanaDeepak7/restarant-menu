import Item from "./components/Item";

function App() {
  const foodItems = [
    {
      id: 1,
      src: "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg",
      altName: "Burger",
      item: "Chicken Cheese Burger",
      price: "$2.05",
    },
    {
      id: 2,
      src: "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg",
      altName: "Pizza",
      item: "Chicken Pepporoni Burger",
      price: "$2.95",
    },
    {
      id: 3,
      src: "https://cdn.pixabay.com/photo/2016/11/29/04/00/bread-1867208_640.jpg",
      altName: "Sandwich",
      item: "Chicken Grilled Sandwich",
      price: "$1.50",
    },
    {
      id: 4,
      src: "https://media.istockphoto.com/id/1453792067/photo/traditional-mexican-roll-burritos-with-meat-vegetable-salad-and-french-fries-white-background.jpg?s=1024x1024&w=is&k=20&c=h3-u9uUtsBEJuiqilSax_xanKRhl00M82l_ytAiXcHE=",
      altName: "Shawarma",
      item: " Special Chicken Shawarma",
      price: "$2.50",
    },
    {
      id: 5,
      src: "https://th.bing.com/th/id/OIP.UHhxdmJO4RvUksJ5W_JOaAHaEK?rs=1&pid=ImgDetMain",
      altName: "Frankie",
      item: "Chicken Frankie",
      price: "$1.05",
    },
    {
      id: 6,
      src: "https://media.istockphoto.com/id/1453499717/photo/chicken-biryani-or-biriyani-served-in-plate-isolated-on-table-top-view-indian-spicy-food.jpg?s=1024x1024&w=is&k=20&c=CkI3KLOwCAabAJfJQRf8-3gYoqQ9yp0jR8B_HkeHk2g=",
      altName: "Biriyani",
      item: "Chicken Biriyani",
      price: "$2.00",
    },
    {
      id: 7,
      src: "https://cdn.pixabay.com/photo/2017/07/08/20/52/coffe-2485620_640.jpg",
      altName: "Coffe",
      item: "Coffe",
      price: "$1.00",
    },
    {
      id: 8,
      src: "https://cdn.pixabay.com/photo/2018/04/17/11/03/cocktail-3327242_640.jpg",
      altName: "Beverages",
      item: "Mojito",
      price: "$1.25",
    },
  ];

  return (
    <div className="App">
      {foodItems.map((itemName) => {
        return (
          // Normal method
          // <Item
          //   key={itemName.id}
          //   src={itemName.src}
          //   altName={itemName.altName}
          //   item={itemName.item}
          //   price={itemName.price}
          // />

          // Passing object directly
          // <Item itemName={itemName} />

          // Using spread operator
          <Item key={itemName.id} {...itemName} />
        );
      })}
    </div>
  );
}

export default App;
