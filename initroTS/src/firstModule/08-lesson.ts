function pruebitaDecorator<T extends { new (...args:any[]): {} }>(
    constructor: T
) {
    return class extends constructor {
        pruebita = 'probanding';
        message = 'Vamoooos';
    }
}



@pruebitaDecorator
export class SuperClass {


    public pruebitaActual: string = 'xdxdddd';

    print() {
        console.log('Funcionaaaaaaaaaa')
    }
}


console.log( SuperClass );

const myClass = new SuperClass();
console.log( myClass );