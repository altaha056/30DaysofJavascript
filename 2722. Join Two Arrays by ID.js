var join = function (arr1, arr2) {
  let ans = {};
  for (let i = 0; i < arr1.length; i++) {
    ans[arr1[i].id] = arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    if (ans[arr2[i].id]) {
      for (const key in arr2[i]) ans[arr2[i].id][key] = arr2[i][key];
    } else {
      ans[arr2[i].id] = arr2[i];
    }
  }

  return Object.values(ans);
};

let arr1 = [
    { id: 1, x: 2, y: 3 },
    { id: 2, x: 3, y: 6 },
  ],
  arr2 = [
    { id: 2, x: 10, y: 20 },
    { id: 3, x: 0, y: 0 },
  ];
console.log(join(arr1, arr2));
