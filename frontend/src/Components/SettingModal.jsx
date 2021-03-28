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
} from '@chakra-ui/react';
import CreatableSelect from 'react-select/creatable';
import { connect } from 'http2';
import { motionValue } from 'framer-motion';
import validator from 'validator';

const def = [
  { label: 'exam', value: 'exam' },
  { label: 'test', value: 'test' },
  { label: 'quiz', value: 'quiz' },
  { label: 'homework', value: 'homework' },
  { label: 'assignment', value: 'assignment' },
];
class SettingModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPaneOpen: false,
      firstName:
        localStorage.getItem('firstName') === null
          ? ''
          : localStorage.getItem('firstName'),
      lastName:
        localStorage.getItem('lastName') === null
          ? ''
          : localStorage.getItem('lastName'),
      phoneNumber:
        localStorage.getItem('phoneNumber') === null
          ? ''
          : localStorage.getItem('phoneNumber'),
      keywords:
        localStorage.getItem('keywords') === null
          ? []
          : JSON.parse(localStorage.getItem('keywords')),
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handlePhoneNumber = this.handlePhoneNumber.bind(this);
  }

  handleChange = (value) => {
    const newKeywords = [...value];
    this.setState({ keywords: newKeywords }, () => {
      localStorage.setItem('keywords', JSON.stringify(newKeywords));
    });
  };

  handleFirstName = (e) => {
    this.setState({ firstName: e.target.value }, () => {
      localStorage.setItem('firstName', e.target.value);
    });
  };

  handleLastName = (e) => {
    this.setState({ lastName: e.target.value }, () => {
      localStorage.setItem('lastName', e.target.value);
    });
  };

  handlePhoneNumber = (e) => {
    this.setState({ phoneNumber: e.target.value }, () => {
      localStorage.setItem('phoneNumber', e.target.value);
    });
  };

  render() {
    const {
      isPaneOpen,
      firstName,
      lastName,
      phoneNumber,
      keywords,
    } = this.state;
    return (
      <div>
        <button
          className="start-stop-btn grey settings"
          onClick={() => this.setState({ isPaneOpen: true })}
        >
          Settings
        </button>
        <Modal
          isOpen={isPaneOpen}
          onClose={() => this.setState({ isPaneOpen: true })}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Honk's Settings</ModalHeader>

            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>First Name</FormLabel>
                <Input
                  value={firstName}
                  placeholder="First Name"
                  onChange={(e) => this.handleFirstName(e)}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Last Name</FormLabel>
                <Input
                  value={lastName}
                  placeholder="Last Name"
                  onChange={(e) => this.handleLastName(e)}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Phone Number</FormLabel>
                <Input
                  value={phoneNumber}
                  placeholder="Phone Number"
                  onChange={(e) => this.handlePhoneNumber(e)}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Keywords</FormLabel>
                <CreatableSelect
                  options={def}
                  isMulti
                  onChange={this.handleChange}
                  value={keywords}
                />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button
                colorScheme="blue"
                mr={3}
                onClick={() => this.setState({ isPaneOpen: false })}
              >
                Done
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    );
  }
}

export default SettingModal;
