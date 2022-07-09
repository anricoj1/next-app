// framer
import { motion, AnimatePresence } from 'framer-motion';

// types
import { RouteProps } from 'types';

const FooterBackdrop = ({ screenLinks }: { screenLinks: RouteProps[] }) => {
    return (
        <AnimatePresence>
            <motion.aside
                initial={{ width: 0 }}
                animate={{ width: '100%', zIndex: 100 }}
                className="backdrop-slate"
                exit={{
                    width: 0,
                    transition: {
                        delay: 0.7,
                        duration: 0.3
                    }
                }}
            >
                <motion.div
                    className="link-container"
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={{
                        closed: {
                            transition: {
                                staggerChildren: 0.2,
                                staggerDirection: -1
                            }
                        },
                        open: {
                            transition: {
                                staggerChildren: 0.2,
                                staggerDirection: 1
                            }
                        }
                    }}
                >
                    {screenLinks.map((route: RouteProps, index: number) => (
                        <motion.div
                            key={index}
                            whileHover={{
                                scale: 1.5
                            }}
                            variants={{
                                closed: {
                                    opacity: 0
                                },
                                open: {
                                    opacity: 1
                                }
                            }}
                        >
                            <a className="menu-link" href={route.path}>
                                {route.title}
                            </a>
                        </motion.div>
                    ))}
                    <motion.div
                        className="menu-link"
                        whileHover={{ scale: 1.5 }}
                        variants={{ closed: { opacity: 0 }, open: { opacity: 1 } }}
                    >
                        <button className="btn btn-square btn-primary w-72">
                            RSVP
                        </button>
                    </motion.div>
                </motion.div>
            </motion.aside>
        </AnimatePresence>
    )
}

export default FooterBackdrop;