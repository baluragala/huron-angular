import { Component, OnInit } from "@angular/core";
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";

@Component({
  selector: "app-reactive-order-form",
  templateUrl: "./reactive-order-form.component.html",
  styles: []
})
export class ReactiveOrderFormComponent implements OnInit {
  orderForm: FormGroup;
  items: any[] = [];
  additionalServices = [
    { name: "Secure Packing", id: 1, selected: false },
    { name: "In Person Delivery", id: 2, selected: false },
    { name: "Express Shipping", id: 3, selected: false }
  ];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      customerName: ["", [Validators.required, Validators.minLength(5)]],
      email: "",
      membership: "",
      additionalServicesGroup: this.formBuilder.array([
        new FormControl(false),
        new FormControl(false),
        new FormControl(false)
      ]),
      items: this.formBuilder.array([this.createItem()])
    });
  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      name: ["", [Validators.required]],
      description: ["", [Validators.required]],
      quantity: ["", [Validators.required]]
    });
  }

  addItem(): void {
    const control = this.orderForm.get("items") as FormArray;
    control.push(this.createItem());
  }

  removeItem(i) {
    console.log(i);
    const control = <FormArray>this.orderForm.get("items");
    control.removeAt(i);
  }

  load() {
    this.addItem();
    this.orderForm.patchValue({
      customerName: "John",
      email: "john@abc.com",
      membership: "yes",
      additionalServices: [false, true, true],
      items: [
        {
          name: "bbb",
          description: "bbb",
          quantity: "2"
        },
        {
          name: "ccc",
          description: "ccc",
          quantity: "2"
        }
      ]
    });
  }

  save() {
    const formValue = Object.assign({}, this.orderForm.value);
    const additionalServices = formValue.additionalServices.map(
      (selected, index) => {
        return {
          id: this.additionalServices[index].id,
          name: this.additionalServices[index].name,
          selected
        };
      }
    );
    formValue.additionalServices = additionalServices;
    console.log(formValue);
  }
}
