/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let unsorted = {};
    for (let i = 0; i < s.length; i++) {
        unsorted[s[i]] === undefined ? (unsorted[s[i]] = 1) : unsorted[s[i]]++;
    }

    sortedEntries = Object.entries(unsorted).sort((a, b) => {
        if (a[1] < b[1]) return 1;
        else if (a[1] > b[1]) return -1;
        return 0;
    });
    return sortedEntries.map((letter) => letter[0].repeat(letter[1])).join('');
};
