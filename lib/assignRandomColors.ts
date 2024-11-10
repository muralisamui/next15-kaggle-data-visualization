// Function to generate a random color
const getRandomColor = (): string => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Utility function to assign random colors to each entry in data
export const assignRandomColors = (data: any[]): any[] => {
    return data.map(entry => ({
        ...entry,
        fill: getRandomColor(),
    }));
};

// Function to generate a random shade of blue
const getRandomBlueShade = (): string => {
    const blueIntensity = Math.floor(Math.random() * (255 - 128) + 128); // Random value between 128 and 255
    const redIntensity = Math.floor(Math.random() * 128); // Random value between 0 and 127
    const greenIntensity = Math.floor(Math.random() * 128); // Random value between 0 and 127

    return `rgb(${redIntensity}, ${greenIntensity}, ${blueIntensity})`;
};

export const assignBlueShades = (data: any[]): any[] => {
    return data.map(entry => ({
        ...entry,
        fill: getRandomBlueShade(),
    }));
};

// Function to generate a gradual shade of blue (from light to dark)
const getGradualBlueShade = (index: number, totalEntries: number): string => {
    const blueIntensity = Math.floor(255 - (index / totalEntries) * (255 - 128)); // Gradual decrease

    const redIntensity = 0;
    const greenIntensity = 0;

    return `rgb(${redIntensity}, ${greenIntensity}, ${blueIntensity})`;
};

export const assignGradualBlueShades = (data: any[]): any[] => {
    const totalEntries = data.length; 
    return data.map((entry, index) => ({
        ...entry,
        fill: getGradualBlueShade(index, totalEntries),
    }));
};
