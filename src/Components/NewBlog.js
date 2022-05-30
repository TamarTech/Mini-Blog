import { useEffect, useState } from "react";
import { Container, Form , Button} from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from '@hookform/resolvers/yup';
import nextId from "react-id-generator";
import { useNavigate } from "react-router-dom";
//check the import file using yup

const schema = yup.object().shape({
    picture:yup.mixed()
                .test("type", "We only support jpeg, jpg, png file formats",
                function (value){
                    return value && value[0] && (
                        value[0].type === 'image/jpeg' ||
                        value[0].type === 'image/png' ||
                        value[0].type === 'image/jpg'
                    )
                })
})

const NewBlog = () => {
    const navigate = useNavigate();
    const {register, handleSubmit, formState:{errors,isValid}} = useForm({
        mode:'onChange',
        resolver:yupResolver(schema)
    });

    const  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const [today, setToday] = useState(new Date());
    const time = `${months[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`;

    useEffect(()=>{
     setInterval(()=>{
            setToday(new Date())
       },60 * 1000)
    },[])

    const onSubmitHandler = (data) => {
        //const newImage = new Blob([],{type: "application/pdf"})
        const newData = {
                        "id":nextId(),
                        "title":data.title,
                        "description":data.description,
                        "details":data.details,
                        "src":URL.createObjectURL(data.picture[0]),
                        "alt":data.picture[0].name.split('.')[0],
                        "time":time,
                        "user": "Dory",
                    }
       fetch("http://localhost:8000/blogs",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(newData)
        }).then(()=>
        {
            console.log("Post method done")
            navigate("/")
            
        }).catch((err)=>{
            console.log(err.message,"Can't post to json-server")
        })
    }

    return ( 
        <Container className="ml-0">
            <h2 style={{color:"#E60965"}}>Add New Blog</h2>
            <h6 className="float-end">{time}</h6>
            <br />
            <Form className="mt-4" style={{textAlign:"start"}} 
                    onSubmit={handleSubmit(onSubmitHandler)}>

                <Form.Group className="mt-2">
                    <Form.Label style={{color:"#E60965"}}>Title</Form.Label>
                    <Form.Control type="text"
                                    {...register("title",{required:true})}
                                    placeholder="Title..."/>
                    {errors.title && <p style={{color:"red",marginTop:"20px"}}>This is required</p>}
                </Form.Group>

                <Form.Group className="mt-2">
                    <Form.Label style={{color:"#E60965"}}>Description</Form.Label>
                    <Form.Control type="text"
                                {...register("description",{required:true})} 
                                placeholder="A brief about your blog..."/>
                    {errors.description && <p style={{color:"red",marginTop:"20px"}}>This is required</p>}
                </Form.Group>

                <Form.Group className="mt-2">
                    <Form.Label style={{color:"#E60965"}}>What's on your mind?</Form.Label>
                    <Form.Control as="textarea" 
                                rows="4"
                                {...register("details",{required:true})}/>
                     {errors.details && <p style={{color:"red",marginTop:"20px"}}>This is required</p>}
                </Form.Group>
                <Form.Group className="mt-2">
                    <Form.Label style={{color:"#E60965"}}>Blog Image</Form.Label>
                    <Form.Control type="file" 
                                {...register("picture")}/>
                {errors.picture && <p style={{color:"red",marginTop:"20px"}}>{errors.picture.message}</p>}
                </Form.Group>
                <Button className="float-end mt-4 mb-4"
                        type="submit"
                        disabled={!isValid}
                        >Add Blog</Button>
            </Form>
        </Container>
     );
}
 
export default NewBlog;