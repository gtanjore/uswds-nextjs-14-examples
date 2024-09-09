"use client";

import { useForm, Controller, SubmitHandler } from "react-hook-form";

import {
  Button,
  DateInput,
  DateInputGroup,
  Fieldset,
  Form,
  FormGroup,
  Grid,
  GridContainer,
  Label,
  Select,
  TextInput,
} from "@trussworks/react-uswds";

interface IFormInput {
  firstName: string;
  lastName: string;
  searchType: string;
  month: string;
  day: number;
  year: number;
  placeofbirth: string;
  idcardnumber: string;
}

function mockSubmit() {
  return;
}

function RHFSearchForm2() {
  const { control, handleSubmit } = useForm<IFormInput>({
    defaultValues: {
      firstName: "",
      lastName: "",

    },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className="bg-base-lightest">
        <GridContainer className="usa-section">
          <Grid row className="margin-x-neg-205 flex-justify-center">
            <Grid col={6} className="padding-x-205 margin-bottom-4">
              <div className="bg-white padding-y-3 padding-x-3 border border-base-lighter">
                <h1 className="margin-bottom-0">Search</h1>
                <Form
                  className="usa-form--large"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <Fieldset legend="Get started with Search.">
                    <div className="usa-hint">
                      <abbr
                        title="required"
                        className="usa-hint usa-hint--required"
                      >
                        *
                      </abbr>{" "}
                      indicates a required field.
                    </div>
                    <Label htmlFor="input-select">Search Reason</Label>

                    <Controller
                      name="searchType"
                      control={control}
                      render={({ field }) => (
                        <Select id={field.name} {...field}>
                          <option value="">Select</option>
                          <option value="option1">Option 1</option>
                          <option value="option2">Option 2</option>
                        </Select>
                      )}
                    />

                    <Label htmlFor="firstname">
                      First Name{" "}
                      <abbr title="required" className="usa-label--required">
                        *
                      </abbr>
                    </Label>
                    <Controller
                      name="firstName"
                      control={control}
                      render={({ field }) => (
                        <TextInput type="text" id="{field.name}" {...field} />
                      )}
                    />
                    <Label htmlFor="lastname">
                      Last Name{" "}
                      <abbr title="required" className="usa-label--required">
                        *
                      </abbr>
                    </Label>
                    <Controller
                      name="lastName"
                      control={control}
                      render={({ field }) => (
                        <TextInput type="text" id="{field.name}" {...field} />
                      )}
                    />
                    <Label htmlFor="dateofbirth">
                      Date of Birth{" "}
                      <abbr title="required" className="usa-label--required">
                        *
                      </abbr>
                    </Label>
                    <div className="usa-hint" id="gnHint">
                      For example March 30, 1965
                    </div>
                    <DateInputGroup>
                      <FormGroup className="usa-form-group--month usa-form-group--select">
                        <Label htmlFor="input-select">Month</Label>
                        <Controller
                          name="month"
                          control={control}
                          render={({ field }) => (
                            <Select id={field.name} {...field}>
                              <option value="0">Select</option>
                              <option value="1">1-January</option>
                              <option value="2">2-February</option>
                              <option value="3">3-March</option>
                              <option value="4">4-April</option>
                              <option value="5">5-May</option>
                              <option value="6">6-June</option>
                              <option value="7">7-July</option>
                              <option value="8">8-August</option>
                              <option value="9">9-September</option>
                              <option value="10">10-October</option>
                              <option value="11">11-November</option>
                              <option value="12">12-December</option>
                            </Select>
                          )}
                        />
                      </FormGroup>
                      <Controller
                        name="day"
                        control={control}
                        render={({ field }) => (
                          <DateInput
                            label="Day"
                            unit="day"
                            minLength={2}
                            maxLength={2}
                            id="{field.name}"
                            {...field}
                          />
                        )}
                      />
                      <Controller
                        name="year"
                        control={control}
                        render={({ field }) => (
                          <DateInput
                            label="Year"
                            unit="year"
                            minLength={4}
                            maxLength={4}
                            id="{field.name}"
                            {...field}
                          />
                        )}
                      />
                    </DateInputGroup>
                    <Label htmlFor="input-select">Place of Birth</Label>
                    <Controller
                      name="placeofbirth"
                      control={control}
                      render={({ field }) => (
                        <Select id={field.name} {...field}>
                          <option value="">Select</option>
                          <option value="USA">United States of America</option>
                          <option value="German">Germany</option>
                          <option value="France">France</option>
                        </Select>
                      )}
                    />
                    <Label htmlFor="input-type-text">ID Card Number</Label>
                    <Controller
                      name="idcardnumber"
                      control={control}
                      render={({ field }) => (
                        <TextInput type="text" id="{field.name}" {...field} />
                      )}
                    />
                    <div className="justify-content-right">
                      <Button type="button">Click Me</Button>
                      <Button type="button" base>
                        Click Me
                      </Button>
                    </div>
                  </Fieldset>
                </Form>
              </div>
            </Grid>
          </Grid>
        </GridContainer>
      </div>
    </div>
  );
}

export default RHFSearchForm2;
