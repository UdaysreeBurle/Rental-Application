import { Injectable } from '@angular/core';
import { vehicle } from './vehicle';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  vehicles:vehicle[]=[
      {
        vehicleId: 1,
        vehicleName: "Pulsar 150",
        vehicleCompany: "Bajaj",
        vehiclePrice: 100000,
        vehicleType: "Bike",
        vehicleImage: "https://imgd.aeplcdn.com/1280x720/n/cw/ec/185667/pulsar-150-right-side-view-9.jpeg?isig=0",
        fuelType: "Petrol",
        availableTime: "8:00 AM - 6:00 PM",
        seatingCapacity: 2,
        rating: 4.5
      },
      {
        vehicleId: 2,
        vehicleName: "Activa 6G",
        vehicleCompany: "Honda",
        vehiclePrice: 80000,
        vehicleType: "Bike",
        vehicleImage: "https://cdn.bikedekho.com/processedimages/honda/activa-6g/source/activa-6g65e80a97062a4.jpg",
        fuelType: "Petrol",
        availableTime: "7:00 AM - 5:00 PM",
        seatingCapacity: 2,
        rating: 4.4
      },
      {
        vehicleId: 3,
        vehicleName: "Royal Enfield Classic",
        vehicleCompany: "Royal Enfield",
        vehiclePrice: 180000,
        vehicleType: "Bike",
        vehicleImage: "https://cdn.bikedekho.com/processedimages/royal-enfield/classic-650/source/classic-650672c3fe4afb06.jpg",
        fuelType: "Petrol",
        availableTime: "9:00 AM - 6:00 PM",
        seatingCapacity: 2,
        rating: 4.7
      },
      {
        vehicleId: 4,
        vehicleName: "Swift",
        vehicleCompany: "Maruti Suzuki",
        vehiclePrice: 700000,
        vehicleType: "Car",
        vehicleImage: "https://imgd.aeplcdn.com/664x374/n/cw/ec/54399/swift-exterior-right-front-three-quarter-63.jpeg?q=80",
        fuelType: "Petrol",
        availableTime: "9:00 AM - 6:00 PM",
        seatingCapacity: 5,
        rating: 4.6
      },
      {
        vehicleId: 5,
        vehicleName: "Creta",
        vehicleCompany: "Hyundai",
        vehiclePrice: 1200000,
        vehicleType: "Car",
        vehicleImage: "https://imgd.aeplcdn.com/370x208/n/cw/ec/41564/hyundai-creta-right-front-three-quarter9.jpeg?q=80",
        fuelType: "Diesel",
        availableTime: "8:00 AM - 7:00 PM",
        seatingCapacity: 5,
        rating: 4.8
      },
      {
        vehicleId: 6,
        vehicleName: "Splendor Plus",
        vehicleCompany: "Hero",
        vehiclePrice: 75000,
        vehicleType: "Bike",
        vehicleImage: "https://imgd.aeplcdn.com/1280x720/n/cw/ec/15109/splendor-plus-right-side-view-2.png?isig=0",
        fuelType: "Petrol",
        availableTime: "7:00 AM - 6:00 PM",
        seatingCapacity: 2,
        rating: 4.3
      },
      {
        vehicleId: 7,
        vehicleName: "Fortuner",
        vehicleCompany: "Toyota",
        vehiclePrice: 3200000,
        vehicleType: "Car",
        vehicleImage: "https://www.galaxytoyota.in/public/storage/946/power-to-enhance12.jpg",
        fuelType: "Diesel",
        availableTime: "9:00 AM - 7:00 PM",
        seatingCapacity: 7,
        rating: 4.9
      },
      {
        vehicleId: 8,
        vehicleName: "Apache RTR 160",
        vehicleCompany: "TVS",
        vehiclePrice: 110000,
        vehicleType: "Bike",
        vehicleImage: "apache160.jpg",
        fuelType: "Petrol",
        availableTime: "8:00 AM - 6:00 PM",
        seatingCapacity: 2,
        rating: 4.5
      },
      {
        vehicleId: 9,
        vehicleName: "Thar",
        vehicleCompany: "Mahindra",
        vehiclePrice: 1500000,
        vehicleType: "Car",
        vehicleImage: "thar.jpg",
        fuelType: "Diesel",
        availableTime: "10:00 AM - 8:00 PM",
        seatingCapacity: 4,
        rating: 4.8
      },
      {
        vehicleId: 10,
        vehicleName: "Bullet 350",
        vehicleCompany: "Royal Enfield",
        vehiclePrice: 170000,
        vehicleType: "Bike",
        vehicleImage: "bullet350.jpg",
        fuelType: "Petrol",
        availableTime: "9:00 AM - 7:00 PM",
        seatingCapacity: 2,
        rating: 4.6
      },
      {
        vehicleId: 11,
        vehicleName: "Baleno",
        vehicleCompany: "Maruti Suzuki",
        vehiclePrice: 800000,
        vehicleType: "Car",
        vehicleImage: "baleno.jpg",
        fuelType: "Petrol",
        availableTime: "8:00 AM - 6:00 PM",
        seatingCapacity: 5,
        rating: 4.7
      },
      {
        vehicleId: 12,
        vehicleName: "KTM Duke 200",
        vehicleCompany: "KTM",
        vehiclePrice: 190000,
        vehicleType: "Bike",
        vehicleImage: "ktmduke200.jpg",
        fuelType: "Petrol",
        availableTime: "10:00 AM - 6:00 PM",
        seatingCapacity: 2,
        rating: 4.5
      },
      {
        vehicleId: 13,
        vehicleName: "Scorpio N",
        vehicleCompany: "Mahindra",
        vehiclePrice: 2000000,
        vehicleType: "Car",
        vehicleImage: "scorpio.jpg",
        fuelType: "Diesel",
        availableTime: "9:00 AM - 7:00 PM",
        seatingCapacity: 7,
        rating: 4.9
      },
      {
        vehicleId: 14,
        vehicleName: "Hornet 2.0",
        vehicleCompany: "Honda",
        vehiclePrice: 135000,
        vehicleType: "Bike",
        vehicleImage: "hornet.jpg",
        fuelType: "Petrol",
        availableTime: "8:00 AM - 6:00 PM",
        seatingCapacity: 2,
        rating: 4.4
      },
      {
        vehicleId: 15,
        vehicleName: "City",
        vehicleCompany: "Honda",
        vehiclePrice: 1500000,
        vehicleType: "Car",
        vehicleImage: "city.jpg",
        fuelType: "Petrol",
        availableTime: "9:00 AM - 7:00 PM",
        seatingCapacity: 5,
        rating: 4.8
      },
      {
          vehicleId: 16,
          vehicleName: "Dzire",
          vehicleCompany: "Maruti Suzuki",
          vehiclePrice: 750000,
          vehicleType: "Car",
          vehicleImage: "dzire.jpg",
          fuelType: "Petrol",
          availableTime: "8:00 AM - 6:00 PM",
          seatingCapacity: 5,
          rating: 4.5
        },
        {
          vehicleId: 17,
          vehicleName: "XUV700",
          vehicleCompany: "Mahindra",
          vehiclePrice: 2500000,
          vehicleType: "Car",
          vehicleImage: "xuv700.jpg",
          fuelType: "Diesel",
          availableTime: "9:00 AM - 7:00 PM",
          seatingCapacity: 7,
          rating: 4.8
        },
        {
          vehicleId: 18,
          vehicleName: "FZ-S V3",
          vehicleCompany: "Yamaha",
          vehiclePrice: 120000,
          vehicleType: "Bike",
          vehicleImage: "fzsv3.jpg",
          fuelType: "Petrol",
          availableTime: "9:00 AM - 6:00 PM",
          seatingCapacity: 2,
          rating: 4.6
        },
        {
          vehicleId: 19,
          vehicleName: "Kiger",
          vehicleCompany: "Renault",
          vehiclePrice: 700000,
          vehicleType: "Car",
          vehicleImage: "kiger.jpg",
          fuelType: "Petrol",
          availableTime: "8:00 AM - 6:00 PM",
          seatingCapacity: 5,
          rating: 4.4
        },
        {
          vehicleId: 20,
          vehicleName: "Discover 125",
          vehicleCompany: "Bajaj",
          vehiclePrice: 65000,
          vehicleType: "Bike",
          vehicleImage: "discover125.jpg",
          fuelType: "Petrol",
          availableTime: "7:00 AM - 5:00 PM",
          seatingCapacity: 2,
          rating: 4.3
        },
        {
          vehicleId: 21,
          vehicleName: "EcoSport",
          vehicleCompany: "Ford",
          vehiclePrice: 1100000,
          vehicleType: "Car",
          vehicleImage: "ecosport.jpg",
          fuelType: "Diesel",
          availableTime: "9:00 AM - 6:00 PM",
          seatingCapacity: 5,
          rating: 4.7
        },
        {
          vehicleId: 22,
          vehicleName: "Splendor iSmart",
          vehicleCompany: "Hero",
          vehiclePrice: 85000,
          vehicleType: "Bike",
          vehicleImage: "splendorismart.jpg",
          fuelType: "Petrol",
          availableTime: "8:00 AM - 5:00 PM",
          seatingCapacity: 2,
          rating: 4.5
        },
        {
          vehicleId: 23,
          vehicleName: "Alto 800",
          vehicleCompany: "Maruti Suzuki",
          vehiclePrice: 500000,
          vehicleType: "Car",
          vehicleImage: "alto800.jpg",
          fuelType: "Petrol",
          availableTime: "9:00 AM - 6:00 PM",
          seatingCapacity: 5,
          rating: 4.3
        },
        {
          vehicleId: 24,
          vehicleName: "Nexon",
          vehicleCompany: "Tata",
          vehiclePrice: 800000,
          vehicleType: "Car",
          vehicleImage: "nexon.jpg",
          fuelType: "Diesel",
          availableTime: "9:00 AM - 7:00 PM",
          seatingCapacity: 5,
          rating: 4.8
        },
        {
          vehicleId: 25,
          vehicleName: "Dominar 400",
          vehicleCompany: "Bajaj",
          vehiclePrice: 220000,
          vehicleType: "Bike",
          vehicleImage: "dominar400.jpg",
          fuelType: "Petrol",
          availableTime: "9:00 AM - 6:00 PM",
          seatingCapacity: 2,
          rating: 4.7
        },
        {
          vehicleId: 26,
          vehicleName: "Seltos",
          vehicleCompany: "Kia",
          vehiclePrice: 1500000,
          vehicleType: "Car",
          vehicleImage: "seltos.jpg",
          fuelType: "Diesel",
          availableTime: "8:00 AM - 7:00 PM",
          seatingCapacity: 5,
          rating: 4.9
        },
        {
          vehicleId: 27,
          vehicleName: "Hero Maestro",
          vehicleCompany: "Hero",
          vehiclePrice: 70000,
          vehicleType: "Bike",
          vehicleImage: "maestro.jpg",
          fuelType: "Petrol",
          availableTime: "7:00 AM - 5:00 PM",
          seatingCapacity: 2,
          rating: 4.2
        },
        {
          vehicleId: 28,
          vehicleName: "Harrier",
          vehicleCompany: "Tata",
          vehiclePrice: 2000000,
          vehicleType: "Car",
          vehicleImage: "harrier.jpg",
          fuelType: "Diesel",
          availableTime: "9:00 AM - 8:00 PM",
          seatingCapacity: 5,
          rating: 4.9
        },
        {
          vehicleId: 29,
          vehicleName: "Interceptor 650",
          vehicleCompany: "Royal Enfield",
          vehiclePrice: 300000,
          vehicleType: "Bike",
          vehicleImage: "interceptor650.jpg",
          fuelType: "Petrol",
          availableTime: "9:00 AM - 6:00 PM",
          seatingCapacity: 2,
          rating: 4.8
        },
        {
          vehicleId: 30,
          vehicleName: "Ciaz",
          vehicleCompany: "Maruti Suzuki",
          vehiclePrice: 1100000,
          vehicleType: "Car",
          vehicleImage: "ciaz.jpg",
          fuelType: "Petrol",
          availableTime: "8:00 AM - 7:00 PM",
          seatingCapacity: 5,
          rating: 4.6
        },
        {
            vehicleId: 31,
            vehicleName: "KTM RC 390",
            vehicleCompany: "KTM",
            vehiclePrice: 300000,
            vehicleType: "Bike",
            vehicleImage: "ktmrc390.jpg",
            fuelType: "Petrol",
            availableTime: "9:00 AM - 6:00 PM",
            seatingCapacity: 2,
            rating: 4.7
          },
          {
            vehicleId: 32,
            vehicleName: "Hector",
            vehicleCompany: "MG",
            vehiclePrice: 1800000,
            vehicleType: "Car",
            vehicleImage: "hector.jpg",
            fuelType: "Diesel",
            availableTime: "9:00 AM - 8:00 PM",
            seatingCapacity: 5,
            rating: 4.8
          },
          {
            vehicleId: 33,
            vehicleName: "Fascino 125",
            vehicleCompany: "Yamaha",
            vehiclePrice: 90000,
            vehicleType: "Bike",
            vehicleImage: "fascino.jpg",
            fuelType: "Petrol",
            availableTime: "7:00 AM - 5:00 PM",
            seatingCapacity: 2,
            rating: 4.4
          },
          {
            vehicleId: 34,
            vehicleName: "Tiago",
            vehicleCompany: "Tata",
            vehiclePrice: 600000,
            vehicleType: "Car",
            vehicleImage: "tiago.jpg",
            fuelType: "Petrol",
            availableTime: "9:00 AM - 6:00 PM",
            seatingCapacity: 5,
            rating: 4.6
          },
          {
            vehicleId: 35,
            vehicleName: "Passion Pro",
            vehicleCompany: "Hero",
            vehiclePrice: 70000,
            vehicleType: "Bike",
            vehicleImage: "passionpro.jpg",
            fuelType: "Petrol",
            availableTime: "8:00 AM - 5:00 PM",
            seatingCapacity: 2,
            rating: 4.3
          },
          {
            vehicleId: 36,
            vehicleName: "Magnite",
            vehicleCompany: "Nissan",
            vehiclePrice: 750000,
            vehicleType: "Car",
            vehicleImage: "magnite.jpg",
            fuelType: "Petrol",
            availableTime: "9:00 AM - 6:00 PM",
            seatingCapacity: 5,
            rating: 4.5
          },
          {
            vehicleId: 37,
            vehicleName: "Duke 390",
            vehicleCompany: "KTM",
            vehiclePrice: 280000,
            vehicleType: "Bike",
            vehicleImage: "duke390.jpg",
            fuelType: "Petrol",
            availableTime: "9:00 AM - 7:00 PM",
            seatingCapacity: 2,
            rating: 4.8
          },
          {
            vehicleId: 38,
            vehicleName: "Brezza",
            vehicleCompany: "Maruti Suzuki",
            vehiclePrice: 1000000,
            vehicleType: "Car",
            vehicleImage: "brezza.jpg",
            fuelType: "Diesel",
            availableTime: "9:00 AM - 7:00 PM",
            seatingCapacity: 5,
            rating: 4.7
          },
          {
            vehicleId: 39,
            vehicleName: "XPulse 200",
            vehicleCompany: "Hero",
            vehiclePrice: 150000,
            vehicleType: "Bike",
            vehicleImage: "xpulse200.jpg",
            fuelType: "Petrol",
            availableTime: "8:00 AM - 5:00 PM",
            seatingCapacity: 2,
            rating: 4.5
          },
          {
            vehicleId: 40,
            vehicleName: "Compass",
            vehicleCompany: "Jeep",
            vehiclePrice: 2500000,
            vehicleType: "Car",
            vehicleImage: "compass.jpg",
            fuelType: "Diesel",
            availableTime: "9:00 AM - 8:00 PM",
            seatingCapacity: 5,
            rating: 4.8
          },
          {
            vehicleId: 41,
            vehicleName: "TVS Jupiter",
            vehicleCompany: "TVS",
            vehiclePrice: 75000,
            vehicleType: "Bike",
            vehicleImage: "jupiter.jpg",
            fuelType: "Petrol",
            availableTime: "7:00 AM - 6:00 PM",
            seatingCapacity: 2,
            rating: 4.2
          },
          {
            vehicleId: 42,
            vehicleName: "Sonet",
            vehicleCompany: "Kia",
            vehiclePrice: 1000000,
            vehicleType: "Car",
            vehicleImage: "sonet.jpg",
            fuelType: "Diesel",
            availableTime: "8:00 AM - 7:00 PM",
            seatingCapacity: 5,
            rating: 4.7
          },
          {
            vehicleId: 43,
            vehicleName: "Suzuki Gixxer SF",
            vehicleCompany: "Suzuki",
            vehiclePrice: 150000,
            vehicleType: "Bike",
            vehicleImage: "gixxersf.jpg",
            fuelType: "Petrol",
            availableTime: "9:00 AM - 6:00 PM",
            seatingCapacity: 2,
            rating: 4.6
          },
          {
            vehicleId: 44,
            vehicleName: "Ertiga",
            vehicleCompany: "Maruti Suzuki",
            vehiclePrice: 1200000,
            vehicleType: "Car",
            vehicleImage: "ertiga.jpg",
            fuelType: "Diesel",
            availableTime: "9:00 AM - 8:00 PM",
            seatingCapacity: 7,
            rating: 4.8
          },
          {
            vehicleId: 45,
            vehicleName: "Apache RTR 200",
            vehicleCompany: "TVS",
            vehiclePrice: 130000,
            vehicleType: "Bike",
            vehicleImage: "apache200.jpg",
            fuelType: "Petrol",
            availableTime: "8:00 AM - 6:00 PM",
            seatingCapacity: 2,
            rating: 4.7
          },
          {
            vehicleId: 46,
            vehicleName: "Verna",
            vehicleCompany: "Hyundai",
            vehiclePrice: 1500000,
            vehicleType: "Car",
            vehicleImage: "verna.jpg",
            fuelType: "Petrol",
            availableTime: "9:00 AM - 6:00 PM",
            seatingCapacity: 5,
            rating: 4.6
          },
          {
            vehicleId: 47,
            vehicleName: "CBR 250R",
            vehicleCompany: "Honda",
            vehiclePrice: 200000,
            vehicleType: "Bike",
            vehicleImage: "cbr250r.jpg",
            fuelType: "Petrol",
            availableTime: "9:00 AM - 7:00 PM",
            seatingCapacity: 2,
            rating: 4.7
          },
          {
            vehicleId: 48,
            vehicleName: "XUV300",
            vehicleCompany: "Mahindra",
            vehiclePrice: 1200000,
            vehicleType: "Car",
            vehicleImage: "xuv300.jpg",
            fuelType: "Diesel",
            availableTime: "8:00 AM - 7:00 PM",
            seatingCapacity: 5,
            rating: 4.8
          },
          {
            vehicleId: 49,
            vehicleName: "Hornet 160R",
            vehicleCompany: "Honda",
            vehiclePrice: 125000,
            vehicleType: "Bike",
            vehicleImage: "hornet160r.jpg",
            fuelType: "Petrol",
            availableTime: "8:00 AM - 6:00 PM",
            seatingCapacity: 2,
            rating: 4.5
          },
          {
            vehicleId: 50,
            vehicleName: "Venue",
            vehicleCompany: "Hyundai",
            vehiclePrice: 900000,
            vehicleType: "Car",
            vehicleImage: "venue.jpg",
            fuelType: "Petrol",
            availableTime: "9:00 AM - 7:00 PM",
            seatingCapacity: 5,
            rating: 4.6
          }
  ]

  getAllVehicles(){
    return of(this.vehicles)
  }

  getVehicleById(vid:any){
    return this.vehicles.find((v)=>v.vehicleId==vid)
  }

  addNewVehicle(newVehicle:vehicle){
    this.vehicles.push(newVehicle)
  }

  updateVehicles(vid:any,newVehicle:any){
    let index = this.vehicles.findIndex((v)=>v.vehicleId==vid)
    if(index != -1){
      this.vehicles.splice(index,1,newVehicle)
    }
  }

  deleteVehicle(vid:any){
    let index = this.vehicles.findIndex((v)=>v.vehicleId==vid)
    if(index != -1){
      this.vehicles.splice(index,1)
    }
  }

  getBikes(){
    return of(this.vehicles.filter((v)=>v.vehicleType=='Bike'))
  }

  getCars(){
    return of(this.vehicles.filter((v)=>v.vehicleType=='Car'))
  }

  constructor() { }
}
