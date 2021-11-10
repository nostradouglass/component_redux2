
import { useActions } from "../hooks/useActions"
import { useTypedSelector } from "../hooks/useTypedSelector";

const UsersList = () => {

    const { getAllUsers } = useActions()

    const { data, loading, error } = useTypedSelector((state) => state.users);

    const getUsers = () => {
        getAllUsers()
    }

    return (
        <div>
           <button onClick={getUsers}>Get Users</button>
           {error && <h3>Error</h3>}
           {loading && <h3>Loading...</h3>}
           <ul style={{listStyle: "none"}}>
           { !error && !loading && 
           data.map((user) => {
               return <li key={user.id}>
                   <p>name:{user.name}</p>
                   <p>email: {user.email}</p>
                   <br />
                   </li>
           })
           }
           </ul>
        </div>
    )
}

export default UsersList