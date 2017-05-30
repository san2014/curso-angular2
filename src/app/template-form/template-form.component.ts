import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: "",
    email: ""
  }

  constructor(
    private http: Http
  ) { }

  ngOnInit() {
  }

  onSubmit(form){
    console.log(form);
  }

  verificaValidTouched(campo){
    
    return !campo.valid && campo.touched;

  }

  aplicaCssErro(campo){

    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)      
    }

  }

  consultaCEP(cep, form){

    //Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {
      
      //Expressão regular para validar o CEP.
      var validacep = /^[0-9]{8}$/;

      //Valida o formato do CEP.
      if(validacep.test(cep)) {    

        this.http.get(`//viacep.com.br/ws/${cep}/json/`)
          .map(dados => dados.json())
          .subscribe(dados => {
            
            this.populaDadosForm(dados, form)

          });

      }
      
    }

  }

  populaDadosForm(dados, form){

    form.form.patchValue({
      endereco: {
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }      
    })

  }

  resetFormulario(form){
    form.form.patchValue({
      endereco: {
        complemento: null,
        rua: null,
        bairro: null,
        cidade: null,
        estado: null
      }      
    })
  }

}
