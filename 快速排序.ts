interface Sort {
  <T>(arr: T[]): T[];
}

const quickSortByDeep: Sort = (arr) => {
  if (arr.length === 0) return arr;

  const minArr = [];
  const maxArr = [];
  const num = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (num >= arr[i]) {
      minArr.push(arr[i]);
    } else {
      maxArr.push(arr[i]);
    }
  }

  return quickSortByDeep(minArr).concat([num], quickSortByDeep(maxArr));
};

const quickSortByNormal: Sort = (arr) => {
  if (arr.length === 0) return arr;

  const fn = (start: number = 0, end: number = 0) => {
    if (start >= end && start >= 0 && end >= 0) return;
    let copyStart = start;
    let copyEnd = end;
    const num = arr[start];

    while (start < end) {
      while (num < arr[end] && start < end && end >= 0) {
        end--;
      }
      arr[start] = arr[end];
      while (num >= arr[start] && start < end && start < arr.length) {
        start++;
      }
      arr[end] = arr[start];
    }
    arr[start] = num;
    fn(copyStart, start - 1);
    fn(end + 1, copyEnd);
  };
  fn(0, arr.length - 1);
  return arr;
};

const quickSort: Sort = (arr) => {
  return quickSortByNormal(arr);
};

console.log(quickSort([123, 1561, 13, 15, 4, 3, 1, 31, 561, 32, 1, 54, 61]));

// 思想:通过一趟排序将要排序的数据分割成独立的两部分，其中一部分的所有数据都比另外一部分的所有数据都要小，然后再按此方法对这两部分数据分别进行快速排序，整个排序过程可以递归进行，以此达到整个数据变成有序序列。
