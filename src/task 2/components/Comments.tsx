import {FC} from "react";
import {Comment} from "./Comment";
import {IComment} from "../interfacec/comment.interface";

interface IProps{
    comments: IComment[];
}
const Comments :FC<IProps>= ({comments}) => {
    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};