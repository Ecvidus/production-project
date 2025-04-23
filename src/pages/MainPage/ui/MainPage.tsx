import { BugButton } from 'app/providers/ErrorBoundary';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <div>
            <Counter />
            <BugButton />
            {t('Главная страница')}
            {/* <Counter /> */}
        </div>
    );
};

export default MainPage;
