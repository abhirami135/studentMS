import React,{useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Students from '../Students';
import { useNavigate } from 'react-router-dom';

function Update() {
  const [studName,setName] = useState('')
  const [studCourse,setCourse] = useState('')
  const [studPercentage,setPercentage] = useState(0)
 const[studId,setId] =useState('')



 const navigate = useNavigate()
const handleUpdate = (event)=>{
  event.preventDefault()

  //find index number of stud id that should updated
let index = Students.map((item)=>item.studId).indexOf(studId)
 let stud=Students[index]

 console.log('initally',stud);
stud.studId = studId
stud.studName = studName
stud.studCourse = studCourse
stud.studPercentage = studPercentage
console.log('finally',stud);
navigate('/')
}

 useEffect(()=>{
setName(localStorage.getItem("studName"))
setCourse(localStorage.getItem("studCourse"))
setPercentage(JSON.parse(localStorage.getItem("studPercentage")))
setId(localStorage.getItem("studId"))

 },[])

  return (
    <div className='my-5 p-5'>
    <h1 className='text-primary'>Update Students Details</h1>
    <p style={{'text-align':'justify'}}>This is a Dummy Content: The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
       as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
        and a search for 'lorem ipsum' will uncover many web sites still in their infancy.

    </p>
    <div className='row'>
      <div className='col-lg-4'>
     <img className='mt-5' style={{"width":"300px"}} src='https://th.bing.com/th/id/R.0a48d7636e54a4a0c6445a80300a9665?rik=tpLdUBSxmeE74g&riu=http%3a%2f%2fwww.bluewhyte.com%2fassets%2fimages%2fschool-management-icon.png&ehk=a9Kflqv%2f4IqV%2f%2bIEZYv6f5y5OfgFh4cMXis76v44iNM%3d&risl=&pid=ImgRaw&r=0'></img>
      </div>
      <div className='col-lg-8'>
    <Form className='border mt-3 p-5  '>
  

   <Form.Group className="mb-3" controlId="formBasicName">
<Form.Control type="email" value={studName} placeholder="Enter Students Name"
onChange={(event)=>setName(event.target.value)}

/>
   </Form.Group>

   <Form.Group className="mb-3" controlId="formBasicCourse">
<Form.Control type="email" value={studCourse}  placeholder="Enter Students Course"
  onChange={(event)=>setCourse(event.target.value)}
   />
   </Form.Group>

   <Form.Group className="mb-3" controlId="formBasicPercentage">
<Form.Control type="email" value={studPercentage}  placeholder="Enter Students Percentage"
  onChange={(event)=>setPercentage(event.target.value)}
/>
   </Form.Group>

    
    <Button onClick={(event)=>handleUpdate(event)}  variant="primary" type="submit">
   Update
    </Button>
  </Form>
</div>
<div className='col-2'></div>
  </div>
  </div>
  )
}

export default Update