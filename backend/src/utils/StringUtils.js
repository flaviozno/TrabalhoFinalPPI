class StringUtils {
  formatName(name) {
    return name
      .split(" ")
      .map((word) =>
        word.length <= 2
          ? word
          : word[0].toUpperCase() + word.slice(1).toLowerCase()
      )
      .join(" ");
  }
}

module.exports = new StringUtils();
