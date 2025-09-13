function main()
{
    if (process.argv.length < 3)
    {
        console.log("Not a number");
        return;
    }
    const input = process.argv[2];
    const number = Number(input);
    if (!isNaN(number) && input.trim() !== "")
    {
        console.log(`My number: ${number}`);
    }
    else
    {
        console.log("Not a number");
    }
}

main();