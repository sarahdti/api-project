import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MyNavebar from "../../components/navbar/MyNavbar";
import { Button, Form } from "react-bootstrap";
import './EditArticle.css'
import Swal from "sweetalert2";
function EditArticle() {
  const articleId = useParams().articleId;
  const [articleData, setArticleData] = useState({});
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`https://api1-9fi5.onrender.com/articles/${articleId}`)
      .then((response) => setArticleData(response.data));
  }, []);
  const EditArticleHandler = ()=>{
    axios.put(`https://api1-9fi5.onrender.com/articles/${articleId}`,articleData)
    Swal.fire({
        title:'مقاله با موفقیت ویرایش شد',
        icon:'success'
    })
    navigate(`/article/${articleId}`)
  }
  const formHandler =(e)=>{
   setArticleData({...articleData,[e.target.name]: e.target.value})
  }

  return (
    <>
    <MyNavebar/>
      <div className="formContainer">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>عنوان مقاله</Form.Label>
            <Form.Control
            onChange={formHandler}
            value={articleData.title}
              name="title"
              type="text"
              placeholder="عنوان مقاله را وارد کنید"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>توضیح کوتاه </Form.Label>
            <Form.Control
            onChange={formHandler}
            value={articleData.desc}
              name="desc"
              type="text"
              placeholder="یک توضیح کوتاه وارد کنید"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>نویسنده مقاله</Form.Label>
            <Form.Control
            onChange={formHandler}
            value={articleData.writter}
              name="writter"
              type="text"
              placeholder="نام نویسنده را وارد کنید"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>موضوع مقاله</Form.Label>
            <Form.Control
            onChange={formHandler}
            value={articleData.category}
              name="category"
              type="text"
              placeholder="موضوع مقاله را وارد کنید"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>عکس مقاله</Form.Label>
            <Form.Control
            onChange={formHandler}
            value={articleData.image}
              name="image"
              type="text"
              placeholder="عکس مقاله را وارد کنید"
            />
          </Form.Group>
           <Form.Group className="mb-3">
            <Form.Label>مدت زمان خواندن</Form.Label>
            <Form.Control
            onChange={formHandler}
            value={articleData.readingTime}
              name="readingTime"
              type="number"
              placeholder=""
            />
          </Form.Group>
          <Button onClick={EditArticleHandler} variant="primary" type="button">ویرایش مقاله</Button>
        </Form>
      </div>
    </>
  );
}

export default EditArticle;
