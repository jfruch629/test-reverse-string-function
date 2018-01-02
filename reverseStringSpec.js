describe('reverseString', () => {

  it("returns the reverse of the provided String", () => {
    let word1 = 'hello';
    let word2 = 'yarn';
    let word3 = 'happy';
    expect(reverseString(word1)).toEqual('olleh')
    expect(reverseString(word2)).toEqual('nray')
    expect(reverseString(word3)).not.toEqual('yppih')
  })

  it("returns an empty String if an integer is given", () => {
    let number = 100;
    expect(reverseString(number)).toEqual('')
  })

  it("returns elements of an Array reversed in a String", () => {
    let array = [0,"apple"];
    expect(reverseString(array)).toEqual("apple0");
  })
})
