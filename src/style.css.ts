import { globalStyle, style } from '@vanilla-extract/css';

const bottomBtn = style({
  position: 'fixed',
  zIndex: 2,
  width: '100%',
  padding: '12px',
  bottom: 0,
});

const container = style({
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  gap: '1rem',
});

const box = style({
  padding: '24px',
  borderRadius: '1rem',
  backgroundColor: '#F3F4F5',
  marginTop: '1rem',
});

const row = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const switchItem = style({});

globalStyle(`${switchItem} > span > span:first-child`, {
  fontWeight: 500,
});

const img = style({ margin: '0 auto', maxWidth: '327px', objectFit: 'contain' });

export const appSt = {
  bottomBtn,
  container,
  box,
  row,
  switchItem,
  img,
};
