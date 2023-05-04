const placeBaseURL = 'https://jsonplaceholder.typicode.com';
const carsBaseURL = 'https://owu.linkpc.net/carsAPI/v1/doc';

const users = '/users';
const commetns = '/comments ';
const cars = '/cars ';

const urls = {
    carAPI: {
        cars,
        byId: (id: number): string => `${cars}/${id}`,
    },
    plaseAPI: {
        users,
        commetns
    }
}

export {
    placeBaseURL,
    carsBaseURL,
    urls
}