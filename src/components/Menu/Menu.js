import { useState } from "react";
import MenuFilter from "./MenuFilter";
import MenuItem from "./MenuItem";

// const INITIAL_MENU_ITEMS = [
//   {
//     name: "Margherita",
//     image: "https://ohsweetbasil.com/wp-content/uploads/four-cheese-margherita-pizza-recipe-12-scaled.jpg",
//     description: "fresh mozzarella, fresh basil, extra virgin olive oil",
//     price: 16,
//     type: "pizza",
//     id: nanoid(),
//   },
//   {
//     name: "Little Pepperoni",
//     image: "https://images.squarespace-cdn.com/content/v1/5c6c6341b2cf79802201d51e/1663722622363-OO1OYHO1NMDG4WEMIDNE/image-asset.jpeg",
//     description:
//       "little pepperonis, mozzarella, crust brushed with our butter, onion, & garlic sauce & a sprinkle of pecorino",
//     price: 17.5,
//     type: "pizza",
//     id: nanoid(),
//   },
//   {
//     name: "House Salad",
//     image: "https://media-cdn.tripadvisor.com/media/photo-s/17/be/ce/3b/photo0jpg.jpg",
//     description:
//       "roasted chickpeas, red onion, feta, organic spring mix, apple cider vinaigrette",
//     price: 6.75,
//     type: "salad",
//     id: nanoid(),
//   },
// ];

function Menu({ menuItems, ...props }) {

    // const [menuItems, setMenuItems] = useState(INITIAL_MENU_ITEMS)
    const [filter, setFilter] = useState()

    const updateFilter = (value) => {
        setFilter(value);
    };

    const menuList = menuItems
    .filter((item) => filter ? item.type === filter : item)
    .map((item) => <MenuItem key={item.id} item={item} updateOrder={props.updateOrder} />);

  return (
    <div>
        <MenuFilter updateFilter={updateFilter}/>
        <ul>{menuList}</ul>
    </div>
  );
}

export default Menu;
