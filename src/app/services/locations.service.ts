import { Center } from './../models/center';
import { Injectable } from '@angular/core';
import { Location } from '../models/location';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  chosenCenter: Center;

  locations: Location[] = [
    {name: "Málaga"},
    {name: "Sevilla"},
    {name: "Granada"},
    {name: "Almería"},
  ]

  centers: Center[] = [
    {location: "Málaga", name: "Centro Comercial Rosaleda", img: "../../../assets/images/rosaleda.jpg"},
    {location: "Málaga", name: "Larios Centro", img: "../../../assets/images/larios.jpg"},
    {location: "Málaga", name: "María Zambrano", img: "../../../assets/images/mariazam.jpg"},
    {location: "Málaga", name: "Málaga Plaza", img: "../../../assets/images/malagaplaza.jpg"},
    {location: "Sevilla", name: "Nervión Plaza", img: "../../../assets/images/nervionplaza.jpg"},
    {location: "Sevilla", name: "Centro Comercial Torre Sevilla", img: "../../../assets/images/torresevilla.jpg"},
    {location: "Sevilla", name: "Centro Comercial Los Arcos", img: "../../../assets/images/losarcos.jpg"},
    {location: "Sevilla", name: "Plaza de Armas", img: "../../../assets/images/plazalasarmas.jpg"},
    {location: "Granada", name: "Serrallo Plaza", img: "../../../assets/images/serrallo.jpg"},
    {location: "Granada", name: "Centro Comercial Neptuno", img: "../../../assets/images/neptuno.jpg"},
    {location: "Granada", name: "Centro Comercial Nevada", img: "../../../assets/images/nevada.jpg"},
    {location: "Almería", name: "Centro Comercial Torrecárdenas", img: "../../../assets/images/torrecardenas.jpg"},
    {location: "Almería", name: "Centro Comercial Mediterráneo", img: "../../../assets/images/mediterraneo.jpg"},
    {location: "Almería", name: "Centro Comercial Oliveros", img: "../../../assets/images/olivero.jpg"},
  ]

  constructor() { }

  getCenter(center: Center){
    this.chosenCenter = center;
  }
}
