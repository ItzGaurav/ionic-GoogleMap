import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var google: any;

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    @ViewChild('map') mapref: ElementRef;


    constructor(public navCtrl: NavController) {

    }

    ionViewDidLoad() {
        this.showmap();
    }

    showmap() {
        //location

        const location = new google.maps.LatLng(12.984234, 77.693360);


        //Map

        const option = {
            center: location,
            zoom: 10
        }

        const map = new google.maps.Map(this.mapref.nativeElement, option);
        this.addMarker(location, map);
    }

    addMarker(postion, map) {
        return new google.maps.Marker({
            postion, map
        });
    }

}
