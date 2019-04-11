const CommonString = {
  convertAsciiToSymbol(ascii) {
    return String.fromCharCode(ascii.match(/\d+/)[0]);
  }
};

export default CommonString;
