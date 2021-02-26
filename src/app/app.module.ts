import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { NgxPaginationModule } from "ngx-pagination";
import { ApiService } from './api.service'; // <-- import the module

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, NgxPaginationModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  providers: [ApiService]
})
export class AppModule {}
