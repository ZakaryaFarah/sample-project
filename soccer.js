try {
    const players = ["Ronaldo", "Messi", "Ibra", "Neymar"];

players.forEach((player, index) => {
    console.log(`${index + 1}. ${player}`);
});
} catch (err) {
    console.error(" Error: " + err.message);
    process.exit(1);
}
