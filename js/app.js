// 1. Hide/show the text inside the #helpText span element when the user's mouse passes over the text "How are these ranked?" (Hint: use the jQuery toggle() method) 

$('#helpText').on('mouseover', function(){
  
    $('#helpText span').toggle();
  
});


// 2. Append a new restaurant to the restaurant list when the user enters a value into the #newRestaurant input and clicks on the #addNew button. 

  // BONUS: Before appending the new restaurant to the list, use string concatentation to make sure the new restaurant name is surrounded by an opening and closing <li> tag. 



$('#addNew').on('click', () => {                
              const newInfo = $('#newRestaurantInput').val();
              const newString = (`<li>${newInfo}</li>`);
              $('li').parent().append(newString); 

              $('#newRestaurantInput').val('') //Clear the input after click

});


// 3. Add the class "strike" to the restaurant name each time it's double clicked. Use event delegation on the ul element to listen for a click event on the ul's list items

//BONUS: Refactor challenge 3 using the "this" keyword.
//BONUS: Look up a jQuery method that will let you toggle the .strike class on and off. 


$('ul').on('dblclick', 'li', function() {  
  //This is called "EVENT DELEGATION on ul. Instead of attaching an event listener to all child elements, we assign an event listener to a parent element.In this case, ul is a parent, and li is ul's child elements.              
              $(this).toggleClass('strike');            
});