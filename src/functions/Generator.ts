class Generators {
  async generateCharacter(length: number) {
    let result = '';
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  async generateNumber(length: number) {
    let result = '';
    const number = '0123456789';
    const numberLength = number.length;
    for (let i = 0; i < length; i++) {
      result += number.charAt(Math.floor(Math.random() * numberLength));
    }
    return result;
  }
}
const Generator = new Generators();
export default Generator;
