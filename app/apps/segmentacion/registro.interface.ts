export class RegistroInterface {
    constructor(
        public DEPARTAMENTO : string = '',
        public PROVINCIA : string = '',
        public DISTRITO : string = '',
        public ZONA : string = '',
        public NUM_AEU : number = 0,
        public EST_SEG : string = '',
        public NUM_SEC : number = 0
    ){}
}