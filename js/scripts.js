$(document).ready(function() {
  $("form#questions").submit(function(event) {
    event.preventDefault();
    const inputValue1 = $("input#favoriteBeverages").val();
    const inputValue2 = $("input#favoriteAnimals").val();
    const inputValue3 = $("input#favoriteCountries").val();
    
   
    const firstArray = [inputValue1, inputValue2, inputValue3];
    const secondArray = [firstArray[1], firstArray[0], firstArray[2]];
    secondArray.push();
    secondArray;
    // const thirdArray = secondArray.slice();
    // thirdArray;
    
    $(".output#favBeverages").text(secondArray[0]);
    $(".output#favAnimals").text(secondArray[1]);
    $(".output#favCountries").text(secondArray[2]);


  //  $("#favBeverages").text(secondArray);
  //  $("#favAnimals").text(secondArray[0]);
  //  $("#favCountries").text(secondArray[2]);
    // console.log(firstArray);
    // console.log(secondArray);
  });
  $("#refresh").click(function(event) {
    location.reload();
  });
});


