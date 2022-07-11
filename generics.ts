
/**
 * for given a tuple, you need create a generic `Length`, 
 * pick the length of the tuple
 */
type Length<T extends readonly unknown[]> = T['length'];
/**
 *   Give an array, transform into an object type
 *   and the key/value must in the given array.
 */

type Tuple <T extends readonly any[]> ={
    [K in T[number]]: K
}
// return an object with key/value of the given array
type Obj<T extends readonly unknown[]> = { [K in keyof T]: T[K] };

// implement readonly 
type _Readonly<T> = {
  readonly [P in keyof T]: T[P];
}