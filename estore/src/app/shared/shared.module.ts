import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UnitsPipe } from "./units.pipe";
import { NotFoundComponent } from "./not-found/not-found.component";
import { NavComponent } from "./nav/nav.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [UnitsPipe, NotFoundComponent, NavComponent],
  imports: [CommonModule, RouterModule.forChild([])],
  exports: [UnitsPipe, NavComponent]
})
export class SharedModule {}
