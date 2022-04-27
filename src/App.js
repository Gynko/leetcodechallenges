import Home from "./pages/home.page";
import "./globalstyles/globalStyles.styles.css";
import "./globalstyles/globalCssVariables.styles.css";
import "./assets/fonts/globalFonts.styles.css";

function App() {
  var isPalindrome = function (x) {
    return (
      x.toString().split("").reverse().join("") ===
      x.toString().split("").join("")
    );
  };

  const test = 1221;

  return <Home />;
}

export default App;
