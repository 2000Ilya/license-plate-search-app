import { LicensePlate } from "../types";

function plateNumberSearcher(
  plateValue: string,
  platesValues: LicensePlate[]
): string {
  if (plateValue) {
    return "найден";
  } else {
    return "не найден";
  }
}

export default plateNumberSearcher;
