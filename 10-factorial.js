function factorial(n)
{
    const num = parseInt(n);
    if (isNaN(num) || num <= 0)
    {
        return 1;
    }
    return num * factorial(num - 1);
}

const input = process.argv[2];
const result = factorial(input);
console.log(result);