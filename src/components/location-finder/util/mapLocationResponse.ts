import { AxiosResponse } from 'axios';
import Place from '../../../models/Place';
import PlaceResponse from '../../../models/responses/PlaceResponse';

const targetLanguage = 'Norsk';

export default (response: AxiosResponse<PlaceResponse>): Place[] =>
    response.data.navn.map((place, index) => {
        const name = place.stedsnavn.find((n) => n.språk === targetLanguage)?.skrivemåte ?? '';
        return {
            name,
            lat: place.representasjonspunkt.nord,
            long: place.representasjonspunkt.øst,
            generatedId: name + index,
        };
    });
