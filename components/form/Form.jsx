import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import InputGroup from "./InputGroup"
import Button from "./Button"

const schemaReg = yup.object().shape({
  username: yup.string().required("Please enter your username").min(3, "Must be at least 3 characters long"),
  password: yup.string().required("Please enter your password").min(4, "Must be at least 4 characters long"),
  email: yup.string().required("Please enter your email address").email("Must be a valid email address")
})

const schemaLog = yup.object().shape({
  username: yup.string().required("Please enter your username").min(3, "Must be at least 3 characters long"),
  password: yup.string().required("Please enter your password").min(4, "Must be at least 4 characters long")
})

function Form({ reg }) {
  const btnName = reg ? "Register" : "Login";
  
  let schema = reg ? schemaReg : schemaLog;

  const { register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = data => {
    console.log(data);
    // Send Req
  }

  // Fix ...register
  // Might need controlId?
  return (
    <form className="space-y-3 max-w-sm mx-auto my-3" onSubmit={handleSubmit(onSubmit)}>
      <InputGroup {...register("username", {required: true})} type="text" name="username" placeholder="Enter your username" />
      {errors.username && <span className="block text-red-500">{errors.username.message}</span>}
      
      <InputGroup {...register("password", {required: true})} type="password" name="password" placeholder="Enter your password" />
      {errors.password && <span className="block text-red-500">{errors.password.message}</span>}
      
      {reg && <InputGroup {...register("email", {required: true})} type="text" name="email" placeholder="Enter your email" />}
      {errors.email && <span className="block text-red-500">{errors.email.message}</span>}

      <Button>{btnName}</Button>
    </form>
  )
}

export default Form