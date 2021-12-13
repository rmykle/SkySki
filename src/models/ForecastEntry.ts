interface ForecastEntry {
    readonly time: Date | null;
    readonly isoTime: string;
    readonly precipitation: number;
    readonly temperatur: number;
    readonly windSpeed: number;
    readonly iconName: string;
}

export default ForecastEntry;
