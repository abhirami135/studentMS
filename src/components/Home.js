
import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Students from '../Students';
import { Link, useNavigate } from 'react-router-dom';

function Home() {

  const navigate = useNavigate();

const handleDelete = (studId)=>{
let index = Students.map((item)=>item.studId).indexOf(studId)

Students.splice(index,1)
navigate('/')

}

const handleEdit = (studId,studName,studCourse,studPercentage)=>{
  localStorage.setItem("studId",studId)
  localStorage.setItem("studName",studName)
  localStorage.setItem("studCourse",studCourse)
  localStorage.setItem("studPercentage",studPercentage)
}
  return (
    <div className='container'>

      <h1 className='text-primary mt-5'>List Of Students &nbsp;
 <Link to={'/add'}><Button  variant='success'><i class=" fa-solid fa-user-plus"></i>Add</Button></Link>
      </h1>
      <p style={{'text-align':'justify'}}>This is a Dummy Content: The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
         as opposed to using 'Content here, content here', making it look like readable English.
          Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
          and a search for 'lorem ipsum' will uncover many web sites still in their infancy.

      </p>

      <div style={{ margin: "8rem" }}>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
          
              <th>Student Name</th>
              <th>Student Course</th>
              <th>Student Percentage</th>
              <th> Actions</th>
            </tr>
          </thead>
          <tbody>
           
           {
            Students && Students.length>0 ?
            Students.map((item)=>(
              
              <tr>
           
              <td>{item.studName}</td>
              <td>{item.studCourse}</td>
              <td>{item.studPercentage}</td>

              <td>
            <Link to='/update'>
                <Button onClick={()=>handleEdit(item.studId,item.studName,item.studCourse,item.studPercentage)}><i class="fa-solid fa-user-pen"></i></Button>
           </Link> 
             &nbsp; &nbsp;   &nbsp;
                <Button onClick={()=>handleDelete(item.studId)} variant='danger'><i class="fa-solid fa-trash"></i></Button>
              </td>
            </tr>




            ))
       : "No data to display"
            
          
}

          </tbody>
        </Table>



      </div>
    </div>
  )
}

export default Home