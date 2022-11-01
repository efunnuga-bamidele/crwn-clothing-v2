import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"

const Signin = () => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }
    return(
        <div>   
            <h1>Sign-In</h1>
            <button type="submit" onClick={logGoogleUser}>Google Sign-In</button> 
            <form>
                 <label>
                    <span>Email:</span>
                    <input type="email" placeholder="Enter email"/>
                 </label>   
                 <label>
                    <span>Password:</span>
                    <input type="password" placeholder="Enter password"/>
                 </label>  
                 <button type="submit">Sign-In</button> 
                
            </form>
        </div>
    )
}

export default Signin