import {FC, useEffect, useState} from "react";
import {IUser} from "../interfaces/user.interface";
import {UserForm} from "../components/UserForm";
import {userService} from "../services/user.service";
import {Users} from "../components/Users";

interface IProps {

}

const UserPage:FC <IProps> = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        userService.getAll().then(value => setUsers(value.data))
    }, [])

    return (
        <div>
            <UserForm setUsers={setUsers}/>
            <hr/>
            <Users users={users}/>
        </div>
    );
};

export {UserPage};