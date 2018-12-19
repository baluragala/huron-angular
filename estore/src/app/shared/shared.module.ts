import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UnitsPipe } from "./units.pipe";

@NgModule({
  declarations: [UnitsPipe],
  imports: [CommonModule],
  exports: [UnitsPipe]
})
export class SharedModule {}
