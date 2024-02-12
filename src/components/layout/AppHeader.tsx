'use client';
import Link from 'next/link';
import React from 'react';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

export default function AppHeader() {
  const components: { title: string; href: string; description: string }[] = [
    {
      title: 'Alert Dialog',
      href: '/docs/primitives/alert-dialog',
      description:
        'A modal dialog that interrupts the user with important content and expects a response.',
    },
    {
      title: 'Hover Card',
      href: '/docs/primitives/hover-card',
      description:
        'For sighted users to preview content available behind a link.',
    },
    {
      title: 'Progress',
      href: '/docs/primitives/progress',
      description:
        'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
    },
    {
      title: 'Scroll-area',
      href: '/docs/primitives/scroll-area',
      description: 'Visually or semantically separates content.',
    },
    {
      title: 'Tabs',
      href: '/docs/primitives/tabs',
      description:
        'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
    },
    {
      title: 'Tooltip',
      href: '/docs/primitives/tooltip',
      description:
        'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
    },
  ];
  const headerLink = [
    {
      path: '/home',
      title: 'Home',
    },
    {
      path: '/movie',
      title: 'Movie',
      children: [
        {
          path: '/movie',
          title: 'Movie List',
        },
        {
          path: '/movie/create',
          title: 'Create Movie',
        },
      ],
    },
  ];
  return (
    <header className="fixed top-0 left-0 w-full pb-3 pt-3 bg-gradient-to-b	from-black dark z-50">
      <nav className="container">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <h1 className="text-3xl font-bold">Owl movie</h1>
            </NavigationMenuItem>
            {headerLink.map((link) => {
              return (
                <NavigationMenuItem key={link.title}>
                  {link.children?.length ? (
                    <>
                      <NavigationMenuTrigger className="bg-transparent">
                        {link.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                          {link.children?.map((component) => (
                            <ListItem
                              key={component.title}
                              href={component.path}
                            >
                              {component.title}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link href={link.path} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={[
                          navigationMenuTriggerStyle(),
                          'bg-transparent ',
                        ].join(' ')}
                      >
                        {link.title}
                      </NavigationMenuLink>
                    </Link>
                  )}
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
