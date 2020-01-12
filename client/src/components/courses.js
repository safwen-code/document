import React ,{Component} from 'react'

import { Tabs, Tab,Grid,Cell,Card,IconButton,Button,CardMenu,CardTitle,CardText,CardActions,} from 'react-mdl';

class Course extends Component{

    constructor(){
        super()
        this.state={
            activeTab:0
        }
    }

    toggleCategories(){
        if(this.state.activeTab===0){
            return(
            <div className="course">
                    {/* Project 1 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #1</CardTitle>
                        <CardText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/* Project 2 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #2</CardTitle>
                        <CardText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/* Project 3 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #3</CardTitle>
                        <CardText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
          </div>
            )
        }
        if(this.state.activeTab===1){
            return(
                <div className="course">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(data:image/png;base64,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) center / cover'}} >React Project #1</CardTitle>
                        <CardText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/* Project 2 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(data:image/png;base64,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) center / cover'}} >React Project #2</CardTitle>
                        <CardText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }
        if(this.state.activeTab===2){
            return(
                <div>
                    <h1>this is Vuejs</h1>
                </div>
            )
        }
        if(this.state.activeTab===3){
            return(
                <div>
                    <h1>this is Wordpress</h1>
                </div>
            )
        }
        if(this.state.activeTab===4){
            return(
                <div>
                    <h1>this is joomla</h1>
                </div>
            )
        }
    }


    render(){
        return(
        <div >
             <div className="demo-tabs">
                 <div className='course-desc container'>
                     <h1>Our Courses</h1>
                     <hr />
                     <p>There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s exciting to think about setting up your own viewing station.</p>
                 </div>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>REACT</Tab>
                    <Tab>ANGULAR</Tab>
                    <Tab>VUEJS</Tab>
                    <Tab>WORDPRESS</Tab>
                    <Tab>JOOMLA</Tab>
                </Tabs>
                <section>
                <Grid>
                    <Cell col={12}>
                    <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>

                </section>
                
            </div>    
            
        </div>
        )

    }
}
export default Course;