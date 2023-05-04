import {IRes} from "../types/res.type";
import {IComment} from "../interfaces/comment.interface";
import {placeAxiosService} from "./axios.services";
import {urls} from "../constants/urls";

const commentService = {
    getAll: (): IRes<IComment[]> => placeAxiosService.get(urls.plaseAPI.commetns),
    create: (comment: IComment): IRes<IComment> => placeAxiosService.post(urls.plaseAPI.commetns, comment)
}

export {commentService};