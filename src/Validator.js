class Validator {
  async validator(input) {
    if (input.length !== 3) return false;
    if (input[0] === input[1] || input[0] === input[2] || input[1] === input[2])
      return false;
    return true;
  }
}

export default Validator;
