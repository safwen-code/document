import React ,{Component} from 'react'

import {Form,FormControl,Button} from 'react-bootstrap'

class Contact extends Component{


    render(){
        return(
            <div>
                 <div >


<Form inline className="form-search">
    <FormControl type="text" placeholder="Search" className=" mr-lg-2" />
    <Button type="submit">Submit</Button>
</Form>
</div>
            </div>
        )
    }
}
export default Contact;
