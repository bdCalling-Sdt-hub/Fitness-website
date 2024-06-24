import { createContext, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../Store/hook";
import { Profile } from "../States/Authentication/ProfileSlice";

export const UserContext = createContext(null || {});
const UserProvider = ({ children }: { children: React.ReactNode }): React.JSX.Element => {
    const dispatch = useAppDispatch()
    const [openPopUp, setOpenPopUp] = useState(false)
    const { user: useData, loading: userloading } = useAppSelector(state => state.Profile)
    useEffect(() => {
        if (localStorage.getItem('token')) {
            dispatch(Profile())
        }
    }, [localStorage.getItem('token')])
    const userData = {
        useData, userloading, openPopUp, setOpenPopUp
    }
    return (
        <UserContext.Provider value={userData}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider
