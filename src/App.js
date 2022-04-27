import Home from "./pages/home.page";
import "./globalstyles/globalStyles.styles.css";
import "./globalstyles/globalCssVariables.styles.css";
import "./assets/fonts/globalFonts.styles.css";

function App() {
  var convert = function (s, numRows) {
    let array = Array(numRows).fill("");
    let counter = 0;
    let reversed = 0;

    for (let i = 0; i < s.length; i++) {
      if (numRows === 1) {
        array[i] = s[i];
      }
      if (numRows !== 1) {
        if (counter < numRows) {
          array[counter] = array[counter] + s[i];
          counter++;
        }
        if (counter === numRows - 1) {
          array.reverse();
          reversed++;
          counter = 0;
        }
      }
    }
    if (reversed % 2 === 1) array.reverse();
    return array.join("");
  };

  console.log(convert("AB", 1));

  return <Home />;
}

export default App;
