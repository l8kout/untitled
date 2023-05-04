import {IRes} from "../types/resp.type";
import {IComment} from "../interfacec/comment.interface";
import {commentAxiosService} from "./axios.service";
import {urls} from "../constants/urls";

const commentService = {
    getAll: (): IRes<IComment[]> => commentAxiosService.get(urls.commentAPI.comments),
    create: (comment: IComment): IRes<IComment> => commentAxiosService.post(urls.commentAPI.comments, comment)
}

export {commentService};