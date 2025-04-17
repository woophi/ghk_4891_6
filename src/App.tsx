import { ButtonMobile } from '@alfalab/core-components/button/mobile';
import { Collapse } from '@alfalab/core-components/collapse';
import { Gap } from '@alfalab/core-components/gap';
import { PureCell } from '@alfalab/core-components/pure-cell';
import { Typography } from '@alfalab/core-components/typography';
import { ChevronDownMIcon } from '@alfalab/icons-glyph/ChevronDownMIcon';
import { ChevronRightMIcon } from '@alfalab/icons-glyph/ChevronRightMIcon';
import { ChevronUpMIcon } from '@alfalab/icons-glyph/ChevronUpMIcon';
import { InformationCircleMIcon } from '@alfalab/icons-glyph/InformationCircleMIcon';
import { OutsideMIcon } from '@alfalab/icons-glyph/OutsideMIcon';
import { useEffect, useState } from 'react';
import hb from './assets/hb.png';
import img1 from './assets/img1.png';
import img2 from './assets/img2.png';
import xd from './assets/xd.png';
import { LS, LSKeys } from './ls';
import { appSt } from './style.css';
import { ThxLayout } from './thx/ThxLayout';

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [collapsedItems, setCollapsedItem] = useState<string[]>([]);

  useEffect(() => {
    if (!LS.getItem(LSKeys.UserId, null)) {
      LS.setItem(LSKeys.UserId, Date.now());
    }
  }, []);

  const submit = () => {
    window.gtag('event', '4891_confirm_var6');
    setLoading(true);

    LS.setItem(LSKeys.ShowThx, true);
    setLoading(false);
    window.location.replace(
      'alfabank://multistep-route?fromModule=FORM&stepNumber=0&alias=invest-long-term-savings-open-alias&prefilledDataID=1001&version=2',
    );
  };
  if (LS.getItem(LSKeys.ShowThx, false)) {
    return <ThxLayout />;
  }

  return (
    <>
      <div className={appSt.container}>
        <img src={hb} width={80} height={80} />
        <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h1" view="small" font="system" weight="semibold">
          Программа долгосрочных сбережений
        </Typography.TitleResponsive>

        <Typography.Text view="primary-medium">
          Новый формат накоплений с Альфа НПФ — простой способ создать капитал для долгосрочных целей
        </Typography.Text>

        <PureCell style={{ marginTop: '1rem' }}>
          <PureCell.Content>
            <PureCell.Main>
              <Typography.Text view="primary-small" tag="p" color="secondary" defaultMargins={false}>
                Потенциальная годовая доходность
              </Typography.Text>
              <Typography.Text view="primary-medium">15%</Typography.Text>
            </PureCell.Main>
          </PureCell.Content>
          <PureCell.Graphics verticalAlign="center">
            <InformationCircleMIcon color="#B8B9C0" />
          </PureCell.Graphics>
        </PureCell>

        <PureCell>
          <PureCell.Content>
            <PureCell.Main>
              <Typography.Text view="primary-small" tag="p" color="secondary" defaultMargins={false}>
                Первоначальный взнос
              </Typography.Text>
              <Typography.Text view="primary-medium">От 2 000 ₽</Typography.Text>
            </PureCell.Main>
          </PureCell.Content>
        </PureCell>

        <PureCell>
          <PureCell.Content>
            <PureCell.Main>
              <Typography.Text view="primary-small" tag="p" color="secondary" defaultMargins={false}>
                Поддержка от государства
              </Typography.Text>
              <Typography.Text view="primary-medium">До 360 000 ₽</Typography.Text>
            </PureCell.Main>
          </PureCell.Content>
          <PureCell.Graphics verticalAlign="center">
            <InformationCircleMIcon color="#B8B9C0" />
          </PureCell.Graphics>
        </PureCell>

        <PureCell
          className={appSt.box}
          onClick={() => {
            window.gtag('event', '4891_info_var6');
          }}
        >
          <PureCell.Graphics verticalAlign="center">
            <img src={xd} width={32} height={32} />
          </PureCell.Graphics>
          <PureCell.Content>
            <PureCell.Main>
              <Typography.Text view="primary-small" tag="p" defaultMargins={false}>
                Рассказываем о программе за минуту
              </Typography.Text>
            </PureCell.Main>
          </PureCell.Content>
          <PureCell.Graphics verticalAlign="center">
            <ChevronRightMIcon color="#B8B9C0" />
          </PureCell.Graphics>
        </PureCell>

        <PureCell verticalPadding="compact">
          <PureCell.Graphics verticalAlign="center">
            <img src={img1} width={48} height={48} />
          </PureCell.Graphics>
          <PureCell.Content>
            <PureCell.Main>
              <Typography.Text view="primary-medium" tag="p" defaultMargins={false}>
                Налоговый вычет
              </Typography.Text>
              <Typography.Text view="primary-small" color="secondary" tag="p" defaultMargins={false}>
                13% от суммы взносов, до 52 000 ₽ в год
              </Typography.Text>
            </PureCell.Main>
          </PureCell.Content>
        </PureCell>

        <PureCell verticalPadding="compact">
          <PureCell.Graphics verticalAlign="center">
            <img src={img2} width={48} height={48} />
          </PureCell.Graphics>
          <PureCell.Content>
            <PureCell.Main>
              <Typography.Text view="primary-medium" tag="p" defaultMargins={false}>
                Накопления под защитой
              </Typography.Text>
              <Typography.Text view="primary-small" color="secondary" tag="p" defaultMargins={false}>
                Застрахованы государством на сумму до 2 800 000 ₽
              </Typography.Text>
            </PureCell.Main>
          </PureCell.Content>
        </PureCell>

        <Typography.TitleResponsive tag="h3" view="small" font="system" weight="medium">
          Частые вопросы
        </Typography.TitleResponsive>
        <div style={{ marginTop: '1rem' }}>
          <div
            onClick={() => {
              window.gtag('event', '4891_FAQ1_var6');
              setCollapsedItem(items => (items.includes('1') ? items.filter(item => item !== '1') : [...items, '1']));
            }}
            className={appSt.row}
          >
            <Typography.Text view="primary-medium" weight="medium">
              Какую сумму нужно внести при оформлении договора?
            </Typography.Text>
            {collapsedItems.includes('1') ? <ChevronUpMIcon color="#898991" /> : <ChevronDownMIcon color="#898991" />}
          </div>
          <Collapse expanded={collapsedItems.includes('1')}>
            <Typography.Text view="primary-medium">Первый и последующие взносы — от 2 000 ₽.</Typography.Text>
          </Collapse>
        </div>
        <div style={{ marginTop: '1rem' }}>
          <div
            onClick={() => {
              window.gtag('event', '4891_FAQ2_var6');
              setCollapsedItem(items => (items.includes('2') ? items.filter(item => item !== '2') : [...items, '2']));
            }}
            className={appSt.row}
          >
            <Typography.Text view="primary-medium" weight="medium">
              Как получить до 360 000 ₽ от государства?
            </Typography.Text>
            {collapsedItems.includes('2') ? <ChevronUpMIcon color="#898991" /> : <ChevronDownMIcon color="#898991" />}
          </div>
          <Collapse expanded={collapsedItems.includes('2')}>
            <Typography.Text view="primary-medium">
              Господдержка предоставляется в течение 10 лет после внесения первого взноса, если сумма взносов за год не
              меньше 2 000 ₽. Сумма господдержки зависит от размера ваших взносов и ежемесячного дохода, но не превышает 36
              000 ₽ в год.
            </Typography.Text>
          </Collapse>
        </div>
        <div style={{ marginTop: '1rem' }}>
          <div
            onClick={() => {
              window.gtag('event', '4891_FAQ3_var6');

              setCollapsedItem(items => (items.includes('3') ? items.filter(item => item !== '3') : [...items, '3']));
            }}
            className={appSt.row}
          >
            <Typography.Text view="primary-medium" weight="medium">
              Когда выплачиваются накопления?
            </Typography.Text>
            {collapsedItems.includes('3') ? <ChevronUpMIcon color="#898991" /> : <ChevronDownMIcon color="#898991" />}
          </div>
          <Collapse expanded={collapsedItems.includes('3')}>
            <Typography.Text view="primary-medium">
              Через 15 лет или по достижении возраста 55 лет для женщин и 60 лет для мужчин.
            </Typography.Text>
          </Collapse>
        </div>
        <div style={{ marginTop: '1rem' }}>
          <div
            onClick={() => {
              window.gtag('event', '4891_FAQ4_var6');

              setCollapsedItem(items => (items.includes('4') ? items.filter(item => item !== '4') : [...items, '4']));
            }}
            className={appSt.row}
          >
            <Typography.Text view="primary-medium" weight="medium">
              Смогу забрать деньги раньше?
            </Typography.Text>
            {collapsedItems.includes('4') ? <ChevronUpMIcon color="#898991" /> : <ChevronDownMIcon color="#898991" />}
          </div>
          <Collapse expanded={collapsedItems.includes('4')}>
            <Typography.Text view="primary-medium">
              Да, но при получении выкупной суммы в первые несколько лет действия договора сумма выплачивается не в полном
              объёме — действует понижающий коэффициент.
            </Typography.Text>
          </Collapse>
        </div>

        <div
          onClick={() => {
            window.gtag('event', '4891_moreinfo_var6');
            window.location.replace('https://alfa-npf.ru/');
          }}
          className={appSt.row}
          style={{ marginTop: '1rem' }}
        >
          <Typography.Text view="primary-medium">Подробные условия</Typography.Text>

          <OutsideMIcon color="#898991" />
        </div>
      </div>
      <Gap size={96} />

      <div className={appSt.bottomBtn}>
        <ButtonMobile loading={loading} block view="primary" onClick={submit}>
          К оформлению
        </ButtonMobile>
      </div>
    </>
  );
};
