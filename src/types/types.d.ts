interface IMark {
  subjectCode: {
    subjectTitle: string;
    totalMarks: number;
    marksObtained: number;
  }
}

interface IStudent {
  name: string;
  avatarURL: string;
  lecturesAttended: number;
  totalLectures: number;
  marks: IMark[];
}