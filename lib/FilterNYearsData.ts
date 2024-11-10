interface DataItem {
    Year: number;
    ReporterISO3: string;
    ReporterName: string;
    total_exports: number;
    rank: number;
}

export const filterLastNYears = (data: DataItem[], years: number): DataItem[] => {
    const latestYear = Math.max(...data.map(item => item.Year));
    return data.filter(item => item.Year >= latestYear - years + 1);
};

