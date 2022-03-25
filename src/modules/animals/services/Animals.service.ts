import { Animal } from './../models/Animal.model';
import { AXIOS_CONNECTOR_API } from './../../../services/axios.service';
import { API_ANIMALS_ROUTE } from './../../../constants';

/**
 * Serviço responsável por se comunicar com api de animais
 */
export class AnimalService {

    getAnimals(): Promise<Array<Animal>> {
        //TODO: Implementar chamada para a api para realizar a operação;
        return AXIOS_CONNECTOR_API.get(API_ANIMALS_ROUTE)
            .then(response => response.data)
            .catch(err => console.error(err));
    }

    getAnimalById(animalId: string) {
        //TODO: Implementar chamada para a api para realizar a operação;
        return AXIOS_CONNECTOR_API.get(`${API_ANIMALS_ROUTE}/${animalId}`)
            .then(response => response.data)
            .catch(err => console.error(err));
    }

    delteAnimalById(animalId: string) {
        //TODO: Implementar chamada para a api para realizar a operação;
        return AXIOS_CONNECTOR_API.delete(`${API_ANIMALS_ROUTE}/${animalId}`)
            .catch(err => console.error(err));
    }

    createAnimal(animal: Animal) {
        //TODO: Implementar chamada para a api para realizar a operação;
        return AXIOS_CONNECTOR_API.post(API_ANIMALS_ROUTE)
            .catch(err => console.error(err));

    }

    updateAnimalById(animalId: string, animal: Animal) {
        //TODO: Implementar chamada para a api para realizar a operação;
        return AXIOS_CONNECTOR_API.put(`${API_ANIMALS_ROUTE}/${animalId}`, animal)
            .catch(err => console.error(err));
    }

}
