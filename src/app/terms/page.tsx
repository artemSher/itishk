"use client";

import { PageLayout } from "@/components/layout/PageLayout";
import { CookiePopup } from "@/components/ui/CookiePopup/CookiePopup";
import styles from "./terms.module.css";

export default function TermsPage() {
  return (
    <PageLayout>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ</h1>

          <div className={styles.sections}>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>1. Термины и определения</h2>

              <div className={styles.subsections}>
                <div className={styles.subsection}>
                  <div className={styles.subsectionHeader}>
                    <span className={styles.subsectionNumber}>1.1</span>
                    <p className={styles.subsectionText}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aliquam a ligula turpis. Aliquam aliquet erat eget arcu
                      blandit, eu blandit ex scelerisque. Suspendisse id rhoncus
                      nisi. Nam lobortis pretium urna, ac mattis felis tincidunt
                      sit amet. In faucibus semper nunc, vitae sollicitudin nibh
                      porta in. Sed lacinia nisi ut nisl tincidunt eleifend.
                      Morbi velit ex, ultricies et ante eu, tempor varius lorem.
                      Fusce lacinia accumsan hendrerit. Aliquam vitae dolor
                      vitae felis consequat viverra fermentum nec quam.
                    </p>
                  </div>
                </div>

                <div className={styles.subsection}>
                  <div className={styles.subsectionHeader}>
                    <span className={styles.subsectionNumber}>1.2</span>
                    <p className={styles.subsectionText}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aliquam a ligula turpis. Aliquam aliquet erat eget arcu
                      blandit, eu blandit ex scelerisque. Suspendisse id rhoncus
                      nisi. Nam lobortis pretium urna, ac mattis felis tincidunt
                      sit amet. In faucibus semper nunc, vitae sollicitudin nibh
                      porta in. Sed lacinia nisi ut nisl tincidunt eleifend.
                      Morbi velit ex, ultricies et ante eu, tempor varius lorem.
                      Fusce lacinia accumsan hendrerit. Aliquam vitae dolor
                      vitae felis consequat viverra fermentum nec quam.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <CookiePopup />
    </PageLayout>
  );
}
