/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function(s) {
    s = s.trim();
    if (s === '') {
        return 0;
    }
    let lastWordIndex = s.lastIndexOf(' ');
    if (lastWordIndex === -1) {
        return s.length;
    }
    return s.length - lastWordIndex - 1;
};
