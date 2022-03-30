import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  commandForm: FormGroup;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.commandForm = new FormGroup({
      command: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      categories: new FormArray([]),
      views: new FormControl('', Validators.required),
    });
  }
  getControls() {
    return (<FormArray>this.commandForm.get('categories')).controls;
  }

  onSubmit() {}

  onAddCategory() {
    (<FormArray>this.commandForm.get('categories')).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
      })
    );
  }
  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
  onDeleteCategory(i: number) {
    (<FormArray>this.commandForm.get('categories')).removeAt(i);
  }
}
