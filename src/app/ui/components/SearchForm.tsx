"use client";
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
import React from "react";

function mockSubmit() {
  return;
}

function SearchForm() {
  return (
    <div>
      <div className="bg-base-lightest">
        <GridContainer className="usa-section">
          <Grid row className="margin-x-neg-205 flex-justify-center">
            <Grid col={6} className="padding-x-205 margin-bottom-4">
              <div className="bg-white padding-y-3 padding-x-3 border border-base-lighter">
                <h1 className="margin-bottom-0">Search</h1>
                <Form className="usa-form--large" onSubmit={mockSubmit}>
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
                    <Select id="input-select" name="input-select">
                      <option>- Select - </option>
                      <option value="value1">Option A</option>
                      <option value="value2">Option B</option>
                      <option value="value3">Option C</option>
                      <option value="valueBIG">
                        Option of extra length to demonstrate how content like
                        this will look different
                      </option>
                    </Select>
                    <Label htmlFor="firstname">
                      First Name{" "}
                      <abbr title="required" className="usa-label--required">
                        *
                      </abbr>
                    </Label>
                    <TextInput
                      id="lastname"
                      name="lastname"
                      type="text"
                      autoCapitalize="off"
                      autoCorrect="off"
                      required={true}
                    />
                    <Label htmlFor="lastname">
                      Last Name{" "}
                      <abbr title="required" className="usa-label--required">
                        *
                      </abbr>
                    </Label>
                    <TextInput
                      id="lastname"
                      name="lastname"
                      type="text"
                      autoCapitalize="off"
                      autoCorrect="off"
                      required={true}
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
                        <Select
                          id="testDateInput"
                          className="width-auto"
                          name="testDateInput"
                        >
                          <option>- Select -</option>
                          <option value="1">01 - January</option>
                          <option value="2">02 - February</option>
                          <option value="3">03 - March</option>
                          <option value="4">04 - April</option>
                          <option value="5">05 - May</option>
                          <option value="6">06 - June</option>
                          <option value="7">07 - July</option>
                          <option value="8">08 - August</option>
                          <option value="9">09 - September</option>
                          <option value="10">10 - October</option>
                          <option value="11">11 - November</option>
                          <option value="12">12 - December</option>
                        </Select>
                      </FormGroup>
                      <DateInput
                        id="testDateInput"
                        name="testName"
                        label="Day"
                        unit="day"
                        maxLength={2}
                        minLength={2}
                      />
                      <DateInput
                        id="testDateInput"
                        name="testName"
                        label="Year"
                        unit="year"
                        maxLength={4}
                        minLength={4}
                      />
                    </DateInputGroup>
                    <Label htmlFor="input-select">Place of Birth</Label>
                    <Select id="input-select" name="input-select">
                      <option>- Select - </option>
                      <option value="value1">Option A</option>
                      <option value="value2">Option B</option>
                      <option value="value3">Option C</option>
                      <option value="valueBIG">
                        Option of extra length to demonstrate how content like
                        this will look different
                      </option>
                    </Select>
                    <Label htmlFor="input-type-text">
                      ID Card Number
                    </Label>
                    <TextInput
                      className="border-radius-4"
                      id="input-type-text"
                      name="input-type-text"
                      type="text"
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

export default SearchForm;
