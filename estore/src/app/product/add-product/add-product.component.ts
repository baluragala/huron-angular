import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "hsg-add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.css"]
})
export class AddProductComponent implements OnInit {
  @ViewChild("titleRef") titleRef;
  @ViewChild("addForm") addForm: NgForm;
  title;
  constructor() {}

  ngOnInit() {
    console.log("titleRef", this.titleRef);
    this.title = "large product name, so big";
  }

  doSubmit(form: NgForm) {
    console.log(form);
  }
  load() {
    let product = {
      title: "product" + Math.random(),
      stock: 10
    };
    this.addForm.control.patchValue(product);
  }
}
