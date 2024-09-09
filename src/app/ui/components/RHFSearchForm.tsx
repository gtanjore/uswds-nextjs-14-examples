'use client'
import Select from "react-select"
import { useForm, Controller, SubmitHandler } from "react-hook-form"
import { TextInput } from "@trussworks/react-uswds"

interface IFormInput {
  firstName: string
  lastName: string
  iceCreamType: { label: string; value: string; }
}

function RHFSearchForm() {

  const { control, handleSubmit } = useForm<IFormInput>({
    defaultValues: {
      firstName: "",
      lastName: "",
      iceCreamType: {},
    },
  })


  

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="firstName"
        control={control}
        render={({ field }) => <TextInput type="text" id="{field.name}" {...field} />}
      />
      <Controller
        name="lastName"
        control={control}
        render={({ field }) => <TextInput type="text" id="{field.name}" {...field} />}
      />
      <Controller
        name="iceCreamType"
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            options={[
              { value: "chocolate", label: "Chocolate" },
              { value: "strawberry", label: "Strawberry" },
              { value: "vanilla", label: "Vanilla" },
            ]}
          />
        )}
      />
      <input type="submit" />
    </form>
  )
}

export default RHFSearchForm;