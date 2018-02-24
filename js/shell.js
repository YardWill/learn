function shellSort(nums) { // 希尔排序
    const gaps = [5, 3, 1];// 定义间隔区间
    for (let g = 0; g < gaps.length; g++) { // 一个一个间隔值开始
        for (let i = gaps[g]; i < nums.length; i++) { // 以间隔值遍历
            const temp = nums[i];// 选中元素
            for (var j = i; j >= gaps[g] && nums[j - gaps[g]] > temp; j -= gaps[g]) { // 如果前面一个大于后面一个
                nums[j] = nums[j - gaps[g]];// 后移
            }
            nums[j] = temp;// 填补
            console.log(nums)
        }
    }
}
const nums = [6, 0, 2, 9, 3, 5, 8, 0, 5, 4];
console.log(nums)
shellSort(nums);// 希尔排序
console.log(nums)
