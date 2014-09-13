var koans = {
	filterPizzasWithMushroomsAndNutsUgly: function (products) {
        var i;
        var ii;
        var has_mushrooms;
        var product;
        var products_i_can_eat = [];
        for (i = 0; i < products.length; i += 1){
            product = products[i];
            if (product.containsNuts === false) {
                has_mushrooms = false;
                for (ii = 0; ii < product.ingredients.length; ii += 1) {
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
        var i;
        var sum = 0;
        for (i = 0; i < 1000; i += 1) {
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
        var i;
        var ii;
        var ingredients;
        for (i = 0; i < products.length; i += 1) {
            for(ii = 0; ii < products[i].ingredients.length; ii += 1) {
                ingredient = products[i].ingredients[ii];
                ingredient_occurrence[ingredient] = (ingredient_occurrence[ingredient] || 0) + 1;
            } 
        }
        return ingredient_occurrence; 
    },
    ingredientOcurrenceFunctional: function (products) {
        return _.chain(products)
            _.map(function (product) {
                return product.ingredients;
            })
            _.flatten(ingredient)
            _.reduce(function (ingredient) {
                return ingredient;
            })
        _.value();
    },
};
