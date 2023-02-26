import styled from 'styled-components';

import { COLORS } from '@/constants/colors';
import { device } from '@/constants/media';

export const TableStyled = {
  Table: styled.table<{ width: number }>`
    border-collapse: collapse;
    width: ${props => (props.width)}%;
    
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
  THead: styled.thead`
    background-color: ${COLORS.paynesGray};
    border: 1px solid ${COLORS.paynesGray};
    th {
      padding: 10px;
      color: white;
      border: 1px solid transparent;
      &:first-child {
        border-radius: 10px 0 0 0;
      }
      &:last-child {
        border-radius: 0 10px 0 0;
      }
      @media ${device.mobileS} {
        padding: 2px;
      }
      @media ${device.mobileM} {
        padding: 5px;
      }
      @media ${device.tablet} {
        padding: 10px;
      }
    }
  `,
  TBody: styled.tbody<{ padding: number, border?: boolean }>`
    text-align: center;
    vertical-align: top;
    box-shadow: ${props => (props.border && `0 0 0 1px ${COLORS.paynesGray} inset`)};
    border-radius: 0 0 10px 10px;
    td {
      padding: ${props => (props.padding)}px 0;
    }
  `,
  TR: styled.tr`
    transition: ease-in 0.17s;
    &:hover {
      background-color: ${COLORS.azure};
      box-shadow: 0 0 0 1px ${COLORS.paynesGray} inset;
    }
  `,
  Marks: styled.div`
    display: flex;
    justify-content: center;
  `,
  Intersection: styled.div`
    margin-top: 10px;
  `,
}