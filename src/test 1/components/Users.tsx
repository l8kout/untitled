import {FC} from "react";
import {User} from "./User";
import {IUser} from "../interfaces/user.interface";


interface IProps {
    users: IUser[];
}

const Users :FC<IProps>= ({users}) => {
    return (
        <div>
            {
                users.map(user => <User key={user.id} user={user} />)
            }
        </div>
    );
};

export {Users};