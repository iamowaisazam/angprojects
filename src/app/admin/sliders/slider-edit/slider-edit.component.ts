import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NotificationService } from '../../../core/notification/notification.service';
import { MyFormService } from '../../../core/services/myform.service';
import { SliderService } from '../slider.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { LanguageService } from '../../../core/services/language.service';
import { EditorComponent } from '@tinymce/tinymce-angular';



@Component({
  selector: 'app-slider-edit',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EditorComponent,
    FormsModule
  ],
  templateUrl: './slider-edit.component.html',
})
export class SliderEditComponent {

  public form:FormGroup;
  public formLoader:boolean = false;
  public editId:any = '';
  public init: EditorComponent['init'] = {
    menubar:true,
    plugins: 'lists link image table code help wordcount'
  };


  constructor(
    private fb: FormBuilder,
    private notification: NotificationService,
    public myFormService:MyFormService,
    public service:SliderService,
    private route:ActivatedRoute,
    private router:Router,
    public lang: LanguageService,
  ){
    
      this.form = this.fb.group({
        title : ['', [Validators.required,Validators.maxLength(50)]],
        link : ['',[Validators.required,Validators.maxLength(50)]],
        thumbnail : ['',Validators.required,],
        short_description : ['',[Validators.required,Validators.maxLength(100)]],
      });

      this.myFormService.setForm(this.form);

     

}


ngOnInit(): void {
  

  this.route.paramMap.subscribe(params => {
    this.editId = params.get('id');
    this.getRecord(this.editId);
  });

}


async getRecord(id:any) {
      
    this.formLoader = true;

    this.service.edit(Number(this.editId)).subscribe({
      next: (res:any) => {
        let data = res.data;
        this.form.patchValue({
          title : data.title,
          link : data.link,
          short_description : data.short_description,
          thumbnail : data.thumbnail,
        });

        // this.notification.success(res.message);
        this.formLoader = false;

      },
      error: (response:any) => {

        const error = response.error;
        if(error){
            if(error.errors){
                this.notification.error(Object.values(error.errors)[0]);
            }else{
                this.notification.error(error.message);
            }
        }else{
          this.notification.error('Something Went Wrong')
        }
        this.formLoader = false;

        this.router.navigate(['/admin/dashboard']);

      }
    });
}


async onSubmit() {
   
    if (this.form.valid) {

        let data:any = this.form.value;
        data.status = 1;
        data.id = this.editId;

        this.formLoader = true;
        this.service.update(data).subscribe({
          next: (response:any) => {

            this.formLoader = false;    
            this.notification.success(response.message);
           
           
            this.getRecord(this.editId);
            this.formLoader = false;

          },
          error: (response:any) => {

              const error = response.error;
              if(error){
                  if(error.errors){
                      this.notification.error(Object.values(error.errors)[0]);
                  }else{
                      this.notification.error(error.message);
                  }
              }else{
                this.notification.error('Something Went Wrong')
              }
              this.formLoader = false;
          }
        });

    } else {
        this.formLoader = false;
        this.form.markAllAsTouched();
        this.notification.error('Validation Failed');  
    }
  
}


}






