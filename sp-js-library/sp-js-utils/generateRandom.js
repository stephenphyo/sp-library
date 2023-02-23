const generateRandom = (min, max, decimal) => {
    if (decimal < 0) return null;
    return (Math.floor((Math.random() * (max - min) + min) * (10 ** decimal)) / (10 ** decimal)).toFixed(decimal);
};

module.exports = generateRandom;