import React from 'react';
import {Link} from "react-router-dom";
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar)}>
            <div className={cls.links}>
                <Link to={'/'} className={cls.mainLink}>Главная</Link>
                <Link to={'/about'}>О сайте</Link>
            </div>
        </div>
    );
};