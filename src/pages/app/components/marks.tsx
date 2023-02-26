import { useId } from "react";

import { TableStyled as Styled } from "./table.styled";

interface IProps {
  marks: IMark[];
}

export const Marks = (props: IProps) => {
  const { marks } = props;
  // as we do not have unique values for keys
  const uid = useId();
  return (
    <Styled.Marks>
      <Styled.Table width={95}>
        <Styled.THead>
          <tr>
            <th>Subject Title</th>
            <th>Total Marks</th>
            <th>Marks Obtained</th>
          </tr>
        </Styled.THead>
        <Styled.TBody padding={2}>
          {marks.map((mark, index) => (
            <Styled.TR key={uid + index}>
              <td>{mark.subjectTitle}</td>
              <td>{mark.totalMarks}</td>
              <td>{mark.marksObtained}</td>
            </Styled.TR>
          ))}
        </Styled.TBody>
      </Styled.Table>
    </Styled.Marks>
  );
};
