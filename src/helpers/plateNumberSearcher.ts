function plateNumberSearcher(
  plateValue: string,
  platesValues: string[]
): string {
  if (platesValues.includes(plateValue)) {
    return "найден";
  } else {
    return "не найден";
  }
}

export default plateNumberSearcher;
