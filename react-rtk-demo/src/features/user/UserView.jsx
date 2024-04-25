import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './userSlice';

function UserView() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, []); 

    const user = useSelector((state) => state.user);

    return (
        <div>
            <h2>Number Of User List :</h2>
            {user.loading && <div>loading...</div>}
            {!user.loading && user.errors ? <div>Error :{user.errors}</div> : null}
            {!user.loading && user.users.length ? (
                <ul>
                    {
                        user.users.map((user) => (
                        <li key={user.id}>{user.name}</li>
                        ))
                    }
                </ul>
            ) : null}
        </div>
    );
}

export default UserView;
