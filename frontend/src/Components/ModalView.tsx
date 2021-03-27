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
    Lorem
  } from "@chakra-ui/react"
import Name from "./Name.tsx"

class ModalView extends React.Component{

    constructor(props : any){
        super(props); 
        this.state = {
            isPaneOpen : false 
        }
    }

    render(){


        const {isPaneOpen }:any = this.state; 
        return (
            <>
              <Button onClick={() => this.setState({isPaneOpen : true})}>Open Modal</Button>
        
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
                            <Name/> 
                        </FormControl>
                        
                    </ModalBody>
                  <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={() => this.setState({isPaneOpen : false})}>
                      Save
                    </Button>
                    <Button onClick={() => this.setState({isPaneOpen : false})}>Cancel</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </>
          )
    }
}



export default ModalView; 