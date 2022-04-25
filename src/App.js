import Home from "./pages/home.page";
import "./globalstyles/globalStyles.styles.css";
import "./globalstyles/globalCssVariables.styles.css";
import "./assets/fonts/globalFonts.styles.css";

import { LinkedList } from "./linkedlists";
//1 10 16 33

function App() {
  const myLinkedList = new LinkedList(10);
  myLinkedList.append(16);
  myLinkedList.append(33);
  myLinkedList.prepend(1);
  myLinkedList.insert(42, 3);
  myLinkedList.display();

  return <Home />;
}

export default App;
