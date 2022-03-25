import React, { ReactElement } from "react";
import { Box, Typography } from "@mui/material";
import { Form, Input, Textarea, useFormValidation } from "reactjs-forms";
import { useState } from "react";
import { Animal } from "../models/Animal.model";




const FormAnimalPage = (): ReactElement => {
    const [email, setEmail] = useState<Animal[]>([]);
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");
    const [errors, setErrors] = useState({});
    const [addressErrors, setAddressErrors] = useState({});
  
    
    return (<>

<div>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e.currentTarget.validation); //we have accessed to the validation results via submit event currentTarget
          setErrors(validation()); //get validation errors and set errors state for rendering
        }}
      >
        <label htmlFor="email">Email:</label>
        <Input
         
          identity="email" //also we have to declare identity attribute because of that value is used to get validation results
          id="email" //
          type="email"
          validation={{
            required: true,
            isEmail: true,
          }}
        />
        {/* list all email erros*/}
        <ul> </ul>
        <br />
        <label htmlFor="name">Name:</label>
        <Input
          onChange={(e) => setName(e.target.value)}
          value={name}
          identity="name"
          id="name"
          validation={{
            isName: {
              msg: "custom message", //you may or not declare a custom message
              value: true, //you dont have to declare value also
            },
          }}
        />
        {/* list all name erros*/}
        <ul>{nameErrors}</ul>
        <br />
        <label htmlFor="age">Age:</label>
        <Input
          onChange={(e) => setAge(e.target.value)}
          value={age}
          identity="age"
          id="age"
          validation={{
            isNumeric: true,
            min: 17, //you can assign value or msg like object notation
            max: {
              value: "120",
              msg: "What was that.holy lighten!!!!!",
            },
          }}
        />
        <ul></ul>
        <br />
        <label htmlFor="address">Address:</label>
        <br />
        <Textarea
          onChange={(e) => setAddress(e.target.value)}
          value={address}
          identity="address"
          id="address"
          validation={{
            required: true,
            isUnicode: true,
          }}
          onBlur={() => {
            setAddressErrors(validationForAddress());
          }}
        />
        <ul>{onlyAddressErrors}</ul>
        <button>Send</button>
      </Form>
    </div>    
        <Box
            sx={{
                flexGrow: 1,
                backgroundColor: "whitesmoke",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >   
            <Typography variant="h3">Form</Typography>
        </Box>
    </>);
}

export default FormAnimalPage;