import {Injectable} from '@angular/core';
@Injectable()
export class ExempleService{
    constructor(){}
savaData(data){
  console.log('save data at back end..');
}
getData(){
    console.log('Get data at back end...');
}

}