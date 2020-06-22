function printShape(shape, height, character)
{
 
  switch(shape) 
  {
    case 'Sqaure':
      console.log(Sqaure())
      break;
    case 'Triangle':
      console.log(Triangle())
      break;
    case 'Diamond':
       console.log(Diamond())
        break;
    default:
        console.log('Shape?')
  }
  function Sqaure()
  {
    for (i = 1; i <= height; i++) 
    {
      for (j = 1; j <= height; j++) 
          console.log(character); 
        
      console.log("\n"); 
    } 
  }

  function Triangle()
  {
    for (i = 1; i <= height; i++) 
    {
      for (j = 1; j <= height; j++) 
          console.log(character); 
  
      console.log("\n"); 
      } 
    }

function Diamond()
{
  for(i = 0;i<=height;i++)
  {
       for(j=0;j<i;j++)
          console.log(character);

  console.log("");
  }
}
return shape, height, character
}
printShape('Triangle', 3, '$')