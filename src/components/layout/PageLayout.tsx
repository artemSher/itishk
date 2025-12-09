import { ReactNode } from 'react';
import { Header } from '../common/Header/Header';
import styles from './PageLayout.module.css';
import FloatingWidget from '../common/FloatingWidget/FloatingWidget';

type PageLayoutProps = {
  children: ReactNode;
};

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className={styles.pageContainer}>
      <Header />
      <main className={styles.mainContent}>
        {children}
      </main>
      <FloatingWidget
        phone={"+7 495 123 35 85"}
        whatsapp={"79687343585"}
        telegram={"itishkino_admin"}
        tiktok={"https://www.tiktok.com/@itishkino?_r=1&_t=ZS-91v2xF8dyGS"}
        vk={"itishkino_school"}
      />
    </div>
  );
}
