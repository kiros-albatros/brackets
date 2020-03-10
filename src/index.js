module.exports = function check(str, bracketsConfig) {
    let arred = str.split('');
    if (arred.length % 2 == 1) {
        return false;
    }
    for (let i = 0; i < bracketsConfig.length; i++) {
        for (let j = 0; j < bracketsConfig[i].length; j++) {
            if (arred.includes(bracketsConfig[i][j])) {
                let toDelIndex = arred.indexOf(bracketsConfig[i][j]);
                delete arred[toDelIndex];
            }
        }
    }
    for (let k = 0; k < arred.length; k++) {
        if (arred[k] !== undefined) {
            return false
        } else {
            return true;
        }
    }
}
