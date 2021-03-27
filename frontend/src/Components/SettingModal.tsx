/* eslint-disable */
import React from 'react'; 
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    FormControl,
    FormLabel, 
    Input, 
    Button, 
  } from "@chakra-ui/react"
import KeywordPicker from "./KeywordPicker.tsx"
import CreatableSelect from 'react-select/creatable';
import { connect } from 'http2';

class SettingModal extends React.Component{

    constructor(props : any){
        super(props); 
        this.state = {
            isPaneOpen : false, 
            firstName : "", 
            lastName : "", 
            phoneNumber : "", 
            keywords : [], 
        } 

        this.handleChange = this.handleChange.bind(this); 
    }

    handleChange = (value : any) => {
      const {keywords}:any = this.state; 
      console.log(value)
      this.setState({keywords: [...this.state.keywords, value]})
      console.log(keywords)
      
   }

    render(){
        const {isPaneOpen, firstName, lastName, phoneNumber,keywords}:any = this.state; 
        return (
            <div>
              <Button onClick={() => this.setState({isPaneOpen : true})}>Settings</Button>
        
              <Modal isOpen={isPaneOpen} onClose={() => this.setState({isPaneOpen : true})}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Honk's Settings</ModalHeader>
                  
                    <ModalBody pb={6}>
                        <FormControl>
                        <FormLabel>First name</FormLabel>
                            <Input placeholder="First name" />
                        </FormControl>

                        <FormControl mt={4}>
                        <FormLabel>Last name</FormLabel>
                            <Input placeholder="Last name" />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Phone Number</FormLabel>
                            <Input placeholder="Last name" />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Keywords</FormLabel>
                            <CreatableSelect isMulti onChange={this.handleChange} />
                        </FormControl>
                        
                    </ModalBody>
                  <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={() => this.setState({isPaneOpen : false})}>
                      Save
                    </Button>
                    <Button loadOptions={keywords} onClick={() => this.setState({isPaneOpen : false})}>Cancel</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </div>
          )
    }
}



export default SettingModal; 