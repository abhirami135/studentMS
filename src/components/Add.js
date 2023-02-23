import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import uuid from 'react-uuid';
import Students from '../Students';
import { useNavigate } from 'react-router-dom';



function Add() {
  const [studName,setName] = useState('')
  const [studCourse,setCourse] = useState('')
  const [studPercentage,setPercentage] = useState(0)
  const navigate = useNavigate()

const handleSubmit =(event)=>{
  //to prevent auto refresh
  // event.preventDefault()
  // console.log('name:',studName);
  // console.log('studCourse:',studCourse);
  // console.log('studPercentage:',studPercentage);
  //generate uuid
  const ids = uuid()
  let uniqueId = ids.slice(0,8)
  let Percentage = Number(studPercentage)


  //console.log(uniqueId);
  Students.push({
    
    studId:uniqueId,
    studName,
    studCourse,
    studPercentage:Percentage

})
navigate('/')

}
  return (
    <div className='my-5 p-5'>
      <h1 className='text-primary'>Add New Students Details</h1>
      <p style={{'text-align':'justify'}}>This is a Dummy Content: The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
         as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
          and a search for 'lorem ipsum' will uncover many web sites still in their infancy.

      </p>
      <div className='row'>
      <div className='col-lg-4'>
     <img className='mt-5' style={{"width":"300px"}} src='https://th.bing.com/th/id/R.0a48d7636e54a4a0c6445a80300a9665?rik=tpLdUBSxmeE74g&riu=http%3a%2f%2fwww.bluewhyte.com%2fassets%2fimages%2fschool-management-icon.png&ehk=a9Kflqv%2f4IqV%2f%2bIEZYv6f5y5OfgFh4cMXis76v44iNM%3d&risl=&pid=ImgRaw&r=0'></img>
      </div>
        <div className='col-8'>
      <Form className='border mt-3 p-5  '>
    

     <Form.Group className="mb-3" controlId="formBasicName">
  <Form.Control type="email" placeholder="Enter Students Name"
  onChange={(event)=>setName(event.target.value)}
  
  />
     </Form.Group>

     <Form.Group className="mb-3" controlId="formBasicCourse">
  <Form.Control type="email" placeholder="Enter Students Course"
    onChange={(event)=>setCourse(event.target.value)}
     />
     </Form.Group>

     <Form.Group className="mb-3" controlId="formBasicPercentage">
  <Form.Control type="email" placeholder="Enter Students Percentage"
    onChange={(event)=>setPercentage(event.target.value)}
  />
     </Form.Group>

      
      <Button onClick={(event)=>handleSubmit(event)} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
</div>
<div className='col-2'></div>
    </div>
    </div>
  )
}

export default Add