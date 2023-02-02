// Tell TS to import all PNG as modules *1
declare module '*.png' {
    const content: ImageSourcePropType;
    export default content;
}


/*
Dev's comments
1 - A module is a self-contained unit of code that exports some values, which can then be imported and used in another part of your code. Treating a .png file as a module, means 
*/

