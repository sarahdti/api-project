import './ArticleItem.css'
import Card from 'react-bootstrap/Card';
import { TiTime } from "react-icons/ti";
import { TiArrowLeftThick } from "react-icons/ti";

function ArticleItem() {
    return ( 
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://dl.next1code.ir/images/react/article1.webp" />
      <Card.Body>
        <Card.Title className='py-2'>مقاله اول</Card.Title>
        <Card.Text>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ 
        و با استفاده از طراحان گرافیک است چاپگرها و
         متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است 
        </Card.Text>
        <span className='read-more'>
            <span>
                ادامه مقاله <TiArrowLeftThick size={'25px'} />
            </span>
        </span>
      </Card.Body>
      <Card.Footer className='d-flex justify-content-between align-items-center py-3'>
        <span>نویسنده : سارا</span>
        <span><TiTime /> 5 دقیقه </span>
      </Card.Footer>
    </Card>
    </> 
    );
}

export default ArticleItem;