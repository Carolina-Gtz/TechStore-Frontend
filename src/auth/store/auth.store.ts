import type { User } from "@/interfaces/user.interface"
import { create } from "zustand"
import { loginAction } from "../actions/login.action";

type AuthState = {
    //properties
    user: User | null,
    token: string | null,
    
    /**Actions */
    login:( email:string, password:string) => Promise<boolean>;
    logout:( ) => void;

};

export const useAuthStore = create<AuthState>()((set) => ({
     user:  null,
    token:  null,

    login: async (email, password)=>{
        
    console.log({email,password})


try {
    
    const data = await loginAction(email, password);
    localStorage.setItem('token', data.token)
    set({ user:data.user, token: data.token});
    
    return true;

} catch (error) {
   
    localStorage.removeItem('token');
    set({ user:null, token: null});
    console.log(error)
    
    return false;
}
},
logout: ()=>{
    localStorage.removeItem('token')
    set({ user:null, token: null});
}
    
}))



// type AuthState = {
    
    /*Properties*/
    // count: number

    /**Actions */
    // inc: () => void
// }

// export const useStore = create<Store>()((set) => ({
//     count: 1,
//     inc: () => set((state) => ({ count: state.count + 1 })),
// }))
