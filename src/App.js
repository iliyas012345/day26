import { Switch ,Route } from 'react-router-dom';
import './App.css';
import Base from './Base/Base'
import AuthPage from './component/AuthPage';
import DashBoard from './component/Dashboard';
import Nopage from './component/Nopage';
import StudentProfile from './component/StudentProfile';
import { StudentsDetails } from './component/Students';
import Welcome from './component/Welcomepage';
import {useState} from "react"
import { data } from './Data/data';
import AddStudents from './component/Addstudent';
import EditStudent from './component/EditStudent';

function App() {
  const [student,setStudent]=useState(data)
  return (
    <div className="App">
      <Switch>

        <Route exact path ="/">
          <Welcome/>
          </Route>

        <Route path="/dashboard">
          <DashBoard/>
          </Route>


        <Route path="/register">
          <AuthPage/>
          </Route>

        <Route path="/students">
          <StudentsDetails student={student} setStudent={setStudent} />
          </Route>

        <Route path ="/student/:id">
          <StudentProfile student={student}/>
        </Route>

        <Route path="/Adddata">
          <AddStudents  student={student} setStudent={setStudent}/>
          </Route>

          <Route path ="/edit/:id">
          <EditStudent student={student} setStudent={setStudent}/>
        </Route>

        <Route path ="**">
          <Nopage/>
          </Route>

</Switch>

      
    </div>
  );
}

export default App;


{/* <Base

title="Hogwarts School"
desrciption="students details"

>
 <StudentsDetails/>
</Base>

<DashBoard/>
<AuthPage/> */}
