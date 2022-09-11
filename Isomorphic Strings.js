/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isIsomorphic(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    var map = {};
    for(var i = 0; i < str1.length; i++) {
        var a = str1[i]; 
        var b = str2[i];
        if (typeof map[a] === "undefined") {
            map[a] = b;

        // check for error in first tuple ("ABB", "XYZ")
        } else if (map[a] !== b) {
            return false;
        }

        // check for error in second tuple ("ABC", "XYY")
        for (var key in map) {
            if (key !== a && b === map[key]) {
                return false;
            }
        }
    }
    return true;
}
