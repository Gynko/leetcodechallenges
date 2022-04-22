export var twoSumV2 = `function (nums, target) {
    let mapPropertiesToObject = {};
    for (let i = 0; i < nums.length  ; i++) {
      mapPropertiesToObject[nums[i]] = i;
    }
    for (let i = 0; i < nums.length - 1; i++) {
      let numberToSearch = target - nums[i];
      if (mapPropertiesToObject[numberToSearch] !== undefined && mapPropertiesToObject[numberToSearch] !== i) {
        return [i, mapPropertiesToObject[numberToSearch]];
      }
    }
  };`;
