import React from 'react';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

export const Navbar = () => {
    const { t } = useTranslation('navbar');
    return (
        <div className={classNames(cls.Navbar)}>
            <div className={cls.links}>
                /
            </div>
        </div>
    );
};
