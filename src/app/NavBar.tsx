"use client"

import Link from 'next/link'
import {usePathname} from 'next/navigation';
import React, {useEffect, useState} from 'react';
import classnames from 'classnames';
import {Container, Flex} from '@radix-ui/themes';
import Image from "next/image";


const NavBar = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }
    return (
        <nav className='border-b mb-5 px-5 py-3'>
            <Container>
                <Flex justify="between" align="center">
                    <Flex align="center" gap="3">
                        <NavLinks/>

                    </Flex>
                </Flex>
            </Container>

        </nav>
    )
};


const NavLinks = () => {
    const currentPath = usePathname();

    const links = [
        {label: 'Home', href: '/'},
        {label: 'Favorites', href: '/favourites'}
    ]

    let email;
    return (
        <div>
            <ul className='flex space-x-7 items-center'>
                {links.map(link =>
                    <li key={link.href}>
                        <Link
                            className={classnames({
                                'nav-link': true,
                                '!text-zinc-900': link.href === currentPath,
                            })}
                            href={link.href}>{link.label}
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    )
}
export default NavBar;


