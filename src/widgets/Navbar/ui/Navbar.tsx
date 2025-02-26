import React from 'react';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(cls.Navbar)}>
        <div className={cls.links}>
            <Link to="/" className={cls.mainLink}>Главная</Link>
            <Link to="/about">О сайте</Link>
        </div>
    </div>
);
