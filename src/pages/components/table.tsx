import { Marks } from "./marks";

import { TableStyled as Styled } from "./table.styled";

interface IProps {
  students: IStudent[];
}

export const Table = (props: IProps) => {
  const { students } = props;
  return (
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
          <tr key={student.name}>
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
          </tr>
        ))}
      </Styled.TBody>
    </Styled.Table>
  );
};
