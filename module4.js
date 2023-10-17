
const names = ['John', 'Jane', 'Alice', 'Boba'];

for (let i = 0; i < names.length; i++) {
   const name = names[i];
   if (name.charAt(0) === 'J' || name.charAt(0) === 'j') {
     console.log(`Goodbye ${name}`);
   } else {
     console.log(`Hello ${name}`);
   }
 }