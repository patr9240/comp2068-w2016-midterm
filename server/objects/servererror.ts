/// <reference path="../../typings/tsd.d.ts"/>

module objects{
    export class ServerError extends Error {
        constructor(outputString:string){
            super(outputString);
        }
    }
}