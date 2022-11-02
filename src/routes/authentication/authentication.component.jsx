//styles
import './authentication.styles.scss';

//Components
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";


const Authentcation = () => {



    return(
        <div className="authentication-container">   
           
            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default Authentcation