"use client";

import { PageLayout } from "@/components/layout/PageLayout";
import styles from "./contract.module.css";

export default function OfferPage() {
  return (
    <PageLayout>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>ДОГОВОР-ОФЕРТА (ПУБЛИЧНАЯ ОФЕРТА)</h1>

          <div className={styles.subtitle}>
            на оказание услуг по проведению индивидуальных онлайн-занятий по
            программированию
          </div>
          <div className={styles.location}>г. Москва</div>

          <div className={styles.sections}>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                1. ОБЩИЕ ПОЛОЖЕНИЯ. ПРЕДМЕТ ДОГОВОРА
              </h2>
              <div className={styles.subsections}>
                <div className={styles.subsection}>
                  <div className={styles.subsectionHeader}>
                    <span className={styles.subsectionNumber}>1.1.</span>
                    <p className={styles.subsectionText}>
                      Настоящий документ является официальным публичным
                      предложением (публичной офертой) Индивидуального
                      предпринимателя Абдурахимова Амира Баходировича (ИНН
                      027509855212, ОГРНИП 323774600663900), далее именуемого
                      «Исполнитель», адресованным неопределенному кругу лиц –
                      законным представителям несовершеннолетних обучающихся,
                      далее именуемым «Заказчик», заключить договор оказания
                      услуг (далее – «Договор») на изложенных ниже условиях.
                    </p>
                  </div>
                </div>
                <div className={styles.subsection}>
                  <div className={styles.subsectionHeader}>
                    <span className={styles.subsectionNumber}>1.2.</span>
                    <p className={styles.subsectionText}>
                      В соответствии с пунктом 2 статьи 437 Гражданского кодекса
                      РФ, в случае принятия изложенных ниже условий и оплаты
                      услуг, лицо, совершившее акцепт этой оферты, становится
                      Заказчиком. Исполнитель и Заказчик совместно именуются
                      «Стороны».
                    </p>
                  </div>
                </div>
                <div className={styles.subsection}>
                  <div className={styles.subsectionHeader}>
                    <span className={styles.subsectionNumber}>1.3.</span>
                    <p className={styles.subsectionText}>
                      Предметом Договора является оказание Исполнителем
                      Заказчику платных образовательных услуг по проведению
                      индивидуальных дистанционных (онлайн) занятий по
                      программированию для несовершеннолетнего обучающегося
                      (далее – «Обучающийся»), указанного при регистрации на
                      Сайте, в соответствии с выбранной программой обучения и
                      оплаченным пакетом занятий.
                    </p>
                  </div>
                </div>
                <div className={styles.subsection}>
                  <div className={styles.subsectionHeader}>
                    <span className={styles.subsectionNumber}>1.4.</span>
                    <p className={styles.subsectionText}>
                      Услуги оказываются в формате «один преподаватель – один
                      обучающийся» посредством видеосвязи на согласованной
                      Сторонами платформе при условии соблюдения Заказчиком
                      технических требований (раздел 5 Договора).
                    </p>
                  </div>
                </div>
                <div className={styles.subsection}>
                  <div className={styles.subsectionHeader}>
                    <span className={styles.subsectionNumber}>1.5.</span>
                    <p className={styles.subsectionText}>
                      Акцептом (принятием) настоящей оферты является
                      осуществление Заказчиком полной предварительной оплаты
                      выбранного пакета занятий в порядке, предусмотренном
                      разделом 4 Договора. С момента зачисления денежных средств
                      на расчетный счет Исполнителя Договор считается
                      заключенным на условиях настоящей оферты.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>2. ПОРЯДОК ОКАЗАНИЯ УСЛУГ</h2>
              <div className={styles.subsections}>
                <div className={styles.subsection}>
                  <div className={styles.subsectionHeader}>
                    <span className={styles.subsectionNumber}>2.1.</span>
                    <p className={styles.subsectionText}>
                      График занятий (фиксированные день недели и время)
                      согласовывается Сторонами индивидуально до момента оплаты
                      и считается утвержденным после подтверждения Исполнителем
                      доступности преподавателя.
                    </p>
                  </div>
                </div>
                <div className={styles.subsection}>
                  <div className={styles.subsectionHeader}>
                    <span className={styles.subsectionNumber}>2.2.</span>
                    <p className={styles.subsectionText}>
                      Продолжительность одного занятия составляет 60
                      (шестьдесят) минут.
                    </p>
                  </div>
                </div>
                <div className={styles.subsection}>
                  <div className={styles.subsectionHeader}>
                    <span className={styles.subsectionNumber}>2.3.</span>
                    <p className={styles.subsectionText}>
                      Исполнитель предоставляет доступ к учебным материалам и
                      среде для практических заданий в рамках выбранной
                      программы обучения.
                    </p>
                  </div>
                </div>
                <div className={styles.subsection}>
                  <div className={styles.subsectionHeader}>
                    <span className={styles.subsectionNumber}>2.4.</span>
                    <p className={styles.subsectionText}>
                      Исполнитель вправе заменять постоянного преподавателя на
                      равноценного специалиста на период его временной
                      нетрудоспособности или отпуска.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                3. ПРАВА И ОБЯЗАННОСТИ СТОРОН
              </h2>
              <div className={styles.subsections}>
                <p className={styles.subsectionText}>
                  <strong>3.1. Исполнитель обязуется:</strong>
                </p>
                <div className={styles.subsection}>
                  <div className={styles.subsectionHeader}>
                    <span className={styles.subsectionNumber}>3.1.1.</span>
                    <p className={styles.subsectionText}>
                      Оказывать услуги в полном объеме и с надлежащим качеством,
                      в соответствии с согласованным графиком и программой.
                    </p>
                  </div>
                </div>
                <div className={styles.subsection}>
                  <div className={styles.subsectionHeader}>
                    <span className={styles.subsectionNumber}>3.1.2.</span>
                    <p className={styles.subsectionText}>
                      Заблаговременно (не менее чем за 3 часа) уведомлять
                      Заказчика о переносе занятия по инициативе Исполнителя
                      (болезнь преподавателя, форс-мажор).
                    </p>
                  </div>
                </div>
                <div className={styles.subsection}>
                  <div className={styles.subsectionHeader}>
                    <span className={styles.subsectionNumber}>3.1.3.</span>
                    <p className={styles.subsectionText}>
                      Не разглашать конфиденциальную информацию Заказчика и
                      Обучающегося.
                    </p>
                  </div>
                </div>

                <p className={styles.subsectionText}>
                  <strong>3.2. Исполнитель вправе:</strong>
                </p>
                <div className={styles.subsection}>
                  <div className={styles.subsectionHeader}>
                    <span className={styles.subsectionNumber}>3.2.1.</span>
                    <p className={styles.subsectionText}>
                      Вести аудио- и видеозапись занятий исключительно в целях
                      контроля качества услуг и внутреннего обучения
                      преподавателей.
                    </p>
                  </div>
                </div>
                <div className={styles.subsection}>
                  <div className={styles.subsectionHeader}>
                    <span className={styles.subsectionNumber}>3.2.2.</span>
                    <p className={styles.subsectionText}>
                      Требовать соблюдения Заказчиком и Обучающимся условий
                      настоящего Договора, в том числе технических требований и
                      правил переноса занятий.
                    </p>
                  </div>
                </div>
                <div className={styles.subsection}>
                  <div className={styles.subsectionHeader}>
                    <span className={styles.subsectionNumber}>3.2.3.</span>
                    <p className={styles.subsectionText}>
                      Приостановить оказание услуг при нарушении Заказчиком
                      сроков оплаты следующего пакета до окончания действующего.
                    </p>
                  </div>
                </div>
                <div className={styles.subsection}>
                  <div className={styles.subsectionHeader}>
                    <span className={styles.subsectionNumber}>3.2.4.</span>
                    <p className={styles.subsectionText}>
                      Использовать электронный адрес, номер телефона, логин и
                      иные данные, которые Заказчик предоставил при регистрации
                      на сайте, для отправки пользователю информационных и
                      рекламно-информационных материалов, в том числе с целью
                      информирования пользователя о деятельности школы и ходе
                      исполнения Договора.
                    </p>
                  </div>
                </div>

                <p className={styles.subsectionText}>
                  <strong>3.3. Заказчик обязуется:</strong>
                </p>
                <div className={styles.subsection}>
                  <div className={styles.subsectionHeader}>
                    <span className={styles.subsectionNumber}>3.3.1.</span>
                    <p className={styles.subsectionText}>
                      Своевременно и в полном объеме оплачивать услуги.
                    </p>
                  </div>
                </div>
                <div className={styles.subsection}>
                  <div className={styles.subsectionHeader}>
                    <span className={styles.subsectionNumber}>3.3.2.</span>
                    <p className={styles.subsectionText}>
                      Обеспечить Обучающегося необходимым оборудованием,
                      программным обеспечением и стабильным
                      интернет-соединением, соответствующим требованиям раздела
                      5.
                    </p>
                  </div>
                </div>
                <div className={styles.subsection}>
                  <div className={styles.subsectionHeader}>
                    <span className={styles.subsectionNumber}>3.3.3.</span>
                    <p className={styles.subsectionText}>
                      Соблюдать правила переноса и отмены занятий (раздел 6).
                    </p>
                  </div>
                </div>
                <div className={styles.subsection}>
                  <div className={styles.subsectionHeader}>
                    <span className={styles.subsectionNumber}>3.3.4.</span>
                    <p className={styles.subsectionText}>
                      Использовать оплаченный пакет занятий в течение
                      установленного срока его действия (п. 4.2). Занятия, не
                      использованные по окончании срока действия пакета,
                      считаются оказанными и возврату не подлежат.
                    </p>
                  </div>
                </div>
                <div className={styles.subsection}>
                  <div className={styles.subsectionHeader}>
                    <span className={styles.subsectionNumber}>3.3.5.</span>
                    <p className={styles.subsectionText}>
                      Не разглашать конфиденциальную информацию и иные данные,
                      предоставленные школой в связи с исполнением настоящего
                      Договора, не раскрывать и не разглашать такие факты или
                      информацию (кроме информации общедоступного характера)
                      какой-либо третьей стороне без предварительного
                      письменного согласия Исполнителя.
                    </p>
                  </div>
                </div>
                <div className={styles.subsection}>
                  <div className={styles.subsectionHeader}>
                    <span className={styles.subsectionNumber}>3.3.6.</span>
                    <p className={styles.subsectionText}>
                      Посещать Занятия лично. Заказчику запрещено передавать
                      доступ к Занятию третьим лицам, в том числе совместно
                      использовать один аккаунт. Заказчику также запрещено
                      любыми способами скачивать и распространять Занятия школы,
                      включая ссылки на занятия, записи Занятий, обучающие
                      материалы с целью получения денежных средств либо с целью
                      предоставления доступа третьим лицам, не приобретшим
                      услуги школы.
                    </p>
                  </div>
                </div>

                <p className={styles.subsectionText}>
                  <strong>3.4. Заказчик вправе:</strong>
                </p>
                <div className={styles.subsection}>
                  <div className={styles.subsectionHeader}>
                    <span className={styles.subsectionNumber}>3.4.1.</span>
                    <p className={styles.subsectionText}>
                      Требовать от Исполнителя предоставления услуг в
                      соответствии с условиями Договора.
                    </p>
                  </div>
                </div>
                <div className={styles.subsection}>
                  <div className={styles.subsectionHeader}>
                    <span className={styles.subsectionNumber}>3.4.2.</span>
                    <p className={styles.subsectionText}>
                      Отказаться от исполнения Договора в любое время, уплатив
                      Исполнителю часть цены пропорционально оказанным услугам и
                      компенсацию расходов (раздел 7).
                    </p>
                  </div>
                </div>
                <div className={styles.subsection}>
                  <div className={styles.subsectionHeader}>
                    <span className={styles.subsectionNumber}>3.4.3.</span>
                    <p className={styles.subsectionText}>
                      Получать от преподавателя или менеджера обратную связь об
                      успеваемости Обучающегося.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                4. СТОИМОСТЬ УСЛУГ И ПОРЯДОК РАСЧЕТОВ
              </h2>
              <div className={styles.subsections}>
                <div className={styles.subsection}>
                  <div className={styles.subsectionHeader}>
                    <span className={styles.subsectionNumber}>4.1.</span>
                    <p className={styles.subsectionText}>
                      Стоимость услуг определяется исходя из выбранного
                      Заказчиком тарифного пакета и составляет:
                    </p>
                  </div>
                </div>

                <div className={styles.packageBlock}>
                  <p className={styles.packageTitle}>
                    Пакет: 4 (четыре) занятия – 5 100 (Пять тысяч сто) рублей.
                  </p>
                  <ul className={styles.packageList}>
                    <li>Цена одного занятия в пакете: 1 275 руб.</li>
                    <li>
                      Срок действия пакета: 6 (шесть) недель с даты первого
                      занятия.
                    </li>
                  </ul>
                </div>

                <div className={styles.packageBlock}>
                  <p className={styles.packageTitle}>
                    Пакет: 8 (восемь) занятий – 9 600 (Девять тысяч шестьсот)
                    рублей.
                  </p>
                  <ul className={styles.packageList}>
                    <li>Цена одного занятия в пакете: 1 200 руб.</li>
                    <li>
                      Срок действия пакета: 10 (десять) недель с даты первого
                      занятия.
                    </li>
                  </ul>
                </div>

                <div className={styles.packageBlock}>
                  <p className={styles.packageTitle}>
                    Пакет: 24 (двадцать четыре) занятия – 26 400 (Двадцать шесть
                    тысяч четыреста) рублей.
                  </p>
                  <ul className={styles.packageList}>
                    <li>Цена одного занятия в пакете: 1 100 руб.</li>
                    <li>
                      Срок действия пакета: 28 (двадцать восемь) недель с даты
                      первого занятия.
                    </li>
                  </ul>
                </div>

                <div className={styles.subsection}>
                  <div className={styles.subsectionHeader}>
                    <span className={styles.subsectionNumber}>4.2.</span>
                    <p className={styles.subsectionText}>
                      Оплата производится Заказчиком в полном объеме
                      единовременно (100% предоплата) до даты проведения первого
                      занятия по выбранному пакету путем безналичного
                      перечисления на расчетный счет Исполнителя через платежный
                      шлюз на Сайте.
                    </p>
                  </div>
                </div>
                <div className={styles.subsection}>
                  <div className={styles.subsectionHeader}>
                    <span className={styles.subsectionNumber}>4.3.</span>
                    <p className={styles.subsectionText}>
                      Датой оплаты считается дата поступления денежных средств
                      на расчетный счет Исполнителя.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>5. ТЕХНИЧЕСКИЕ ТРЕБОВАНИЯ</h2>
              <div className={styles.subsections}>
                <div className={styles.subsection}>
                  <div className={styles.subsectionHeader}>
                    <span className={styles.subsectionNumber}>5.1.</span>
                    <p className={styles.subsectionText}>
                      Для получения услуг Заказчик обязан обеспечить наличие у
                      Обучающегося:
                    </p>
                  </div>
                </div>
                <ul className={styles.requirementsList}>
                  <li>
                    Компьютер/ноутбук с операционной системой Windows 7/10/11
                    или Mac OS X 10.10 и выше.
                  </li>
                  <li>
                    Стабильное интернет-соединение со скоростью не менее 5
                    Мбит/с.
                  </li>
                  <li>Веб-камера, микрофон и колонки/наушники.</li>
                  <li>Установленный браузер последней версии.</li>
                  <li>Установленное клиентское приложение для видеосвязи.</li>
                </ul>
                <div className={styles.subsection}>
                  <div className={styles.subsectionHeader}>
                    <span className={styles.subsectionNumber}>5.2.</span>
                    <p className={styles.subsectionText}>
                      Исполнитель не несет ответственности за качество услуги в
                      случае несоответствия оборудования или канала связи
                      Заказчика указанным требованиям.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                6. ПРАВИЛА ПЕРЕНОСА И ОТМЕНЫ ЗАНЯТИЙ
              </h2>
              <div className={styles.subsections}>
                <div className={styles.subsection}>
                  <div className={styles.subsectionHeader}>
                    <span className={styles.subsectionNumber}>6.1.</span>
                    <p className={styles.subsectionText}>
                      Перенос занятия по инициативе Заказчика допускается не
                      позднее, чем за 24 (двадцать четыре) часа до его начала
                      путем уведомления Исполнителя через согласованные каналы
                      связи (мессенджер, email). В этом случае занятие не
                      списывается с баланса и переносится на иную дату по
                      согласованию.
                    </p>
                  </div>
                </div>
                <div className={styles.subsection}>
                  <div className={styles.subsectionHeader}>
                    <span className={styles.subsectionNumber}>6.2.</span>
                    <p className={styles.subsectionText}>
                      В случае уведомления о переносе менее чем за 24 часа или
                      неявки Обучающегося на занятие без предупреждения, занятие
                      считается проведенным и списывается с баланса оплаченного
                      пакета.
                    </p>
                  </div>
                </div>
                <div className={styles.subsection}>
                  <div className={styles.subsectionHeader}>
                    <span className={styles.subsectionNumber}>6.3.</span>
                    <p className={styles.subsectionText}>
                      Перенос занятия по инициативе Исполнителя (болезнь
                      преподавателя, технические неполадки) осуществляется с
                      уведомлением Заказчика не менее чем за 3 (три) часа до
                      начала. Такое занятие не списывается с баланса и подлежит
                      переносу. Если перенос невозможен, стоимость данного
                      занятия возвращается Заказчику.
                    </p>
                  </div>
                </div>
                <div className={styles.subsection}>
                  <div className={styles.subsectionHeader}>
                    <span className={styles.subsectionNumber}>6.4.</span>
                    <p className={styles.subsectionText}>
                      Все перенесенные занятия должны быть проведены в течение
                      срока действия оплаченного пакета (п. 4.1).
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                7. ПОРЯДОК ВОЗВРАТА ДЕНЕЖНЫХ СРЕДСТВ
              </h2>
              <div className={styles.subsections}>
                <div className={styles.subsection}>
                  <div className={styles.subsectionHeader}>
                    <span className={styles.subsectionNumber}>7.1.</span>
                    <p className={styles.subsectionText}>
                      Заказчик вправе в любое время отказаться от исполнения
                      Договора, уведомив об этом Исполнителя в письменной форме
                      (по электронной почте).
                    </p>
                  </div>
                </div>
                <div className={styles.subsection}>
                  <div className={styles.subsectionHeader}>
                    <span className={styles.subsectionNumber}>7.2.</span>
                    <p className={styles.subsectionText}>
                      При отказе до начала оказания услуг (проведения первого
                      занятия по оплаченному пакету) Заказчику возвращается 100%
                      уплаченной суммы.
                    </p>
                  </div>
                </div>
                <div className={styles.subsection}>
                  <div className={styles.subsectionHeader}>
                    <span className={styles.subsectionNumber}>7.3.</span>
                    <p className={styles.subsectionText}>
                      При отказе после начала оказания услуг Заказчику
                      возвращается сумма за неиспользованные занятия,
                      рассчитанная по формуле:
                    </p>
                  </div>
                </div>
                <div className={styles.formulaBlock}>
                  <p className={styles.formula}>
                    Сумма к возврату = (Стоимость пакета - (Количество
                    проведенных занятий * Цена занятия в пакете)) * 0,8
                  </p>
                  <p className={styles.example}>
                    <strong>Пример расчета</strong> для пакета 8 занятий (9 600
                    руб., цена занятия 1 200 руб.), если проведено 2 занятия:
                  </p>
                  <p className={styles.calculation}>
                    (9 600 - (2 * 1 200)) * 0,8 = (9 600 - 2 400) * 0,8 = 7 200
                    * 0,8 = 5 760 руб. к возврату.
                  </p>
                  <p className={styles.note}>
                    <em>Примечание:</em> коэффициент 0,8 (удержание 20%)
                    является компенсацией фактически понесенных Исполнителем
                    расходов на резервирование времени преподавателя и
                    организационные издержки.
                  </p>
                </div>
                <div className={styles.subsection}>
                  <div className={styles.subsectionHeader}>
                    <span className={styles.subsectionNumber}>7.4.</span>
                    <p className={styles.subsectionText}>
                      Возврат осуществляется на банковскую карту Заказчика, с
                      которой была произведена оплата, в течение 14
                      (четырнадцати) рабочих дней с даты получения Исполнителем
                      письменного заявления на возврат.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>8. ОТВЕТСТВЕННОСТЬ СТОРОН</h2>
              <div className={styles.subsections}>
                <div className={styles.subsection}>
                  <div className={styles.subsectionHeader}>
                    <span className={styles.subsectionNumber}>8.1.</span>
                    <p className={styles.subsectionText}>
                      За неисполнение или ненадлежащее исполнение обязательств
                      по Договору Стороны несут ответственность в соответствии с
                      законодательством Российской Федерации.
                    </p>
                  </div>
                </div>
                <div className={styles.subsection}>
                  <div className={styles.subsectionHeader}>
                    <span className={styles.subsectionNumber}>8.2.</span>
                    <p className={styles.subsectionText}>
                      Исполнитель не дает гарантий абсолютного успеха в
                      обучении, так как результат зависит от индивидуальных
                      способностей Обучающегося и его вовлеченности.
                    </p>
                  </div>
                </div>
                <div className={styles.subsection}>
                  <div className={styles.subsectionHeader}>
                    <span className={styles.subsectionNumber}>8.3.</span>
                    <p className={styles.subsectionText}>
                      Исполнитель не несет ответственности за невозможность
                      оказания услуг по причинам, не зависящим от его воли
                      (форс-мажор), а также в случае нарушения Заказчиком
                      технических требований или правил переноса.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                9. ОБСТОЯТЕЛЬСТВА НЕПРЕОДОЛИМОЙ СИЛЫ (ФОРС-МАЖОР)
              </h2>
              <div className={styles.subsections}>
                <div className={styles.subsection}>
                  <div className={styles.subsectionHeader}>
                    <span className={styles.subsectionNumber}>9.1.</span>
                    <p className={styles.subsectionText}>
                      Стороны освобождаются от ответственности за частичное или
                      полное неисполнение обязательств по настоящему Договору,
                      если такое неисполнение явилось следствием обстоятельств
                      непреодолимой силы (форс-мажор), которые возникли после
                      заключения Договора, являются чрезвычайными и
                      непредотвратимыми при данных условиях.
                    </p>
                  </div>
                </div>
                <div className={styles.subsection}>
                  <div className={styles.subsectionHeader}>
                    <span className={styles.subsectionNumber}>9.2.</span>
                    <p className={styles.subsectionText}>
                      К обстоятельствам непреодолимой силы относятся, в
                      частности: стихийные бедствия (наводнения, землетрясения,
                      ураганы), пожары, эпидемии, пандемии, военные действия,
                      террористические акты, блокады, забастовки, введение
                      чрезвычайного положения, а также полное или частичное
                      прекращение работы интернет-провайдеров,
                      хостинг-провайдеров или платформ для видеосвязи, если
                      такое прекращение носит массовый характер и
                      неподконтрольно Исполнителю.
                    </p>
                  </div>
                </div>
                <div className={styles.subsection}>
                  <div className={styles.subsectionHeader}>
                    <span className={styles.subsectionNumber}>9.3.</span>
                    <p className={styles.subsectionText}>
                      Сторона, для которой наступили такие обстоятельства,
                      обязана в разумный срок, но не позднее 5 (пяти) рабочих
                      дней, уведомить другую сторону в письменной форме (включая
                      электронную почту) об их наступлении и предполагаемых
                      сроках воздействия.
                    </p>
                  </div>
                </div>
                <div className={styles.subsection}>
                  <div className={styles.subsectionHeader}>
                    <span className={styles.subsectionNumber}>9.4.</span>
                    <p className={styles.subsectionText}>
                      Если обстоятельства непреодолимой силы длятся более 30
                      (тридцати) календарных дней подряд, любая из Сторон вправе
                      отказаться от исполнения Договора в одностороннем порядке.
                      В этом случае Исполнитель возвращает Заказчику полную
                      стоимость неиспользованных занятий (без применения
                      удерживающего коэффициента 0,8) в течение 14
                      (четырнадцати) рабочих дней.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                10. ЗАКЛЮЧИТЕЛЬНЫЕ ПОЛОЖЕНИЯ
              </h2>
              <div className={styles.subsections}>
                <div className={styles.subsection}>
                  <div className={styles.subsectionHeader}>
                    <span className={styles.subsectionNumber}>10.1.</span>
                    <p className={styles.subsectionText}>
                      Настоящая оферта вступает в силу с момента ее размещения
                      на Сайте Исполнителя: https://itishkino.ru/
                    </p>
                  </div>
                </div>
                <div className={styles.subsection}>
                  <div className={styles.subsectionHeader}>
                    <span className={styles.subsectionNumber}>10.2.</span>
                    <p className={styles.subsectionText}>
                      Исполнитель оставляет за собой право вносить изменения в
                      условия оферты. Изменения вступают в силу с момента их
                      публикации на Сайте и распространяются на вновь
                      заключаемые Договоры. Для действующих Договоров условия
                      применяются только по письменному согласию Заказчика.
                    </p>
                  </div>
                </div>
                <div className={styles.subsection}>
                  <div className={styles.subsectionHeader}>
                    <span className={styles.subsectionNumber}>10.3.</span>
                    <p className={styles.subsectionText}>
                      Все споры и разногласия разрешаются Сторонами путем
                      переговоров. При неурегулировании спора претензионным
                      порядком в течение 30 дней, дело подлежит рассмотрению в
                      суде по месту нахождения Исполнителя.
                    </p>
                  </div>
                </div>
                <div className={styles.subsection}>
                  <div className={styles.subsectionHeader}>
                    <span className={styles.subsectionNumber}>10.4.</span>
                    <p className={styles.subsectionText}>
                      Совершая акцепт оферты, Заказчик подтверждает, что
                      ознакомлен со всеми условиями Договора, понимает и
                      полностью принимает их.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>11. РЕКВИЗИТЫ</h2>
              <div className={styles.subsections}>
                <p className={styles.subsectionText}>
                  <strong>РЕКВИЗИТЫ И КОНТАКТЫ ИСПОЛНИТЕЛЯ:</strong>
                </p>
                <div className={styles.contactsBlock}>
                  <p>
                    Индивидуальный предприниматель Абдурахимов Амир Баходирович
                  </p>
                  <p>ОГРНИП: 323774600663900</p>
                  <p>ИНН: 027509855212</p>
                  <p>
                    Юридический адрес: 117574, г. Москва, Одоевского проезд, 7,
                    6, 641
                  </p>
                  <p>Расчетный счет: 40802810538000070878</p>
                  <p>Банк: ПАО Сбербанк</p>
                  <p>БИК: 044525225</p>
                  <p>Корр. счет: 30101810400000000225</p>
                  <p>Телефон: 8(495) 123-35-85</p>
                  <p>E-mail: tiam11@bk.ru</p>
                  <p>Сайт: https://itishkino.ru/</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
