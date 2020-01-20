/**
 * Creates an new Object by inheriting the used object and basically that doesn't mean the properties
 * are copied, but we can use the previous object and can override the existing properties, so in this
 * case better use this operator in the existing object so that the context will vary based on which object
 * is calling that..
 *
 * This is Object.create();
 */


const existingObject = {
    initial: 'Tadivaka',
    modifyName : function () {
        return `${this.name} ${this.initial}`;
    }
};

const newObject = Object.create(existingObject);
console.log(newObject); // {},  Here if you see existing object props are not copied. but we can override. this is prototype.
newObject.initial = 'NewTadivaka'; // inherited and modified.
newObject.name = 'Gopi'; // inherited and modified.
console.log(newObject.modifyName()); // Gopi NewTadivaka, no need to pass name to the fn, because we are using this object
console.log(existingObject.modifyName()); // undefined Tadivaka, because name is not defined in existing obj

