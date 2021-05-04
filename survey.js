const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const surveyQuestions = () => { 

rl.question('What do you like to be called? ', (name) => {
  console.log(`${name}? Ooook then. Goodluck with that.` + '\n');

  
  rl.question('What is an activity you like doing? ', (activity) => {
    console.log(`I dont really believe you can do ${activity}, but alrighty then.` + '\n');
  
    
    rl.question('What kind of tunes do you jam to while doing that activity? ', (tunes) => {
      console.log(`How can you even pay attention when your jammin ${tunes}` + '\n');
    
      
      rl.question('What is your all time favorite meal to eat? (Breakfast, Lunch or Dinner) ', (meal) => {
        console.log(`This was a tough one but you choice is ${meal}. Good answer.` + '\n');
      
        
        rl.question('What is your most favorite thing to eat? ', (food) => {
          console.log(`${food} is pretty gross but I've heard worse things.` + '\n');

          
          rl.question('What sport do you pretend to be good at? ', (sport) => {
            console.log(`${sport}? Yeah ok right.` + '\n');
          
          
            rl.question('What makes you so awesome? ', (awesome) => {
              console.log(`${awesome}! Heck yes this makes you great!` + '\n');
            

              console.log(`${name} loves listening to ${tunes} while ${activity}, devouring ${food} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${awesome}.`)
              
              rl.close();
              
            });
          });
        });
      });
    });
  });
});
};
            
surveyQuestions();
          
        
      
    
    


