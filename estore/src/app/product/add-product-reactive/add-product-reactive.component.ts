import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";

@Component({
  selector: "hsg-add-product-reactive",
  templateUrl: "./add-product-reactive.component.html",
  styleUrls: ["./add-product-reactive.component.css"]
})
export class AddProductReactiveComponent implements OnInit {
  addForm: FormGroup;
  supplierAddressGroup: FormGroup;
  constructor(private fb: FormBuilder) {}

  doSubmit() {
    console.log(this.addForm);
  }
  ngOnInit() {
    this.supplierAddressGroup = this.fb.group({
      city: "",
      state: ""
    });
    this.addForm = this.fb.group({
      title: [
        "",
        [Validators.required, Validators.minLength(5), Validators.maxLength(20)]
      ],
      stock: "",
      category: "",
      supplierAddress: this.supplierAddressGroup
    });
  }
}
