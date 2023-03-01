import { useId, useState } from "react";

import { TableStyled as Styled } from "./table.styled";

interface IProps {
  student: IStudent;
  index: number;
}

export const Student = (props: IProps) => {
  const { student, index } = props;
  // as we do not have unique values for keys
  const uid = useId();

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Styled.Hovarable>
      <Styled.CellContainer onClick={handleClick}>
        <Styled.Cell>{index + 1}</Styled.Cell>
        <Styled.Cell>{student.name}</Styled.Cell>
        <Styled.Cell>
          <img alt="student avatar" src={student.avatarURL} />
        </Styled.Cell>
        <Styled.Cell>{student.lecturesAttended}</Styled.Cell>
        <Styled.Cell>{student.totalLectures}</Styled.Cell>
      </Styled.CellContainer>
      <Styled.Collapsible isVisible={isOpen}>
        <Styled.Head color="white" columns={3}>
          <div>Subject Title</div>
          <div>Total Marks</div>
          <div>Marks Obtained</div>
        </Styled.Head>
        {student.marks.map((mark, index) => (
          <Styled.Marks key={uid + index}>
            <div>{mark.subjectTitle}</div>
            <div>{mark.totalMarks}</div>
            <div>{mark.marksObtained}</div>
          </Styled.Marks>
        ))}
      </Styled.Collapsible>
    </Styled.Hovarable>
  );
};
