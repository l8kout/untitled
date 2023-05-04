import { useEffect, useState} from "react";

import {IComment} from "./task 2/interfacec/comment.interface"
import {commentService} from "./task 2/services/comment.service";
import {CommentForm} from "./task 2/components/CommentForm";
import {Comments} from "./task 2/components/Comments";
const App = () => {
    const [comments, setComments] = useState<IComment[]>([])

    useEffect(()=> {
        commentService.getAll().then(value => setComments(value.data));
    })

    return (
        <div>
            <CommentForm setComments={setComments}/>

            <Comments comments={comments}/>
        </div>
    );
};

export default App;


// //test 1
// import {UserForm} from "./test 1/components/UserForm";
// import {Users} from "./test 1/components/Users";
// import {FC, useEffect, useState} from "react";
// import {IUser} from "./test 1/interfaces/user.interface";
// import {userService} from "./test 1/services/user.service";
//
// interface IProps {
//
// }
//
// const App : FC<IProps> = () => {
//
//     const [users, setUsers] = useState<IUser[]>([]);
//
//     useEffect(() => {
//         userService.getAll().then(value => setUsers(value.data))
//     }, []);
//
//     return (
//         <div>
//             <UserForm setUsers={setUsers}/>
//
//             <hr/>
//
//             <Users users={users}/>
//         </div>
//     );
// };
//
// export default App;



//lesson 3
// import {useState} from "react";
// import {PageEnum} from "./hw 3/constants/page.enum";
// import {UserPage} from "./hw 3/pages/UserPage";
// import {CommentPage} from "./hw 3/pages/CommentPage";
// import {CarPage} from "./hw 3/pages/CarPage";
// import {Header} from "./hw 3/constants/Header/Header";
//
// const App = () => {
//     const [choice, setChoice] = useState<PageEnum>(PageEnum.USERS);
//
//     return (
//         <div>
//             <Header setChoice={setChoice}/>
//             {choice === PageEnum.USERS && <UserPage/>}
//             {choice === PageEnum.COMMENTS && <CommentPage/>}
//             {choice === PageEnum.CARS && <CarPage/>}
//         </div>
//     );
// };
//
// export default App;