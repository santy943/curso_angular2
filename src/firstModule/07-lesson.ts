export function genericTypes<T>( argument: T ): T {

    return argument;
}

const amIString = genericTypes<string>('pruebita');
const amINumber = genericTypes<number>(2342);
const amIArray  = genericTypes<number[]>([34,43,34,34,23]);

console.log( amIString.split(' ') );
console.log( amINumber.toFixed() );
console.log( amIArray.join('-') );