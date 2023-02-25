import styled from 'styled-components';

import { COLORS } from '@/constants/colors';

export const TableStyled = {
  Table: styled.table<{ width: number }>`
    border-collapse: collapse;
    width: ${props => (props.width)}%;
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
  Marks: styled.div`
    display: flex;
    justify-content: center;
  `,
}