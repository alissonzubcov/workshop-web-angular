import { FormBuilder, Validators } from "@angular/forms";

export class GameRegisterForm {

    constructor(private formBuilder: FormBuilder) { }

    public buildFormRegister() {
        return this.formBuilder.group({
            name: ['', [Validators.required]],
            developer: ['', [Validators.required]],
            punctuation: ['', [Validators.required]]
        });
    }

}