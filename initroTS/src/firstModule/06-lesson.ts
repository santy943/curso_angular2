export class Character {
    
    constructor( 
        public name: string, 
        public hp: number, 
        private magicLevel: number | string = 'No magic yet'
    ) {}

}

export class ActualState {

    constructor(
        public shield: string,
        public actualHp: number, 
        public sword: string,
        public Character: Character,
    ) {
        
    }

}

const link = new Character('Link',100 , 3);

const actualLink = new ActualState('Lynel shield',45,'Master sword',link);


console.log(actualLink)