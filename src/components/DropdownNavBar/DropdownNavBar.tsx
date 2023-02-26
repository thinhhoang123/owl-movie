import * as React from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';
import styles from './DropdownNavBar.module.scss';
export interface IDropdownNavBarProps {
  path?: string;
  page?: string;
  child?: { path: string; page: string }[];
}
function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export default function DropdownNavBar(props: IDropdownNavBarProps) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button>
        <a className="flex w-full justify-center">{props.page}</a>
      </Menu.Button>

      <Transition
        as={React.Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className={styles.dropdownMenuContain}>
          <div className="py-1">
            {props.child?.map((route, index) => {
              return (
                <Menu.Item key={index}>
                  {({ active }) => (
                    <Link to={route.path} className={styles.dropdownLink}>
                      {route.page}
                    </Link>
                  )}
                </Menu.Item>
              );
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
