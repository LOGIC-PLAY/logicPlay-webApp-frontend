import { Fragment, useState } from "react";
import Link from 'next/link'
import styles from '../../styles/layout/header.module.css';
import { useRouter } from "next/router";

const Navbar = () => {
    const { pathname } = useRouter();
    const [active, setActive] = useState(pathname);

    const navItems = [
        { name: 'HOME', link: '/' },
        { name: 'BLOGS', link: '/blogs' },
        { name: 'MEMBERS', link: '/members' },
        { name: 'REGISTER FOR EVENT', link: '/register-for-event' },
        { name: 'ACCOUNT', link: '/account' },
    ];

    return (
        <Fragment>
            <div className={styles.club}>
                LOGIC PLAY
            </div>
            <div className={styles.menu}>
            {
                navItems.map(({ name, link }, index) => {
                    if (index) {
                        return (
                            <Fragment key={name}>
                                <span className={styles.dot}></span>
                                <Link href={link}>
                                    <a className={`${styles.item} ${active == link && styles.active}`} onClick={() => setActive(link)}>{name}</a>
                                </Link>
                            </Fragment>
                        )
                    } else {
                        return (
                            <Link href={link} key={name}>
                                <a className={`${styles.item} ${active == link && styles.active}`} onClick={() => setActive(link)}>{name}</a>
                            </Link>
                        )
                    }
                })
            }
            </div>
        </Fragment>
    );
};

const Header = () => {
    return (
        <div className={styles.header}>
            <Navbar />
        </div>
    );
};

export default Header;