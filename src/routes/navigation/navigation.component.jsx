import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";

import { ReactComponent as Crown} from '../../assets/crown.svg'

//context
import { UserContext } from "../../context/user.context";

//firestore
import { signOutUser } from '../../utils/firebase/firebase.utils'

//Styles
import './navigation.styles.scss'

const Navigation = () => {
//destructuring the value from the context
    // const { currentUser, setCurrentUser } = useContext(UserContext);
    const { currentUser } = useContext(UserContext);

    // const signOutHandler = async () => {
    //     const res = await signOutUser();
    //     setCurrentUser(null);
    // }
    
    return(
        <>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <Crown />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>
                        SHOP
                    </Link>
                    {
                        currentUser ? (
                            <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
                        ) : (
                        <Link className="nav-link" to='/auth'>
                            SIGN-IN
                        </Link>
                        )
                    }
                    
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Navigation;