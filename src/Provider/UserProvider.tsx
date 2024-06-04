import { createContext, useEffect, useState } from "react";
import { useAppDispatch } from "../Store/hook";
import { Profile } from "../States/Authentication/ProfileSlice";

const UserContext = createContext({});
const UserProvider = ({ children }: { children: React.ReactNode }): React.JSX.Element => {
    const [useData, setUserData] = useState({})
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(Profile())
            .then((res) => {
                setUserData(res.payload)
            })
    }, [])
    const userData = {
        useData
    }
    return (
        <UserContext.Provider value={userData}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider
