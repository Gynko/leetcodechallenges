import LeetCodeArticle from "../components/leetcodeArticle/leetcode-article.component";
import { twoSum } from "../data/challenges/TwoSum.js";
import { twoSumV2 } from "../data/challenges/TwoSumsV2.js";
import Code from "../components/Code/code.component";

function Home() {
  let arrayOfProperties = {};
  var twoSums = function (nums, target) {
    // Idea: We currently need to lookup every element of the array one by one and add it to
    // every other element of the array to check they can amount to the target.
    // What if we were converting first each element of the array as the properties of an object:
    // Then, when first get our element "2" - and our target is 9
    // => we can make a lookup of O(1) to check if there is a obj[7].
    // Our algorithm is suddenly a O(n) algorithm, we traded for increased space complexity
    for (let i = 0; i < nums.length; i++) {
      arrayOfProperties[nums[i]] = i;
    }
    for (let i = 0; i < nums.length - 1; i++) {
      let numberToSearch = target - nums[i];
      if (arrayOfProperties[numberToSearch] !== undefined) {
        return [i, arrayOfProperties[numberToSearch]];
      }
    }
  };
  twoSums([2, 7, 11, 15], 9);
  return (
    <div>
      <h1>Leet code challenges</h1>
      <LeetCodeArticle article={twoSum} />
      <Code code={twoSumV2} language="javascript" />
    </div>
  );
}

export default Home;
