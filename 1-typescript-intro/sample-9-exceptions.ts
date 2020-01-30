function calculate(...args) {
    if (args.length === 0 )
        throw new Error("Brak argumentów")
    // Kod funkcji
}

try {
    calculate();
}
catch(e) {
    console.log(e)
}