import React ,{Component} from 'react'
import {Carousel } from 'react-bootstrap'
import Course from './courses'

class Home extends Component{
    render(){
        return(
            <div>
                 <Carousel className="home-carousel">
                    <Carousel.Item>
                        <img
                        src="https://images.pexels.com/photos/247819/pexels-photo-247819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt="First slide"
                        height="700px"
                        width="100%"
                        />
                        <Carousel.Caption className="home-card-carousel" >
                        
                        <div className='d-flex align-self-center '>
                        
                            <i className='fa fa-book-reader p-7 m-2'></i>
                            <div className="d-flex  flex-column  m-3 p-7">
                            <h3>New Classes</h3>
                            <hr />
                             <p>In the history of modern astronomy, there is probably no one greater leap forward building and launch.</p>
                             </div>
                        </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt="Third slide"
                        height="700px"
                        />

                        <Carousel.Caption className="home-card-carousel">
                        <div className='d-flex align-self-center '>
                        
                            <i className='fa fa-award p-7 m-2'></i>
                            <div className="d-flex  flex-column  m-3 p-7">
                            <h3>New Classes</h3>
                            <hr />
                             <p>In the history of modern astronomy, there is probably no one greater leap forward building and launch.</p>
                             </div>
                        </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt="Third slide"
                        height="700px"
                        
                        />

                        <Carousel.Caption className="home-card-carousel">
                        <div className='d-flex align-self-center '>
                        
                        <i className='fa fa-trophy p-7 m-2'></i>
                        <div className="d-flex  flex-column  m-3 p-7">
                        <h3>New Classes</h3>
                       < hr />
                         <p>In the history of modern astronomy, there is probably no one greater leap forward building and launch.</p>
                         </div>
                    </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <Course />
                <Course />

                
            </div>
        )
    }
}
export default Home;