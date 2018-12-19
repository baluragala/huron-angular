import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "units"
})
export class UnitsPipe implements PipeTransform {
  transform(value: number, args?: any): any {
    if (typeof value !== "number") throw new Error("Invalid argument");
    if (value <= 1) return `${value} Unit`;
    else return `${value} Units`;
  }
}
