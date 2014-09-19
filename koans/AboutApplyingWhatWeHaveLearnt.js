var _; //globals

describe("About Applying What We Have Learnt", function() {

  var products;

  beforeEach(function () { 
    products = [
       { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
       { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
       { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
       { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
       { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
    ];
  });

  /*********************************************************************************/

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (imperative)", function () {
    var hasMushrooms, productsICanEat = [];
    for (var i = 0; i < products.length; i+=1) {
        if (products[i].containsNuts === false) {
            hasMushrooms = false;
            for (var j = 0; j < products[i].ingredients.length; j+=1) {
               if (products[i].ingredients[j] === "mushrooms") {
                  hasMushrooms = true;
               }
            }
            if (!hasMushrooms) productsICanEat.push(products[i]);
        }
    }

    expect(productsICanEat.length).toBe(koans.filterPizzasWithMushroomsAndNutsUgly(products));
  });

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (functional)", function () {
      expect(koans.filterPizzasWithMushroomsAndNutsUgly(products)).toBe(koans.filterPizzasWithMushroomsAndNuts(products));
  });

  /*********************************************************************************/

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (imperative)", function () {
    var sum = 0;
    for(var i=1; i<1000; i+=1) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    expect(sum).toBe(koans.sumImperative());
  });

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (functional)", function () {
    expect(233168).toBe(koans.sumFunctional());
  });

  /*********************************************************************************/
   it("should count the ingredient occurrence (imperative)", function () {
    var ingredientCount = { "{ingredient name}": 0 };
    for (i = 0; i < products.length; i+=1) {
        for (j = 0; j < products[i].ingredients.length; j+=1) {
            ingredientCount[products[i].ingredients[j]] = (ingredientCount[products[i].ingredients[j]] || 0) + 1;
        }
    }
    expect(ingredientCount.mushrooms).toBe(koans.ingredientOccurenceImperative(products).mushrooms);
  });

  it("should count the ingredient occurrence (functional)", function () {
    var ingredientCount = { "{ingredient name}": 0 };
    /* chain() together map(), flatten() and reduce() */
    expect(ingredientCount.mushrooms).toBe(koans.ingredientOcurrenceFunctional(products).mushrooms);
  });

  /*********************************************************************************/
  /* UNCOMMENT FOR EXTRA CREDIT */

  it("should find the largest prime factor of a composite number", function () {
    // Googled it
    expect(koans.largestPrimeFactor(100)).toBe(5);
    expect(koans.largestPrimeFactor(1000)).toBe(5);
    expect(koans.largestPrimeFactor(777)).toBe(37);
    expect(koans.largestPrimeFactor(81)).toBe(3);
  });
  
  it("should find the largest palindrome made from the product of two 3 digit numbers", function () {
    expect(koans.largestPalindrome([111, 562, 578, 111, 353, 988, 757])).toBe(757);
    expect(koans.largestPalindrome([562, 578, 111, 353, 988, 745])).toBe(353);
    expect(koans.largestPalindrome([562, 578, 111, 353, 988, 999])).toBe(999);
    expect(koans.largestPalindrome([565, 578, 1111, 353, 988, 449])).toBe(565);
    expect(koans.largestPalindrome([565, 578, 11111, 353, 986923488, 449])).toBe(11111);
    expect(koans.largestPalindrome([865, 578, 211, 358, 988, 449])).toBe(undefined);
  });
  it("should find the smallest number divisible by each of the numbers 1 to 20", function () {
    expect(koans.divisbleByAllNumbers(10)).toBe(2520);
    expect(koans.divisbleByAllNumbers(20)).toBe(232792560);
  });
  it("should find the difference between the sum of the squares and the square of the sums", function () {
    // Googled it
    expect(koans.squareSumDifference(10)).toBe(-2640);
    expect(koans.squareSumDifference(2)).toBe(-4);
    expect(koans.squareSumDifference(5)).toBe(-170);
    expect(koans.squareSumDifference(999)).toBe(-249167416500);
  });

  it("should find the 10001st prime", function () {
    expect(koans.allPrimeNumbersUnderN(10001)).toBe(104743);
  });
});
