import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/shared/services/search.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formRegister = new FormGroup({

    nome: new FormControl('', [Validators.required]),
    sobrenome: new FormControl('', [Validators.required]),
    distrito: new FormControl('', [Validators.required]),
    freguesia: new FormControl('', [Validators.required]),
    morada: new FormControl('', [Validators.required]),
    codigoPostal: new FormControl('', [Validators.required]),
    contato: new FormControl('', [Validators.required]),
    social: new FormControl('', [Validators.required]),

  especialidade: new FormControl([]),
  prazo: new FormControl('', [Validators.required])


  });

  opcoesSelecionadas: any = []

  constructor(
    private router: Router,
    private searchService: SearchService) { }

  ngOnInit(): void {

  }

  onSubmit(){
    const formValue = this.formRegister.value;
    this.searchService.create(formValue);
    this.router.navigateByUrl('/search')
  }

  onEscolha(event: any){
    const index = this.opcoesSelecionadas.indexOf(event.target.value);

    if(this.opcoesSelecionadas.indexOf(event.target.value) >= 0){
      this.opcoesSelecionadas.splice(index,1)
    }else{
      this.opcoesSelecionadas.push(event.target.value)
    }


    console.log(event.target.value)
    this.formRegister.controls['especialidade'].setValue(this.opcoesSelecionadas)

  }
}
