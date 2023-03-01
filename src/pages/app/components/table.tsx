import { RefObject } from "react";
import { Bars } from "react-loader-spinner";

import { COLORS } from "@/constants/colors";

import { Student } from "./student";

import { TableStyled as Styled } from "./table.styled";

interface IProps {
  loading: boolean;
  students: IStudent[];
  loader: RefObject<HTMLDivElement>;
}

export const Table = (props: IProps) => {
  const { students, loader, loading } = props;
  return (
    <>
      <Styled.Wrapper>
        <Styled.Head color="white" columns={5}>
          <Styled.Cell>№</Styled.Cell>
          <Styled.Cell>Name</Styled.Cell>
          <Styled.Cell>Avatar</Styled.Cell>
          <Styled.Cell>Lectures Attended</Styled.Cell>
          <Styled.Cell>Total Lectures</Styled.Cell>
        </Styled.Head>
        <Styled.Body
          color={
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
              ? "white"
              : "black"
          }
        >
          {students.map((student, index) => (
            <Student student={student} index={index} key={index + 1} />
          ))}
        </Styled.Body>
      </Styled.Wrapper>
      <Styled.Intersection ref={loader} />
      {loading && (
        <Bars
          height="80"
          width="80"
          color={COLORS.paynesGray}
          ariaLabel="loading"
        />
      )}
    </>
  );
};
