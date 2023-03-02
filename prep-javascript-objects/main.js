const person = {
  firstName: 'Alex',
  lastName: 'Arce',
  hobby: 'play soccer',
  job: 'cook',
  previousJob: 'dancer'
};
console.log(person);
const fullName = (person.firstName + ' ' + person.lastName);
console.log("The person's name is:", fullName);
console.log("The person's current job is:", person.job);
console.log("The person's previous job:", person.previousJob);
console.log('The complete person object:', person);
