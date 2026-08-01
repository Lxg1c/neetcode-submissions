class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
         const l1 = s.length;
         const l2 = t.length;
         
         if (l1 !== l2) return false;
         
         const l1_sorted = s.split("").sort();
         const l2_sorted = t.split("").sort();
        
        for ( let i = 0; i < l1; i++) {
            if (l1_sorted[i] !== l2_sorted[i]) {
                return false;
            }
    }
    return true;
    }
}
