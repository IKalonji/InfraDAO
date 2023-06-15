import React from 'react'

export default class AppStateService {

    constructor(){
        console.log("resolve: ",this.resolver);
        if (typeof AppStateService.instance === 'object') {
            console.log("instance returned");
            return AppStateService.instance;
        }
        AppStateService.instance = this;

        console.log("instance created");
    }
}
