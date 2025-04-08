import MyNavebar from "../../components/navbar/MyNavbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./AddArticle.css";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

function AddArticle() {
  const [formData, setFormData] = useState({});
  const formHandler = (e) => {
    setFormData({...formData,[e.target.name] : e.target.value})
  };
  const resetFormData = ()=>{
    setFormData({
      title:'',
      desc :'',
      writter : '',
      category : '',
      image : '',
      timeReading : ''
    })
  }
  const addArticleHandler =()=>{
    axios.post('http://localhost:3000/articles',formData)
    .then(Response=>{
      if(Response.status ===201){
        Swal.fire({
          title:'مقاله با موفقیت اضافه شد',
          timer:1500,
          timerProgressBar:true
      })
    }
    }).catch(Error=>{
      if(Error.status===404){
        Swal.fire({
          title:'مقاله ساخته نشد',
          timer:1500,
          timerProgressBar:true,
          icon: 'error'
      })
      }
    })
    resetFormData()
  }
  

  return (
    <>
      <MyNavebar />
      <div className="formContainer">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>عنوان مقاله</Form.Label>
            <Form.Control
            value={formData.title}
              name="title"
              onChange={formHandler}
              type="text"
              placeholder="عنوان مقاله را وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>توضیح کوتاه</Form.Label>
            <Form.Control
            value={formData.desc}
            name="desc"
              onChange={formHandler}
              type="text"
              placeholder="یه توضیح کوتاه در مورد مقاله وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>نویسنده مقاله</Form.Label>
            <Form.Control
            value={formData.writter}
            name="writter"
              onChange={formHandler}
              type="text"
              placeholder="نام نویسنده مقاله را وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>موضوع مقاله</Form.Label>
            <Form.Control
            value={formData.category}
            name="category"
              onChange={formHandler}
              type="text"
              placeholder="موضوع مقاله را وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>عکس مقاله</Form.Label>
            <Form.Control
            value={formData.image}
            name="image"
              onChange={formHandler}
              type="text"
              placeholder="عکس مقاله را وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>مدت زمان خواندن</Form.Label>
            <Form.Control
            value={formData.timeReading}
            name="timeReading"
              onChange={formHandler}
              type="number"
              placeholder=""
            />
          </Form.Group>

          <Button onClick={addArticleHandler} variant="primary" type="button">
            ساخت مقاله
          </Button>
        </Form>
      </div>
    </>
  );
}

export default AddArticle;
