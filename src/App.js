import Home from "./pages/home.page";
import "./globalstyles/globalStyles.styles.css";
import "./globalstyles/globalCssVariables.styles.css";
import "./assets/fonts/globalFonts.styles.css";

function App() {
  var lengthOfLongestSubstring = function (s) {
    let iterator = 0;
    let strLength = 0;
    let maxLength = 0;
    let storedUniqueChars = {};
    let arr = s.split("");
    while (iterator < arr.length) {
      if (storedUniqueChars.hasOwnProperty(arr[iterator])) {
        let foundIndex = storedUniqueChars[arr[iterator]];
        storedUniqueChars = {};
        storedUniqueChars[arr[foundIndex + 1]] = foundIndex + 1;
        strLength = 1;
        iterator = foundIndex + 2;
      }
      // Did not see that letter
      else {
        storedUniqueChars[arr[iterator]] = iterator;
        strLength++;
        if (strLength >= maxLength) maxLength = strLength;
        iterator++;
      }
    }
    return maxLength;
  };

  const test = "dvdf";
  lengthOfLongestSubstring(test);
  return <Home />;
}

export default App;
