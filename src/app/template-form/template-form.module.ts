import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateFormComponent } from './template-form.component';
import { FormsModule } from '@angular/forms';
import { FormDebugComponent } from './../form-debug/form-debug.component';
import { CampoControlErroComponent } from "app/campo-control-erro/campo-control-erro.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    TemplateFormComponent,
    FormDebugComponent,
    CampoControlErroComponent
  ]
})
export class TemplateFormModule { }
