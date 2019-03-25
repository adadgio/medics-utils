/**
 * Utils for analysing and working with functions or classes.
 */
export let fn =
{
    getArgs(f: Function)
    {
        const funStr = f.toString()
        return funStr.slice(funStr.indexOf('(') + 1, funStr.indexOf(')')).match(/([^\s,]+)/g)
    },
}
