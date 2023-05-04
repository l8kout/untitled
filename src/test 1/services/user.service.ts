import {IRes} from "../types/response.type";
import {IUser} from "../interfaces/user.interface";
import {urls} from "../constants/urls";
import {jsonAxiosService} from "./axios.servise";

const userService = {
    getAll: (): IRes<IUser[]> => jsonAxiosService.get(urls.jsonAPI.users),
    create: (user: IUser): IRes<IUser> => jsonAxiosService.post(urls.jsonAPI.users, user),
}

export {userService};