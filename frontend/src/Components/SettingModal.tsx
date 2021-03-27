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
import { motionValue } from 'framer-motion';

class SettingModal extends React.Component {

  constructor(props: any) {
    super(props);
    this.state = {
      isPaneOpen: false,
      firstName: "",
      lastName: "",
      phoneNumber: "",
      keywords: localStorage.getItem("keywords") === null ? [] : Array.from(localStorage.getItem("keywords")),
    }

    console.log(localStorage.getItem("keywords"));
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (value: any) => {
    console.log(value);
    const { keywords }: any = this.state;
    this.setState({ keywords: [...keywords, value] }, () => {
      localStorage.setItem("keywords",keywords)
      console.log(keywords)
    })
  }

  render() {
    const { isPaneOpen, firstName, lastName, phoneNumber, keywords }: any = this.state;
    return (
      <div>
        <button className="start-stop-btn blue settings" onClick={() => this.setState({ isPaneOpen: true })}>Settings</button>

        <Modal isOpen={isPaneOpen} onClose={() => this.setState({ isPaneOpen: true })}>
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
                <CreatableSelect options={keywords} isMulti onChange={this.handleChange}/>
              </FormControl>

            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={() => this.setState({ isPaneOpen: false })}>
                Save
                    </Button>
              <Button onClick={() => this.setState({ isPaneOpen: false })}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    )
  }
}



export default SettingModal;