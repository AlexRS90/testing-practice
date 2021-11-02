function stringLength(newStr) {
    const characters = newStr.length;
    if (characters > 0 && characters < 11) {
      return characters;
    } else {
      throw new Error('Characters no valid');
    }
}

module.exports = stringLength;