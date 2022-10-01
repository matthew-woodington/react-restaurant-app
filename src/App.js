import "./App.css";
import { nanoid } from "nanoid";
import { useState } from "react";
import Menu from "./components/Menu/Menu";
import Order from "./components/Order/Order";
import NavBar from "./components/NavBar/NavBar";

const INITIAL_MENU_ITEMS = [
  {
    name: "Margherita Pizza",
    image:
      "https://ohsweetbasil.com/wp-content/uploads/four-cheese-margherita-pizza-recipe-12-scaled.jpg",
    description: "fresh mozzarella, fresh basil, extra virgin olive oil",
    price: 16,
    type: "pizza",
    id: nanoid(),
  },
  {
    name: "Little Pepperoni Pizza",
    image:
      "https://lh3.googleusercontent.com/yVhL5rSeEopXs29E-huDf5bN12RP5SYIa3Zem0oC_i2mN9kSE51eZzwz4dy7eXxu97Zmim5oClCBwWEJuKfsCQ=s0",
    description:
      "little pepperonis, mozzarella, crust brushed with our butter, onion, & garlic sauce & a sprinkle of pecorino",
    price: 17.5,
    type: "pizza",
    id: nanoid(),
  },
  {
    name: "House Salad",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/17/be/ce/3b/photo0jpg.jpg",
    description: "roasted chickpeas, red onion, feta, organic spring mix, apple cider vinaigrette",
    price: 6.75,
    type: "salad",
    id: nanoid(),
  },
  {
    name: "Meatball Pizza",
    image:
      "https://scontent.frkh1-1.fna.fbcdn.net/v/t39.30808-6/302058392_2188093318018411_9213245987479644861_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=973b4a&_nc_ohc=mZFB3w2CCA8AX9IwdZi&_nc_ht=scontent.frkh1-1.fna&oh=00_AT8K2G4yCcV2bhEF0KHpB3qiO6RgPRU35w_690dvfNbicg&oe=633C36F5",
    description: "homemade meatballs, Italian herbs, mozzarella, provolone",
    price: 18.75,
    type: "pizza",
    id: nanoid(),
  },
  {
    name: "Protein Pizza",
    image:
      "https://lh3.googleusercontent.com/HCy_oVve5HepgFpuHD3hwrEpX2dLXu8jPfJZ7kv2H4ZFxyJzvHIx1oX7qC70bBv7zXNz97W0tuw3R2XfyLHpZaQ=w452",
    description: "chopped bacon, big pepperoni, prosciutto, Italian sausage, mozzarella, pecorino",
    price: 21.5,
    type: "pizza",
    id: nanoid(),
  },
  {
    name: "Hot Hawaiian Pizza",
    image:
      "https://www.musingsofarover.com/wp-content/uploads/2017/06/Things-To-Do-In-Greenville-In-Summer-7.jpg",
    description: "chopped bacon, prosciutto, roasted pineapple, fresh jalapeños, mozzarella",
    price: 20.5,
    type: "pizza",
    id: nanoid(),
  },
  {
    name: "Cheese Pizza",
    image:
      "https://lh3.googleusercontent.com/fAC38m3HSINLlbYcoD3evtUtSIJUHD1zmcJZWumWY77J4xsfZch4syWvQtsJ_mDKVat_CUjI6fXQNrpbfzt75g=s0",
    description: "mozzarella",
    price: 15,
    type: "pizza",
    id: nanoid(),
  },
  {
    name: "Buffalo Chicken Pizza",
    image:
      "https://s1.hankr.com/images/i/a5624589b97f4551b0406053e3100e05/NYPD-Buffalo-Chicken-Pizza-6.jpg?preset=lg",
    description:
      "hot sauce, white cheddar & mozzarella, red onions, spicy blue cheese dressing, blue cheese crumbles, chives",
    price: 20.5,
    type: "pizza",
    id: nanoid(),
  },
  {
    name: "Chicken Bacon Ranch Pizza",
    image: "https://www.andhattiemakesthree.com/wp-content/uploads/2020/05/IMG_8527-735x490.jpg",
    description: "chopped bacon, buttermilk ranch, white cheddar & mozzarella, chives",
    price: 20.5,
    type: "pizza",
    id: nanoid(),
  },
  {
    name: "Buffalo Chicken Dip",
    image:
      "https://www.thespruceeats.com/thmb/2l4vDM4BJ5JM4y7eXKHEqnvhbgM=/1414x1414/smart/filters:no_upscale()/BuffaloChickenDip-GettyImages-639872178-5a84f83a43a103003655c2e7.jpg",
    description:
      "chicken, homemade hot sauce, blue cheese dressing, blue cheese crumbles, cream cheese, and mozzarella",
    price: 11.5,
    type: "appetizer",
    id: nanoid(),
  },
  {
    name: "Spinach & Artichoke Dip",
    image: "https://www.dinneratthezoo.com/wp-content/uploads/2020/01/spinach-artichoke-dip-5.jpg",
    description:
      "artichoke hearts & chopped spinach with garlic & herbs in a creamy blend of cheeses, finished with balsamic glaze",
    price: 9.75,
    type: "appetizer",
    id: nanoid(),
  },
  {
    name: "Breadsticks",
    image: "https://s3-media0.fl.yelpcdn.com/bphoto/DsPPNENPhiMmPlkC94wffw/l.jpg",
    description:
      "Pizza dough twists baked with olive oil & Italian herbs, served with warm house made crushed tomato sauce (4 count)",
    price: 5,
    type: "appetizer",
    id: nanoid(),
  },
  {
    name: "Apple Salad",
    image:
      "https://www.wellplated.com/wp-content/uploads/2020/11/Apple-Salad-with-Endive-and-Arugula.jpg",
    description:
      "sliced local apples, dried cranberries, red onion, curry candied pecans, goat cheese, organic baby spinach, maple cider vinaigrette",
    price: 8.75,
    type: "salad",
    id: nanoid(),
  },
  {
    name: "Arugula Salad",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/17/be/ce/3b/photo0jpg.jpg",
    description: "sun dried tomatoes, pepitas, goat cheese, arugula, balsamic vinaigrette",
    price: 6.75,
    type: "salad",
    id: nanoid(),
  },
  {
    name: "Smoky Salad",
    image:
      "https://assets.simpleviewinc.com/simpleview/image/fetch/q_75/https://assets.simpleviewinc.com/simpleview/image/upload/crm/greenville/4_6EEB9823-5056-A36F-23BF9BB570401BDB-6eeb96015056a36_6eeb9fbe-5056-a36f-232eb9f93b41ec29.jpg",
    description:
      "roasted corn, roasted broccoli, grape tomatoes, red onion, goat cheese, smoky candied walnuts, organic spring mix, basil dressing",
    price: 8.75,
    type: "salad",
    id: nanoid(),
  },
  {
    name: "Cinnamon Suagar Bites",
    image:
      "https://whisk-res.cloudinary.com/image/upload/g_auto,g_auto,c_fill,q_60,f_auto,h_600,w_800/v1606800628/recipe/db4371333633a2fb8815c63c7c9a3a00.jpg",
    description:
      "a shareable bowl of bites of our pizza dough, tossed in butter and cinnamon sugar, served with vanilla glaze for dipping",
    price: 8,
    type: "dessert",
    id: nanoid(),
  },
  {
    name: "Chocolate Chip Skillet Cookie",
    image: "https://data.thefeedfeed.com/static/2020/01/27/15560504305cbf71fe6f09a.jpg",
    description:
      "a large skillet baked chocolate chip cookie, topped with homemade vanilla ice cream",
    price: 9.5,
    type: "dessert",
    id: nanoid(),
  },
];

function App() {
  const [menuItems, setMenuItems] = useState(INITIAL_MENU_ITEMS);
  const [order, setOrder] = useState([]);

  const updateOrder = (id) => {
    const index = menuItems.findIndex((item) => item.id === id);
    const newOrderItem = menuItems[index];
    setOrder([...order, newOrderItem]);
  };

  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <main>
        <section className="menuArea">
          <Menu menuItems={menuItems} updateOrder={updateOrder} />
          <Order order={order} />
        </section>
      </main>
    </>
  );
}

export default App;
