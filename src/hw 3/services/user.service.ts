import {IRes} from "../types/res.type";
import {IUser} from "../interfaces/user.interface";
import {placeAxiosService} from "./axios.services";
import {urls} from "../constants/urls";


const userService = {
    getAll:():IRes<IUser[]> => placeAxiosService.get(urls.plaseAPI.users),
    create: (user: IUser): IRes<IUser> => placeAxiosService.post(urls.plaseAPI.users, user)
}

export {userService};