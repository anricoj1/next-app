// react
import { Fragment } from 'react';

// framer
import { useCycle } from 'framer-motion';

// types
import { NavProps, RouteProps } from 'types';

// icons
import { FaBars } from 'react-icons/fa';
import { MdOutlineClose } from 'react-icons/md';

// components
import Backdrop from './FooterBackdrop';

const Footer = ({ routes }: NavProps) => {
    // opened
    const [open, cycleOpen] = useCycle(false, true);

    // links , anything in bottomLinks filter it out
    const bottomLinks: RouteProps[] = [routes.home, routes.location, routes.profile];
    const screenLinks: RouteProps[] = Object.values(routes).filter((link: RouteProps) => {
        return bottomLinks.includes(link) ? null : link;
    });

    return (
        <Fragment>
            {open && (
                <Backdrop screenLinks={screenLinks} />
            )}
            <div className="btm-nav btm-nav-sm bg-slate-50">
                {bottomLinks.map((link: RouteProps, index: number) => (
                    <button>
                        {link.icon}
                    </button>
                ))}
                <button className="text-black" onClick={() => cycleOpen()}>
                    {open ? <MdOutlineClose size="1.5rem" /> : <FaBars size="1.5rem" />}
                </button>
            </div>
        </Fragment>
    )
}

export default Footer;