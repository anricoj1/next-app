// types
import { RouteProps } from 'types';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBook, faLocationDot, faGifts, faUser } from '@fortawesome/free-solid-svg-icons';


const routes: Record<string, RouteProps> = {
    home: {
        title: "Home",
        path: '/',
        icon: <FontAwesomeIcon className="icon" icon={faHome} />
    },
    ourstory: {
        title: "Our Story",
        path: '/ourstory',
        icon: <FontAwesomeIcon className="icon" icon={faBook} />
    },
    wedding: {
        title: "Wedding",
        path: '/wedding',
        icon: <div></div>
    },
    location: {
        title: "Location",
        path: '/location',
        icon: <FontAwesomeIcon className="icon" icon={faLocationDot} />
    },
    gifts: {
        title: "Gifts",
        path: '/gifts',
        icon: <FontAwesomeIcon className="icon" icon={faGifts} />
    },
    profile: {
        title: "Profile",
        path: '/profile',
        icon: <FontAwesomeIcon className="icon" icon={faUser} />
    },
}

export default routes;