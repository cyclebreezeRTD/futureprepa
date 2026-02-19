import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Welcome from './pages/Welcome';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import Onboarding from './pages/Onboarding';
import Language from './pages/Language';
import Role from './pages/Role';
import Preparing from './pages/Preparing';

import Login from './pages/Login';
import Notify from './pages/Notify';
import FreeTrial from './pages/FreeTrial';
import FinalWelcome from './pages/FinalWelcome';
import CustomTabBar from './pages/CustomTabBar';
import Home from './pages/Home';
import Category from './pages/dashboard/Category';
import Explore from './pages/dashboard/Explore';
import MesaageCat from './pages/dashboard/MesaageCat';
import MessageList from './pages/dashboard/MessageList';
import ChatList from './pages/dashboard/ChatList';
import ChatRoom from './pages/dashboard/ChatRoom';
import Learn from './pages/Learn/Learn';
import WaecDetails from './pages/Learn/WaecDetails';
import WaecPractice from './pages/Learn/WaecPractice';
import WaecQuizPractice from './pages/Learn/WaecQuizPractice';
import WaecQuestion from './pages/Learn/WaecQuestion';
import Learn2 from './pages/Learn/Learn2';
import PracticeComplete from './pages/Learn/PracticeComplete';
import AIChat from './pages/Learn/AIChat';
import AIChatConversation from './pages/Learn/AIChatConversation';
import Insights from './pages/Learn/Insights';
import LearnCourses from './pages/Learn/LearnCourses';
import CourseDetails from './pages/Learn/CourseDetails';
import TopicPractice from './pages/Learn/TopicPractice';
import QuizLectures from './pages/Learn/QuizLectures';
import QuizQuestion from './pages/Learn/QuizQuestion';
import STEMLearning from './pages/Learn/STEMLearning';
import CodingLesson from './pages/Learn/CodingLesson';
import TailoringCourse from './pages/Learn/TailoringCourse';
import TailoringLesson from './pages/Learn/TailoringLesson';
import InsightsAnalytics from './pages/Insight/InsightsAnalytics';
import Opportunities from './pages/Opportunity/Opportunities';
import OpportunitiesPage from './pages/Opportunity/OpportunitiesPage';
import EventsPage from './pages/Opportunity/EventsPage';
import AllEventsPage from './pages/Opportunity/AllEventsPage';
import JobDetailPage from './pages/Job/JobDetailPage';
import UniversityDetails from './pages/Job/UniversityDetails';
import EventDetails from './pages/Workshop/EventDetails';
import EventTicket from './pages/Workshop/EventTicket';
import EventCheckout from './pages/Workshop/EventCheckout';
import EventRegistrationSuccess from './pages/Workshop/EventRegistrationSuccess';
import PaymentCheckout from './pages/Workshop/PaymentCheckout';
import AllEventTicket from './pages/Workshop/AllEventTicket';
import SignUp from './pages/SignUp';
import CommunityPage from './pages/Community/CommunityPage';
import ICANFeedPage from './pages/Community/ICANFeedPage';
import WAECFeedPage from './pages/Community/WAECFeedPage';
import AskQuestionPage from './pages/Community/AskQuestionPage';
import MentorPage from './pages/Community/MentorPage';
import ProfilePage from './pages/Community/ProfilePage';
import MessagePage from './pages/Community/MessagePage';
import DashboardStats from './pages/SchDashboard/DashboardStats';
import ManageStudents from './pages/SchDashboard/ManageStudents';
import StudentDetail from './pages/SchDashboard/StudentDetail';
import ManageParent from './pages/SchDashboard/ManageParent';
import AddTeacher from './pages/SchDashboard/AddTeacher';
import ParentInvited from './pages/SchDashboard/ParentInvited';
import InviteParent from './pages/SchDashboard/InviteParent';
import ParentDash from './pages/SchDashboard/ParentDash';
import WhiteTab from './pages/WhiteTab';
import { useLocation } from 'react-router-dom';
setupIonicReact();
const TabBarSelector: React.FC = () => {
  const location = useLocation();
  
  if (location.pathname === '/tabs/home') {
    return <CustomTabBar />;
  }
  return <WhiteTab />;
};
const App: React.FC = () => (



  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        {/* Welcome screen - NO TABS */}
        <Route exact path="/welcome">
          <Welcome />
        </Route>
        <Route exact path="/onboarding">
          <Onboarding />
        </Route>
        <Route exact path="/language">
          <Language />
        </Route>
        <Route exact path="/role">
          <Role />
        </Route>
        <Route exact path="/preparing">
          <Preparing />
        </Route>
        <Route exact path="/sign-up">
          <SignUp />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/notify">
          <Notify />
        </Route>
        <Route exact path="/free-trial">
          <FreeTrial />
        </Route>
        
        <Route exact path="/final-welcome">
          <FinalWelcome />
        </Route>
        
    
       <Route path="/tabs">
  <IonTabs>
    <IonRouterOutlet>
      <Route exact path="/tabs/home">
        <Home />
      </Route>

      {/* All other routes */}
      <Route exact path="/tabs/category"><Category /></Route>
      <Route exact path="/tabs/explore"><Explore /></Route>
      <Route exact path="/tabs/message-category"><MesaageCat /></Route>
      <Route exact path="/tabs/message-list"><MessageList /></Route>
      <Route exact path="/tabs/chat-list"><ChatList /></Route>
      <Route exact path="/tabs/chat-room"><ChatRoom /></Route>
      <Route exact path="/tabs/learn"><Learn /></Route>
      <Route exact path="/tabs/learns"><Learn2 /></Route>
      <Route exact path="/tabs/practice-complete"><PracticeComplete /></Route>
      <Route exact path="/tabs/waec-details"><WaecDetails /></Route>
      <Route exact path="/tabs/topic-practice"><TopicPractice /></Route>
      <Route exact path="/tabs/quiz-question"><QuizQuestion /></Route>
      <Route exact path="/tabs/stem-learning"><STEMLearning /></Route>
      <Route exact path="/tabs/ai-chat"><AIChat /></Route>
      <Route exact path="/tabs/ai-chat-conversation"><AIChatConversation /></Route>
      <Route exact path="/tabs/insights"><Insights /></Route>
      <Route exact path="/tabs/learn-courses"><LearnCourses /></Route>
      <Route exact path="/tabs/quiz-lectures"><QuizLectures /></Route>
      <Route exact path="/tabs/course-details"><CourseDetails /></Route>
      <Route exact path="/tabs/tailoring-course"><TailoringCourse /></Route>
      <Route exact path="/tabs/tailoring-lesson"><TailoringLesson /></Route>
      <Route exact path="/tabs/insight-analytics"><InsightsAnalytics /></Route>
      <Route exact path="/tabs/opportunity"><Opportunities /></Route>
      <Route exact path="/tabs/opportunity-page"><OpportunitiesPage /></Route>
      <Route exact path="/tabs/event"><EventsPage /></Route>
      <Route exact path="/tabs/all-event"><AllEventsPage /></Route>
      <Route exact path="/tabs/job-detail"><JobDetailPage /></Route>
      <Route exact path="/tabs/uni-detail"><UniversityDetails /></Route>
      <Route exact path="/tabs/event-detail"><EventDetails /></Route>
      <Route exact path="/tabs/event-ticket"><EventTicket /></Route>
      <Route exact path="/tabs/event-checkout"><EventCheckout /></Route>
      <Route exact path="/tabs/event-success"><EventRegistrationSuccess /></Route>
      <Route exact path="/tabs/payment-checkout"><PaymentCheckout /></Route>
      <Route exact path="/tabs/allevent-ticket"><AllEventTicket /></Route>
      <Route exact path="/tabs/community"><CommunityPage /></Route>
      <Route exact path="/tabs/ican"><ICANFeedPage /></Route>
      <Route exact path="/tabs/waec-feed"><WAECFeedPage /></Route>
      <Route exact path="/tabs/ask-question"><AskQuestionPage /></Route>
      <Route exact path="/tabs/mentor"><MentorPage /></Route>
      <Route exact path="/tabs/profile-page"><ProfilePage /></Route>
      <Route exact path="/tabs/message"><MessagePage /></Route>
      <Route exact path="/tabs/school-dashboard"><DashboardStats /></Route>
      <Route exact path="/tabs/manage-student"><ManageStudents /></Route>
      <Route exact path="/tabs/student-details"><StudentDetail /></Route>
      <Route exact path="/tabs/manage-parent"><ManageParent /></Route>
      <Route exact path="/tabs/add-teacher"><AddTeacher /></Route>
      <Route exact path="/tabs/parent-invited"><ParentInvited /></Route>
      <Route exact path="/tabs/invite-parent"><InviteParent /></Route>
      <Route exact path="/tabs/parent-dashboard"><ParentDash /></Route>
      <Route exact path="/tabs"><Redirect to="/tabs/home" /></Route>
    </IonRouterOutlet>

    {/* Conditionally render tab bar based on current path */}
    <TabBarSelector />
  </IonTabs>
</Route>
        
        {/* Default redirect to welcome */}
        <Route exact path="/">
          <Redirect to="/welcome" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;