import { RefObject } from "react";
import { Bars } from "react-loader-spinner";

import { COLORS } from "@/constants/colors";

import { Marks } from "./marks";

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
      <Styled.Table width={80}>
        <Styled.THead>
          <tr>
            <th>№</th>
            <th>Name</th>
            <th>Avatar</th>
            <th>Lectures Attended</th>
            <th>Total Lectures</th>
            <th>Marks</th>
          </tr>
        </Styled.THead>
        <Styled.TBody padding={10} border>
          {students.map((student, index) => (
            <Styled.TR key={student.name}>
              <td>{index + 1}</td>
              <td>{student.name}</td>
              <td>
                <img alt="student avatar" src={student.avatarURL} />
              </td>
              <td>{student.lecturesAttended}</td>
              <td>{student.totalLectures}</td>
              <td>
                <Marks marks={student.marks} />
              </td>
            </Styled.TR>
          ))}
        </Styled.TBody>
      </Styled.Table>
      {loading && (
        <Bars
          height="80"
          width="80"
          color={COLORS.paynesGray}
          ariaLabel="loading"
        />
      )}
      <Styled.Intersection ref={loader} />
    </>
  );
};
