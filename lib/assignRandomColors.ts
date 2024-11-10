type colorprops={
    Year: number;
    ReporterISO3: string;
    ReporterName: string;
    total_exports: number;
    rank: number;
}

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
export const assignRandomColors = (data:colorprops[]) => {
    return data.map(entry => ({
        ...entry,
        fill: getRandomColor(),
    }));
};


