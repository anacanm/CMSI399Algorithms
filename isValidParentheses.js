/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length % 2 == 1) {
        return false;
    }
    const grouping = { '{': '}', '[': ']', '(': ')' };
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (grouping[s[i]]) {
            stack.push(grouping[s[i]]);
        } else {
            if (stack.pop() != s[i]) {
                return false;
            }
        }
    }
    return stack.length == 0;
};

