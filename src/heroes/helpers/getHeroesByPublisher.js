import { heroes } from '../data/heroes.js';

export const getHeroesByPublisher = (publisher) => {
    // console.log(publisher);
    const validPublishers = ['DC Comics', 'Marvel Comics'];
    if (!validPublishers.includes(publisher)) {
        throw new Error(`El valor ${publisher} no es valido`);
    }
    return heroes.filter((heroe) => heroe.publisher === publisher);
}