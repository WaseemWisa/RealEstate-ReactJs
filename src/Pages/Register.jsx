import React from 'react'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb';
import { TextInput, Button, Group, Box , Checkbox} from '@mantine/core';
import '../Components/Pages/Register/Register.scss';
function Register() {
  return (
    <main id="register">
      <Breadcrumb title={'Register'}/>
      <div className="container">
        <div className="head-center">
          <h2>
            Register
            <br />
            Your Account
          </h2>
          <p className="desc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Sit aliquid, Non distinctio vel iste.
            
          </p>
        </div>
        <form className="form-holder">
          <Box w={'400px'} maw={'100%'} mx="auto">
            <TextInput  placeholder="First Name" />
            <TextInput mt="xl"  placeholder="Last Name"  />
            <TextInput mt="xl" placeholder="Email" />
            <TextInput mt="xl"  placeholder="Password"  />
            <TextInput mt="xl"  placeholder="Confirm Password"  />
            <Checkbox mt="xl" color="orange" className=' desc' label="By clicking create account I consent to the privacy policy."  />
            <Checkbox mt="xl" color="orange" className=' desc' label="I consent to Herboil processing my personal data in order to send personalized marketing material in accordance with the consent form and the privacy policy."  />
            <Group position="center" mt="xl">
              <Button color="orange" mt="xl" size="lg" type='submit'>
                Create Acount
              </Button>
            </Group>
          </Box>
        </form>
      </div>
    </main>
  )
}

export default Register