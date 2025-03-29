import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation('error');

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };
    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p style={{ paddingBottom: 50, fontSize: 30 }}>
                {t('Произошла непредвиденная ошибка')}
            </p>
            <Button
                onClick={reloadPage}
                className={cls.PageErrorButton}
            >
                <span className={cls.PageErrorButtonTop}>
                    {' '}
                    {t('Обновить страницу')}
                    {' '}
                </span>
            </Button>
        </div>
    );
};

export default PageError;
