interface PlaceResponse {
    readonly metadata: {
        readonly side: number;
        readonly sokeStreng: string;
        readonly totaltAntallTreff: number;
        readonly treffPerSide: number;
        readonly viserFra: number;
        readonly viserTil: number;
    };
    readonly navn: {
        readonly stedsnavn: {
            readonly navnestatus: string;
            readonly skrivemåte: string;
            readonly språk: string;
        }[];
        readonly representasjonspunkt: {
            readonly øst: number;
            readonly nord: number;
        };
    }[];
}

export default PlaceResponse;
