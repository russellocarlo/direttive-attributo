import { Component } from '@angular/core';
import { Persona } from './models/Persona';
import { Automobile } from './models/Automobile';
import { Libro } from './models/Libro';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'direttive-attributo';
  isShow : boolean = true;
  isSorted : boolean = true;
  persone : Persona[] = [
    {id: 1, nome: 'Carlo', cognome: 'Russello', nazione: 'Italia'},
    {id: 2, nome: 'Claudio', cognome: 'Milano', nazione: 'Regno Unito'},
    {id: 3, nome: 'Tommaso', cognome: 'Maglio', nazione: 'Spagna'}
  ]

  automobili : Automobile[] = [
    {
      id: 1,
      marca: "Nissan",
      modello: "Note",
      prezzo: 20000
    },
    {
      id: 2,
      marca: "Mercedes",
      modello: "MercedesCoup",
      prezzo: 30000
    },
    {
      id: 3,
      marca: "Fiat",
      modello: "Panda",
      prezzo: 15000
    }
  ]

  libri: Libro[] = [
    {
      id: 1,
      titolo: "Il Visconte Dimezzato",
      casaEditrice: "Mondadori",
      prezzo: 10.99,
      trama: "Il romanzo narra la storia di un visconte che, colpito da una cannonata durante una battaglia, si ritrova fisicamente e simbolicamente diviso in due parti: una buona e una cattiva."
    },
    {
      id: 2,
      titolo: "Il Signore degli Anelli",
      casaEditrice: "HarperCollins",
      prezzo: 25.99,
      trama: "Una straordinaria avventura ambientata nella Terra di Mezzo, dove un giovane hobbit, Frodo, intraprende un viaggio epico per distruggere l'Unico Anello e sconfiggere il male incarnato in Sauron."
    },
    {
      id: 3,
      titolo: "Quartieri Lontani",
      casaEditrice: "Coconino Press",
      prezzo: 16.50,
      trama: "Un manga poetico e nostalgico che racconta la storia di Hiroshi, un uomo che torna misteriosamente adolescente e rivive un'estate importante del suo passato, riscoprendo i legami familiari e le emozioni dimenticate."
    }
  ];
  

  changeShow(){
    this.isShow = !this.isShow;
  }

  svuotaArray(){
    this.persone = []
  }

  mostraPrezzoMaggiore(){
    let prezzi = this.automobili.map(a => a.prezzo);
    let prezzoMax = Math.max(...prezzi)
    alert('il prezzo più alto per un automobile è: ' + prezzoMax + '€');
  }

  ordinaPerPrezzo(){
    this.isSorted = !this.isSorted
    if(!this.isSorted){
      this.libri.sort((a,b) => a.prezzo - b.prezzo)
    } else{
      this.libri.sort((a,b) => b.prezzo - a.prezzo);
    }
  }
}
