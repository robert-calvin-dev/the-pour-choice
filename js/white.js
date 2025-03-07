function updateWineDetails() {
    var grape = document.getElementById("whitegrape").value; // Get selected value

var details = {
    "Italian Pinot Grigio": {
        colour: "Pale yellow",
        region: "Italy",
        body: "Light",
        acidity: "High",
        flavor: "Green apple, citrus, pear, minerality, salinity",
        aroma: "Lemon, lime, green apple, minerality, salinity",
        foodPairing: "Grilled seafood, light pasta dishes, salads, fresh cheeses, vegetable dishes",
        highEnd: "2019 Jermann Pinot Grigio",
        simple: "2020 Santa Margherita Pinot Grigio"
    },
    "Albariño": {
        colour: "Pale straw",
        region: "Spain/Portugal",
        body: "Light",
        acidity: "High",
        flavor: "Lemon zest, grapefruit, honeydew, nectarine, subtle saltiness",
        aroma: "Lemon, lime, pear, grapefruit, honeysuckle, nectarine, orange zest",
        foodPairing: "Ceviche, sushi, fish tacos, seafood pasta, shrimp, oysters, grilled fish",
        highEnd: "2018 Pazo Cilleiro Albariño",
        simple: "2020 Martín Códax Albariño"
    },
    "Soave": {
        colour: "Pale yellow",
        region: "Italy",
        body: "Light",
        acidity: "High",
        flavor: "Almond, honey, citrus, apricot, mineral notes",
        aroma: "Lemon, almonds, flowers, apricot, minerality",
        foodPairing: "Grilled fish, seafood pasta, risotto, goat cheese, light salads",
        highEnd: "2017 Pieropan Soave Classico",
        simple: "2020 Masi Soave"
    },
    "Dry Furmint": {
        colour: "Light gold",
        region: "Hungary",
        body: "Medium",
        acidity: "High",
        flavor: "Green apple, lime, honey, herbs, minerality",
        aroma: "Citrus, herbs, floral notes, green apple",
        foodPairing: "Grilled chicken, seafood, sushi, creamy pasta dishes",
        highEnd: "2017 Disznókő Dry Furmint",
        simple: "2020 Barta Furmint"
    },
    "Gavi": {
        colour: "Pale gold",
        region: "Italy",
        body: "Light",
        acidity: "High",
        flavor: "Citrus, green apple, pear, floral, minerality",
        aroma: "Lemon, lime, green apple, floral notes",
        foodPairing: "Grilled vegetables, seafood, light pasta dishes, goat cheese",
        highEnd: "2018 Gavi di Gavi La Giustiniana",
        simple: "2020 Michele Chiarlo Gavi"
    },
    "Muscadet": {
        colour: "Pale straw",
        region: "France",
        body: "Light",
        acidity: "High",
        flavor: "Lemon, green apple, lime, minerality, saline",
        aroma: "Lemon zest, green apple, saline, floral notes",
        foodPairing: "Oysters, mussels, seafood, shellfish, light salads",
        highEnd: "2017 Domaine de la Pépière Muscadet",
        simple: "2020 Château du Coing Muscadet"
    },
    "Chablis": {
        colour: "Pale Gold",
        region: "France",
        body: "Light",
        acidity: "High",
        flavor: "Citrus, Green Apple, Flint",
        aroma: "Citrus, Green Apple, Flint",
        foodPairing: "Seafood, Oysters, Grilled Chicken",
        highEnd: "Domaine William Fèvre Chablis",
        simple: "William Hill Chablis"
    },
    "Grenache Blanc": {
        colour: "Straw Yellow",
        region: "France, Spain",
        body: "Medium",
        acidity: "Medium",
        flavor: "Stone Fruit, Herbal, Honey",
        aroma: "Stone Fruit, Floral, Honey",
        foodPairing: "Grilled Fish, Seafood Paella, Light Salads",
        highEnd: "Domaine du Pégaü Cuvée Réservée Blanc",
        simple: "La Vieille Ferme Blanc"
    },
    "Macabeo": {
        colour: "Pale Gold",
        region: "Spain",
        body: "Medium",
        acidity: "Medium",
        flavor: "Almond, Apple, Citrus",
        aroma: "Almond, Apple, Citrus",
        foodPairing: "Tapas, Manchego Cheese, White Fish",
        highEnd: "Lopez de Heredia Viña Gravonia",
        simple: "CVNE Macabeo"
    },
    "Grillo": {
        colour: "Golden Yellow",
        region: "Italy",
        body: "Medium",
        acidity: "High",
        flavor: "Citrus, Honey, Herbal",
        aroma: "Citrus, Honey, Herbal",
        foodPairing: "Pasta Primavera, Grilled Fish, Salads",
        highEnd: "Donnafugata SurSur Grillo",
        simple: "Cusumano Grillo"
    },
    "Arinto": {
        colour: "Pale Yellow",
        region: "Portugal",
        body: "Medium",
        acidity: "High",
        flavor: "Green Apple, Lemon, Floral",
        aroma: "Green Apple, Lemon, Floral",
        foodPairing: "Shellfish, Light Pasta, Goat Cheese",
        highEnd: "Quinta do Ameal Arinto",
        simple: "Adega de Pegões Arinto"
    },
    "French Sauvignon Blanc": {
        colour: "Pale Green",
        region: "France",
        body: "Light",
        acidity: "High",
        flavor: "Gooseberry, Lime, Green Pepper",
        aroma: "Gooseberry, Lime, Herbaceous",
        foodPairing: "Goat Cheese, Grilled Veggies, Fish",
        highEnd: "Domaine Vacheron Sancerre",
        simple: "Kim Crawford Sauvignon Blanc"
    },
    "Verdejo": {
        colour: "Straw Yellow",
        region: "Spain",
        body: "Medium",
        acidity: "Medium",
        flavor: "Green Apple, Lemon, Herbaceous",
        aroma: "Green Apple, Lemon, Fresh Herbs",
        foodPairing: "Paella, Roast Chicken, White Fish",
        highEnd: "Bodegas Naia Verdejo",
        simple: "Marqués de Riscal Verdejo"
    },
    "Grüner Veltliner": {
        colour: "Pale Yellow",
        region: "Austria",
        body: "Medium",
        acidity: "High",
        flavor: "White Pepper, Green Apple, Citrus",
        aroma: "White Pepper, Citrus, Apple",
        foodPairing: "Schnitzel, Asian Cuisine, Seafood",
        highEnd: "FX Pichler Grüner Veltliner",
        simple: "Lois Grüner Veltliner"
    },
    "Verdicchio": {
        colour: "Golden Yellow",
        region: "Italy",
        body: "Medium",
        acidity: "High",
        flavor: "Almond, Honey, Lemon",
        aroma: "Almond, Honey, Lemon",
        foodPairing: "Lobster, Creamy Pasta, Risotto",
        highEnd: "Fazi Battaglia Verdicchio",
        simple: "Umani Ronchi Verdicchio"
    },
    "Colombard": {
        colour: "Pale Yellow",
        region: "France",
        body: "Light",
        acidity: "High",
        flavor: "Green Apple, Citrus, Floral",
        aroma: "Floral, Apple, Citrus",
        foodPairing: "Fresh Salads, White Fish, Cheese",
        highEnd: "Domaine Tariquet Colombard",
        simple: "Domaine du Tariquet Colombard"
    },
    "Vermentino": {
        colour: "Pale Green",
        region: "Italy, France",
        body: "Light",
        acidity: "Medium",
        flavor: "Citrus, Green Apple, Almond",
        aroma: "Citrus, Green Apple, Herbal",
        foodPairing: "Seafood Pasta, Grilled Vegetables",
        highEnd: "Poggio al Tesoro Solosole Vermentino",
        simple: "Masseria Altemura Vermentino"
    },
    "New Zealand Sauvignon Blanc": {
        colour: "Pale Green",
        region: "New Zealand",
        body: "Light",
        acidity: "High",
        flavor: "Passionfruit, Gooseberry, Lime",
        aroma: "Passionfruit, Gooseberry, Lime",
        foodPairing: "Grilled Salmon, Asian Cuisine, Fresh Herbs",
        highEnd: "Cloudy Bay Sauvignon Blanc",
        simple: "Nobilo Sauvignon Blanc"
    },
    "Dry Chenin Blanc": {
        colour: "Pale Yellow",
        region: "France, South Africa",
        body: "Medium",
        acidity: "High",
        flavor: "Apple, Pear, Honey",
        aroma: "Apple, Pear, Honey",
        foodPairing: "Roast Chicken, Pork, Shellfish",
        highEnd: "Domaine Huet Vouvray",
        simple: "Bellingham Chenin Blanc"
    },
    "Chardonnay": {
        colour: "Golden Yellow",
        region: "Worldwide",
        body: "Medium to Full",
        acidity: "Medium",
        flavor: "Butter, Vanilla, Apple",
        aroma: "Butter, Vanilla, Apple",
        foodPairing: "Grilled Lobster, Creamy Dishes",
        highEnd: "Louis Jadot Puligny-Montrachet",
        simple: "Kendall Jackson Chardonnay"
    },
    "Marsanne": {
        colour: "Deep Gold",
        region: "France",
        body: "Full",
        acidity: "Medium",
        flavor: "Honey, Nuts, Spice",
        aroma: "Honey, Nuts, Spice",
        foodPairing: "Duck, Chicken, Nuts",
        highEnd: "Chapoutier Ermitage Blanc",
        simple: "Jean-Luc Colombo Marsanne"
    },
    "Roussanne": {
        colour: "Deep Gold",
        region: "France",
        body: "Full",
        acidity: "Medium",
        flavor: "Pear, Almond, Herbal",
        aroma: "Pear, Almond, Floral",
        foodPairing: "Grilled White Meats, Creamy Pasta",
        highEnd: "Château de Beaucastel Roussanne",
        simple: "Yalumba Roussanne"
    },
    "Semillon": {
        colour: "Pale Yellow",
        region: "France, Australia",
        body: "Medium to Full",
        acidity: "Medium",
        flavor: "Lemon, Honey, Beeswax",
        aroma: "Lemon, Honey, Beeswax",
        foodPairing: "Shellfish, Goat Cheese, Roast Veggies",
        highEnd: "Château d’Yquem Semillon",
        simple: "Tyrell’s Semillon"
    },
    "Verdejo": {
        colour: "Straw Yellow",
        region: "Spain",
        body: "Medium",
        acidity: "Medium",
        flavor: "Green Apple, Lemon, Herbaceous",
        aroma: "Green Apple, Lemon, Fresh Herbs",
        foodPairing: "Paella, Roast Chicken, White Fish",
        highEnd: "Bodegas Naia Verdejo",
        simple: "Marqués de Riscal Verdejo"
        },
    "Grüner Veltliner": {
        colour: "Pale Yellow",
        region: "Austria",
        body: "Medium",
        acidity: "High",
        flavor: "White Pepper, Green Apple, Citrus",
        aroma: "White Pepper, Citrus, Apple",
        foodPairing: "Schnitzel, Asian Cuisine, Seafood",
        highEnd: "FX Pichler Grüner Veltliner",
        simple: "Lois Grüner Veltliner"
        },
    "Verdicchio": {
        colour: "Golden Yellow",
        region: "Italy",
        body: "Medium",
        acidity: "High",
        flavor: "Almond, Honey, Lemon",
        aroma: "Almond, Honey, Lemon",
        foodPairing: "Lobster, Creamy Pasta, Risotto",
        highEnd: "Fazi Battaglia Verdicchio",
        simple: "Umani Ronchi Verdicchio"
        },
    "Colombard": {
        colour: "Pale Yellow",
        region: "France",
        body: "Light",
        acidity: "High",
        flavor: "Green Apple, Citrus, Floral",
        aroma: "Floral, Apple, Citrus",
        foodPairing: "Fresh Salads, White Fish, Cheese",
        highEnd: "Domaine Tariquet Colombard",
        simple: "Domaine du Tariquet Colombard"
        },
    "Trebbiano": {
        colour: "Pale Yellow",
        region: "Italy",
        body: "Light",
        acidity: "Medium",
        flavor: "Citrus, Apple, Mineral",
        aroma: "Citrus, Apple, Mineral",
        foodPairing: "Salads, Seafood, Light Cheese",
        highEnd: "Torrevento Trebbiano",
        simple: "Citra Trebbiano"
        },
    "American Pinot Gris": {
        colour: "Straw Yellow",
        region: "USA",
        body: "Medium",
        acidity: "Medium",
        flavor: "Pear, Apple, Spice",
        aroma: "Pear, Apple, Spice",
        foodPairing: "Sushi, Creamy Dishes, Pork",
        highEnd: "Cristom Pinot Gris",
        simple: "King Estate Pinot Gris"
        },
    "Viognier": {
        colour: "Deep Gold",
        region: "France",
        body: "Full",
        acidity: "Medium",
        flavor: "Peach, Apricot, Floral",
        aroma: "Peach, Apricot, Floral",
        foodPairing: "Grilled Shrimp, Roasted Chicken",
        highEnd: "Chateau Grillet Viognier",
        simple: "Yalumba Viognier"
        },
    "Dry Riesling": {
        colour: "Pale Gold",
        region: "Germany, France",
        body: "Light",
        acidity: "High",
        flavor: "Green Apple, Petrol, Lime",
        aroma: "Green Apple, Petrol, Lime",
        foodPairing: "Spicy Asian Cuisine, Smoked Meats",
        highEnd: "Trimbach Riesling Cuvée Frédéric Emile",
        simple: "Dr. Loosen Dry Riesling"
        },
    "Gewürztraminer": {
        colour: "Golden Yellow",
        region: "France, Germany",
        body: "Medium",
        acidity: "Medium",
        flavor: "Lychee, Rose, Spice",
        aroma: "Lychee, Rose, Spice",
        foodPairing: "Spicy Dishes, Asian Cuisine, Creamy Sauces",
        highEnd: "Zind-Humbrecht Gewürztraminer",
        simple: "Hogue Gewürztraminer"
        },
    "Spätlese Riesling": {
        colour: "Golden Yellow",
        region: "Germany",
        body: "Medium",
        acidity: "Medium",
        flavor: "Honey, Apricot, Lemon",
        aroma: "Honey, Apricot, Lemon",
        foodPairing: "Pineapple Chicken, Thai Curry",
        highEnd: "Selbach-Oster Spätlese Riesling",
        simple: "Blüfeld Spätlese Riesling"
        }
};

if (grape in details) {
        document.getElementById("whiteregion").innerText = details[grape].region;
        document.getElementById("whiteflavor").innerText = details[grape].flavor;
        document.getElementById("whitebody").innerText = details[grape].body;
        document.getElementById("whiteacidity").innerText = details[grape].acidity;
        document.getElementById("whitecolour").innerText = details[grape].colour;
        document.getElementById("whitearoma").innerText = details[grape].aroma;
        document.getElementById("whitefoodPairing").innerText = details[grape].foodPairing;
        document.getElementById("whitehighEnd").innerText = details[grape].highEnd;
        document.getElementById("whitesimple").innerText = details[grape].simple;
    } else {
        document.getElementById("whiteregion").innerText = "Select a grape to see details.";
        document.getElementById("whiteflavor").innerText = "Select a grape to see details.";
        document.getElementById("whitebody").innerText = "Select a grape to see details.";
        document.getElementById("whiteacidity").innerText = "Select a grape to see details.";
        document.getElementById("whitecolour").innerText = "Select a grape to see details.";
        document.getElementById("whitearoma").innerText = "Select a grape to see details.";
        document.getElementById("whitefoodPairing").innerText = "Select a grape to see details.";
        document.getElementById("whitehighEnd").innerText = "Select a grape to see details.";
        document.getElementById("whitesimple").innerText = "Select a grape to see details.";
    }
}

document.getElementById("whitegrape").addEventListener("change", updateWineDetails);
