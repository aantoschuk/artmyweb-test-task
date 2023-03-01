import styled from 'styled-components';

import { COLORS } from '@/constants/colors';
import { device } from '@/constants/media';

export const TableStyled = {
  Wrapper: styled.div`
    width: 90%;
    @media ${device.mobileS} {
      width: 100%;
      font-size: 0.5em;
    }
    @media ${device.mobileM} {
      font-size: 0.7em;
    }
    @media ${device.tablet} {
      width: 90%;
      font-size: 1em;
    }
  `,
  Head: styled.div < { color: string, columns: number } > `
    display: grid;
    padding: 5px 0;
    border-radius: 10px 10px 0 0;
    text-align: center;
    color: ${props => (props.color)};
    grid-template-columns: repeat(${props => (props.columns)}, 1fr); 
    background-color: ${COLORS.paynesGray};
    border: 1px solid ${COLORS.paynesGray};

  `,

  Cell: styled.div`
    text-align: center;
  `,

  CellContainer: styled.div`
    cursor: pointer;
    padding: 8px 0;
    display: grid;
    grid-template-columns: repeat(5, 1fr); 
    transition: ease-in 0.2s;

  `,

  Hovarable: styled.div`
    &:hover {
      background-color: ${COLORS.azure};
      box-shadow: 0 0 0 1px ${COLORS.paynesGray};
    }
  `,
  Body: styled.div<{ color: string }>`
    color: ${props => (props.color)};
    border: 1px solid ${COLORS.paynesGray};
  `,

  Collapsible: styled.div<{ isVisible: boolean }>`
    margin: 5px 0;
    padding: 0 5px;
    display: ${props => (props.isVisible ? 'block' : 'none')};
    `,

  Marks: styled.div`
    display: grid;
    text-align: center;
    grid-template-columns: repeat(3, 1fr); 
  `,

  Intersection: styled.div`
    margin-top: 10px;
  `,
}