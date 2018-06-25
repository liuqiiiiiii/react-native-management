import Index from './pages/index';

import Student from './pages/Student/index';
import StudentPersonalInformation from './pages/Student/PersonalInformation/index';
import ClassInformation from './pages/Student/ClassInformation/index';
import Announcement from './pages/Student/Announcement/index';
import Scores from './pages/Student/Scores/index';

import Teacher from './pages/Teacher/index';
import TeacherPersonalInformation from './pages/Teacher/PersonalInformation/index';
import ManageClassInformation from './pages/Teacher/ManageClassInformation/index';
import ModifyInformation from './pages/Teacher/ManageClassInformation/ModifyInformation';
import ReleaseAnnouncement from './pages/Teacher/ReleaseAnnouncement/index';
import AddAnnouncement from './pages/Teacher/ReleaseAnnouncement/AddAnnouncement';
import DisplayAnnouncement from './pages/Teacher/ReleaseAnnouncement/DisplayAnnouncement';
import ScoreEntry from './pages/Teacher/ScoreEntry/index';
import AddScore from './pages/Teacher/ScoreEntry/AddScore';

import Register from './pages/Register';

const Navigations = {
  Main: { screen: Index },

  Student: { screen: Student },
  StudentPersonalInformation: { screen: StudentPersonalInformation },
  ClassInformation: { screen: ClassInformation },
  Announcement: { screen: Announcement },
  Scores: { screen: Scores },

  Teacher: { screen: Teacher },
  ManageClassInformation: { screen: ManageClassInformation },
  ModifyInformation: { screen: ModifyInformation },
  TeacherPersonalInformation: { screen: TeacherPersonalInformation },
  ReleaseAnnouncement: { screen: ReleaseAnnouncement },
  AddAnnouncement: { screen: AddAnnouncement },
  DisplayAnnouncement: { screen: DisplayAnnouncement },
  ScoreEntry: { screen: ScoreEntry },
  AddScore: { screen: AddScore },

  Register: { screen: Register },
};

export default Navigations;
