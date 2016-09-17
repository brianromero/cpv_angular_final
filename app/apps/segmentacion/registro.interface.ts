export class RegistroInterface {
    constructor(
        public departamento : string = '',
        public provincia : string = '',
        public distrito : string = '',
        public zona : string = '',
        public num_aeu : number = 0
    ){}
}