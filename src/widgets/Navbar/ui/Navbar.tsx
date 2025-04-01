import React, { useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

export const Navbar = () => {
    const { t } = useTranslation('navbar');
    const [isAuthModal, setIsAuthModal] = React.useState(false);

    const onToggleNodal = useCallback(() => {
        setIsAuthModal((prevState) => !prevState);
    }, []);

    return (
        <div className={classNames(cls.Navbar)}>
            <Button
                theme={ButtonTheme.CLEAR_IINVERTED}
                className={cls.links}
                onClick={onToggleNodal}
            >
                {t('Войти')}
            </Button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Modal isOpen={isAuthModal} onClose={onToggleNodal}>
                kgfdshjghsfdkljhgkljdshfglhs;lhl;gh;lhs ;h hsd;ljfhgjkdfshgklhdflkh
            </Modal>
        </div>
    );
};
