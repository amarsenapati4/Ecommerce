/*import { token } from 'morgan'*/
import {useState,useEffect,useContext,createContext} from 'react';
const AuthContext=createContext();

const AuthProvider=({children})=>{
    const [auth,setAuth]=useState({
        user:null,
        token:" "
    });
    useEffect(()=>
    {
        const data=localstorage.getItem('auth')
        if(data)
        {
            const parseData =JSON.parse(data)
            setAuth({
                ...auth,
                use:parseData.user,
                token:parseData.token


            })
        }
    } ,[auth]);
    return(
        <AuthContext.Provider value={[auth,setAuth]}>
            {children}
        </AuthContext.Provider>
    );
};
//custome hooks
const useAuth= () => useContext(AuthContext);
export {useAuth,AuthProvider};