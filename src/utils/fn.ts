/**
 * Utils for analysing and working with functions or classes.
 */
export let fn =
{
    getArgs(f: Function)
    {
        // First match everything inside the function argument parens.
        const args = func.toString().match(/function\s.*?\(([^)]*)\)/)[1]
        
        // Split the arguments string into an array comma delimited.
        return args.split(',').map(function(arg) {
            // Ensure no inline comments are parsed and trim the whitespace.
            return arg.replace(/\/\*.*\*\//, '').trim();
        }).filter(function(arg) {
            // Ensure no undefined values are added.
            return arg
        })
    },
}
