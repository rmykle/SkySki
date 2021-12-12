interface ForecastEntry {
    readonly time: Date | null;
    readonly isoTime: string;
    readonly precipitation: number;
    readonly temperatur: number;
    readonly windSpeed: number;
}

export default ForecastEntry;
