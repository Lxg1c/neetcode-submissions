class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const a = {};

        for (let i = 0; i < nums.length; i++) {
            const tmp = target - nums[i];

            if (tmp in a) {
                return [a[tmp], i]
            } else {
                a[nums[i]] = i;
            }
        }
    }
}
