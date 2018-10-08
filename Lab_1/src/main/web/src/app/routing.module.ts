import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { HotelEditComponent } from "./hotel/hotel-edit/hotel-edit.component"
import { HotelListComponent } from "./hotel/hotel-list/hotel-list.component"
import { HotelCreateComponent } from "./hotel/hotel-create/hotel-create.component";

const routes: Routes = [
  { path: "", component: HotelListComponent },
  { path: "hotels/create", component: HotelCreateComponent }/*,
  { path: "hotels/:id", component: HotelEditComponent }
  { path: "hotels/create", component: HotelCreateComponent }*/
];

export const cRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: false});