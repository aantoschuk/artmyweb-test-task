interface IMark {
  subjectTitle: string;
  totalMarks: number;
  marksObtained: number;
}

interface IStudent {
  name: string;
  avatarURL: string;
  lecturesAttended: number;
  totalLectures: number;
  marks: IMark[];
}

interface IFetchStudentsPayload {
  search: string;
  page: number;
}