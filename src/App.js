import './App.css';
import Navbar from './components/navbar';
import { Button} from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import pic from './download-2.jpg';
import Footer from './components/footer';
import YoutubeEmbed from './components/Youtube';
import Tweet from './tweet';

function App() {
  return (
    <div className="App">
      <div className='Landing'>
       
      <Navbar>
      </Navbar>
      <div className='Gradient'>
      </div>
      <div className="landing-text">We <span>Create</span> Future</div>
      <div className='landing-text2'>lorem ipsum dolor. (about the company) </div>
        <Button variant="outline-success pad-btn" size='lg'>Register</Button>{' '}
        <Button variant="outline-info" size='lg'>Know more..</Button>{' '}
      </div>
      <div className='headings'>
        What Do We Do?
      </div>
      <div className='flex'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={pic} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={pic}/>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={pic} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <section>
      <div className='headings h-2'>WHO ARE<br></br> WE?</div>
      <div className='para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
      <div><img src={pic} className='pic-2'/></div>
      </section>
      <div><h1 className='headings positioned'>About Us</h1></div>
      <YoutubeEmbed embedId='b9cAo9C95lM'></YoutubeEmbed>
      <div className='flex'>
        <Tweet data="Lorem ipsum dolor" name="Tweet-1" image={pic} link="#"></Tweet>
        <Tweet data="Lorem ipsum dolor" name="Tweet-2" image={pic} link="#"></Tweet>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
