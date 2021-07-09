export function logAction(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>): TypedPropertyDescriptor<any> {
    const originalMethod = descriptor.value; // save a reference to the original method


    descriptor.value = async function(...args: any[]) {    
        let functionName = propertyKey;
        // pre
        await console.log(`+++ [Page] ${target.constructor.name} [action] ${functionName} [args] ${args}`)

        // run original annotated method and store result
        const result = await originalMethod.apply(this, args);

        return result;
    };

return descriptor;
}

class AnotherImportantClass {

    @logAction
    sampleFunction(text: string) {
        console.log("Log from sampleFunction: " + text)
    }
}

new AnotherImportantClass().sampleFunction("hello")
