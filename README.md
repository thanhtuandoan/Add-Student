# add_student
Feature: 
- Creating an information entry form with fields: id, name, birthday, phoneNumber
- Validating fields:
  + id: requiered, do not empty
  + name: required, do not empty, min value length 5, max value length 25
  + birthday: required, do not empty, age of student must be bigger than 18 years old
  + phoneNumber: required, do not empty, length is 10

- When click the submit button, the list of students will appear as a list table

- When opening the page, it will show the data to the screen if data saved

- If entering a student with the same id, it will update that student information with new information

- Responsive web
