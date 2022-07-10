// react
import { Fragment } from 'react';

// framer
import { useCycle } from 'framer-motion';

// types
import { NavProps, RouteProps } from 'types';

// icons
import { FaBars, FaAngleLeft } from 'react-icons/fa';

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
            <footer className="footer footer-center px-4 h-14 z-100 bg-white black-primary-content absolute bottom-0 shadow-md laptop:hidden">
                <ul className="flex w-full">
                    {bottomLinks.map((link: RouteProps, index: number) => (
                        <li key={index} className="mr-auto" style={{
                            animation: `linkFade 1s ease forwards ${index / 10 + 1}s`
                        }}>
                            <button className="btn btn-square btn-ghost">
                                {link.icon}
                            </button>
                        </li>
                    ))}
                    <button className="btn btn-square btn-ghost text-black" onClick={() => cycleOpen()}>
                        {open ? <FaAngleLeft size="1.5rem" /> : <FaBars size="1.5rem" />}
                    </button>
                </ul>
            </footer>
        </Fragment>
    )
}

export default Footer;