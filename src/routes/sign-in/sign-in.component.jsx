

//Firebase imports
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"

//Components
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";


const Signin = () => {

    const logGooglePopupUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user); 
    }

    return(
        <div>   
            <h1>Sign-In</h1>
            <button type="submit" onClick={logGooglePopupUser}>Google Sign-In with Google Popup</button> 
            <SignUpForm />
        </div>
    )
}

export default Signin