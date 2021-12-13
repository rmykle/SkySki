interface ForecastResponse {
    readonly properties: {
        readonly timeseries: {
            readonly time: string;
            readonly data: {
                readonly instant: {
                    readonly details: {
                        readonly wind_speed: number;
                        readonly air_temperature: number;
                    };
                };
                readonly next_6_hours: {
                    readonly details: {
                        readonly precipitation_amount: number;
                    };
                    readonly summary: {
                        readonly symbol_code: string;
                    };
                };
            };
        }[];
    };
}

export default ForecastResponse;
