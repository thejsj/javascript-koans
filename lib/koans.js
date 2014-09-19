var koans = {
	filterPizzasWithMushroomsAndNutsUgly: function (products) {
        var has_mushrooms;
        var product;
        var products_i_can_eat = [];
        for (var i = 0; i < products.length; i += 1){
            product = products[i];
            if (product.containsNuts === false) {
                has_mushrooms = false;
                for (var ii = 0; ii < product.ingredients.length; ii += 1) {
                    if (product.ingredients[ii] === 'mushrooms') {
                        has_mushrooms = true;
                    }
                }
                if (!has_mushrooms) products_i_can_eat.push(product);
            }
        }
        return products_i_can_eat.length;
    },
    filterPizzasWithMushroomsAndNuts: function (products) {
		return _.filter(products, function (pizza) {
            return pizza.containsNuts === false && !_.contains(pizza.ingredients, 'mushrooms');
		}).length;
	},
    sumImperative: function () {
        var sum = 0;
        for (var i = 0; i < 1000; i += 1) {
            if (i % 3 === 0 || i % 5 === 0) {
                sum += i;
            }
        }
        return sum;
    },
    sumFunctional: function () {
        return _.reduce(_.range(1000), function (total, current){
            if (current % 3 === 0 || current % 5 === 0) {
                return total + current;
            }
            return total;
        }, 0) ;
    },
    ingredientOccurenceImperative: function(products) {
        var ingredient_occurrence = {};
        var ingredients;
        for (var i = 0; i < products.length; i += 1) {
            for(var ii = 0; ii < products[i].ingredients.length; ii += 1) {
                ingredient = products[i].ingredients[ii];
                ingredient_occurrence[ingredient] = (ingredient_occurrence[ingredient] || 0) + 1;
            } 
        }
        return ingredient_occurrence; 
    },
    ingredientOcurrenceFunctional: function (products) {
        return _.chain(products)
            .map(function (product) {
                return product.ingredients;
            })
            .flatten(ingredient)
            .reduce(function (ingredient) {
                return ingredient;
            })
        .value();
    },
    largestPrimeFactor: function (num) {    
        var lpf = function(input) {
            var factors = [];
            var numStorage = input;
            x = 2;
            while (numStorage != 1) {
                var result = numStorage % x;
                if (result === 0) {
                    factors.push(x);
                    numStorage = numStorage / x;
                    x = 2;
                } else {
                    x = x + 1;
                }
            }
            return factors.pop();
        };
        return lpf(num);
    },
    largestPalindrome: function (numbers) {
        var is_palindrome = function(number) {
            if (number.length % 2 === 0) return false;
            for (var i = 0; i < (number.length / 2 - 1); i += 1) {
                if (number[i] !== number[number.length - i - 1]) {
                    return false;
                }
            }
            return true;
        };
        var highest_palindrome;
        for(var ii = 0; ii < numbers.length; ii += 1) {
            var number = numbers[ii],
                number_str = number + '';
            if (highest_palindrome !== undefined && is_palindrome(number_str) && number > highest_palindrome) {
                highest_palindrome = number_str;
            } else if (highest_palindrome === undefined && is_palindrome(number_str)) {
                highest_palindrome = number_str;
            }
        }
        return +highest_palindrome || undefined;
    },
    squareSumDifference: function (n) {
        return +((3 * Math.pow(n, 2) + 2 * n) * (1 - Math.pow(n, 2)) / 12);
    },
    _divisbleBy1To20: function () {
        var divisibleBy1To20 = function(number) {
            for (var i = 20; i > 0; i -= 1) {
                if (number % i !== 0) return false;
            }
            return true;
        };
        var n = 20;
        while(!divisibleBy1To20(n)) {
            n += 20;
        }
        return n;
    },
    __divisbleBy1To20: function () {
        return Math.pow(2, 4) * Math.pow(3,2) * 5 * 7 * 11 * 13 * 17 * 19;
    },
    divisbleByAllNumbers: function (n) {
        var highestPowerUnderLimit = function (n, limit, i) {
            if (Math.pow(n, i) >= limit) return i - 1;
            return highestPowerUnderLimit(n, limit, i += 1); 
        };

        // Get all primes under this n
        var primes = this.allPrimeNumbersUnderN(n, true);

        // Get Highest power of prime number under n
        var result = 1;
        for (var i = 0; i < primes.length; i += 1) {
            var power = highestPowerUnderLimit(primes[i], n, 1);
            result = result * Math.pow(primes[i], power); 
        }
        return result;
    },
    allPrimeNumbersUnderN: function (n, return_array) {
        var isPrime = function(number) {
            var start = 2;
            while (start <= Math.sqrt(number)) {
                if (number % start++ < 1) return false;
            }
            return number > 1;
        };
        var primes = [];
        var i = 0;

        while(primes.length < n) {
            if (isPrime(i)) primes.push(i);
            i += 1;
        }

        if (return_array) return primes;
        return primes[primes.length - 1];
    }
};
