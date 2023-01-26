const isLetters = (substr: string) => /^[А-Я]+$/.test(substr);

const isNumbers = (substr: string) => /^[0-9]+$/.test(substr);

export function isPlateValueCorrect(plateValue: string): boolean {
  const letters: string = plateValue[0] + plateValue.slice(4, 6);
  const numbers: string = plateValue.slice(1, 4);
  const region: string = plateValue.slice(6);

  return (
    (((isLetters(letters) || letters.length === 0) &&
      (isNumbers(numbers) || numbers.length === 0) &&
      (isNumbers(region) || region.length === 0)) ||
      plateValue.length === 0) &&
    plateValue.length <= 9
  );
}

export function isResultCorrect(plateValue: string): boolean {
  return plateValue.length === 8 || plateValue.length === 9;
}
