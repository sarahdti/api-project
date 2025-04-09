import { Col, Container,Row } from "react-bootstrap";
import ArticleItem from "../../components/article/ArticleItem";
import MyNavebar from "../../components/navbar/MyNavbar";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
    const[articles, setArticles]=useState([])
    useEffect(()=>{
        axios('https://api1-9fi5.onrender.com/articles')
        .then((response)=>{
            setArticles(response.data)
        })
    },[])
    
    return ( 
        <>
        <MyNavebar/>
        <Container>
            <h1 style={{marginTop : '20px'}}>لیست مقالات</h1>
            <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 gy-4">
                {articles.map(article=>(<Col key={article.id}><ArticleItem {...article}/></Col>))}
            </Row>
            
        </Container>
        </>
     );
}

export default Home;