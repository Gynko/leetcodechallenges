import Code from "../../../components/Code/code.component";

const solution = `var twoSum = function (nums, target) {
    var increment = 0;
    for (let i = 0; i < nums.length - 1; i++) {
      for (let j = 1 + increment; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) return [i, j];
      }
      increment++;
    }
  };

  // Big(O) of O(n^2) is not good enough`;

function TwoSum() {
  return (
    <div>
      <Code code={solution} language="javascript" />
    </div>
  );
}

export default TwoSum;
