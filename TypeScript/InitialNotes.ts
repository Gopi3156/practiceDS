// Good Features of TS

/*
* 1) we no longer need to use this in constructor again to set the values we can just use
* public with the parameter name and typescript will automatically declare that variable and assign the value.
* will add the example
*
* 2) we can use the short imports in typescript like no longer need to use big relative paths like
* ../../../myfile.ts we can use like @gopi-app/myfile.ts
* we need to add @gopi-app namespace to the tsconfig thats it
* https://www.youtube.com/watch?v=1FOfL6bDSF4
*
*
* 3) we can use the composition in typescript without inheritence like clubbing multiple functions in to single
* object that has a function.
*
* 4) using readOnly in the class since we can't use const for classLevel variable.
*
* 5) using types on the responses which helps during compilation phase
*
* 6) using inheritence, extends, super and other features of OOPS.
*
* 7) using dynamic keys on a interface using typescript
*
* interface Options {
*  [key:string]: string .. so the key can be dynamic.
* }
* */