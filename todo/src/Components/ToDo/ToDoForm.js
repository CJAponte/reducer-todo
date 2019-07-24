import React from 'react'
import { Container, Form, Input, Button } from 'semantic-ui-react'

class ToDoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            item: ''
        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault()
        this.setState({ item: ''})
        this.props.addItem(e, this.state.item)
    }

    render(){
        return(
            <Container style={{margin: '20px auto'}}>
                
                <Form onSubmit={this.submitHandler} style={{width: '50%', display: 'inline-flex', flexDirection: 'column'}}>
                    <Input placeholder="What do you need to do?" type="text" value={this.state.item} name="item" onChange={this.changeHandler}></Input>
                    <Button style={{margin: '10px auto'}} color="green">Add</Button>
                </Form>

                

            </Container>
        )
    }
}

export default ToDoForm