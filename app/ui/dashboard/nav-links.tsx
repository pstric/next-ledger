'use client';

import {
    BuildingLibraryIcon,
    BuildingStorefrontIcon, 
    DocumentDuplicateIcon, 
    HomeIcon, 
    LinkIcon, 
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
    { name: 'Home', href: '/dashboard', icon: HomeIcon },
    { name: 'Invoices', href: '/dashboard/invoices', icon: DocumentDuplicateIcon },
    { name: 'Stores', href: '/dashboard/stores', icon: BuildingStorefrontIcon },
    { name: 'Chains', href: '/dashboard/chains', icon: LinkIcon },
    { name: 'Cities', href: '/dashboard/cities', icon: BuildingLibraryIcon },
    { name: 'Item Categories', href: '/dashboard/itemCategories', icon: LinkIcon },
];

export default function NavLinks() {
    const pathname = usePathname();
    
    return (
        <>
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md_flex-none md:justify-start md:p-2 md:px-3",
                            {
                                "bg-sky-100 text-blue-600": pathname === link.href,
                            },
                        )}
                    >
                        <LinkIcon className="w-6" />
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
}