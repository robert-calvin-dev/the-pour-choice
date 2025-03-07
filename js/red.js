function updateWineDetails() {
 var grape = document.getElementById("redgrape").value; // Get selected value

 var details = {
     "Tannat": {
         region: "South West France, Uruguay",
         flavor: "Dark fruits (blackberry, plum), earthy, tobacco",
         body: "Full-bodied",
         tannins: "High tannins",
         acidity: "Medium acidity",
         colour: "Deep purple",
         aroma: "Blackberry, plum, tobacco, earthy",
         foodPairing: "Grilled meats, strong cheeses, stews",
         highEnd: "Bodega Garzón Tannat Reserva (Uruguay)",
         simple: "Madiran Tannat (France)"
     },
     "Nebbiolo": {
         region: "Piedmont, Italy",
         flavor: "Cherry, rose, tar, leather",
         body: "Medium to full-bodied",
         tannins: "Very high tannins",
         acidity: "High acidity",
         colour: "Pale ruby",
         aroma: "Rose petals, red cherry, tar, truffle",
         foodPairing: "Truffle dishes, risotto, aged cheeses",
         highEnd: "Gaja Barbaresco (Italy)",
         simple: "Langhe Nebbiolo (Italy)"
     },
     "Sagrantino": {
         region: "Umbria, Italy",
         flavor: "Blackberry, spice, cocoa, high tannins",
         body: "Full-bodied",
         tannins: "Extremely high tannins",
         acidity: "Medium to high acidity",
         colour: "Dark ruby red",
         aroma: "Blackberry, spice, chocolate, herbs",
         foodPairing: "Roast lamb, game meats, hearty pastas",
         highEnd: "Arnaldo Caprai 25 Anni (Italy)",
         simple: "Montefalco Sagrantino (Italy)"
     },
     "French Malbec": {
         region: "Cahors, France, Mendoza, Argentina",
         flavor: "Blackberry, black plum, vanilla, smoky",
         body: "Full-bodied",
         tannins: "Medium to high tannins",
         acidity: "Medium acidity",
         colour: "Inky dark purple",
         aroma: "Blackberry, black plum, vanilla, spice",
         foodPairing: "Steaks, barbecue, blue cheese",
         highEnd: "Clos Triguedina Cahors Malbec (France)",
         simple: "Trapiche Malbec (Argentina)"
     },
     "Chianti": {
     region: "Tuscany, Italy",
     flavor: "Red cherry, dried herbs, balsamic, leather",
     body: "Medium-bodied",
     tannins: "Medium to high tannins",
     acidity: "High acidity",
     colour: "Bright ruby red",
     aroma: "Red cherry, dried oregano, tobacco",
     foodPairing: "Pasta, tomato-based sauces, grilled meats",
     highEnd: "Castello di Ama Chianti Classico Gran Selezione",
     simple: "Ruffino Chianti Superiore"
     },
     "Bordeaux": {
         region: "Bordeaux, France",
         flavor: "Blackcurrant, cedar, graphite, tobacco",
         body: "Full-bodied",
         tannins: "High tannins",
         acidity: "Medium to high acidity",
         colour: "Deep ruby red",
         aroma: "Blackcurrant, plum, tobacco, oak",
         foodPairing: "Steak, lamb, roasted duck",
         highEnd: "Château Margaux Premier Grand Cru",
         simple: "Château La Croix du Duc Bordeaux"
     },
     "Tempranillo": {
         region: "Rioja, Spain",
         flavor: "Red cherry, leather, dill, vanilla",
         body: "Medium to full-bodied",
         tannins: "Medium tannins",
         acidity: "Medium to high acidity",
         colour: "Deep ruby red",
         aroma: "Red berries, vanilla, tobacco",
         foodPairing: "Chorizo, grilled meats, aged cheese",
         highEnd: "Vega Sicilia Único",
         simple: "Campo Viejo Reserva Rioja"
     },
     "French Mourvèdre": {
         region: "Bandol, France",
         flavor: "Blackberry, black pepper, gamey, herbal",
         body: "Full-bodied",
         tannins: "High tannins",
         acidity: "Medium acidity",
         colour: "Dark purple",
         aroma: "Black fruits, earthy, spice",
         foodPairing: "Game meats, barbecue, hearty stews",
         highEnd: "Domaine Tempier Bandol Mourvèdre",
         simple: "Château Pradeaux Bandol"
     },
     "Aglianico": {
         region: "Campania & Basilicata, Italy",
         flavor: "Dark fruits, leather, smoke, spice",
         body: "Full-bodied",
         tannins: "Very high tannins",
         acidity: "High acidity",
         colour: "Deep garnet red",
         aroma: "Black cherry, smoke, dried herbs",
         foodPairing: "Roast lamb, spicy dishes, hard cheese",
         highEnd: "Taurasi DOCG Riserva Feudi di San Gregorio",
         simple: "D'Angelo Aglianico del Vulture"
     },
     "Italian Barbera": {
         region: "Piedmont, Italy",
         flavor: "Red cherry, plum, spice, subtle vanilla",
         body: "Medium-bodied",
         tannins: "Low to medium tannins",
         acidity: "High acidity",
         colour: "Bright ruby red",
         aroma: "Red berries, cinnamon, floral notes",
         foodPairing: "Pizza, tomato-based pasta, roasted chicken",
         highEnd: "Braida Bricco dell'Uccellone Barbera d'Asti",
         simple: "Vietti Barbera d'Alba Tre Vigne"
     },
     "Montepulciano": {
         region: "Abruzzo, Italy",
         flavor: "Dark berries, mocha, oregano, smoke",
         body: "Full-bodied",
         tannins: "Medium to high tannins",
         acidity: "Medium acidity",
         colour: "Deep ruby red",
         aroma: "Black cherry, chocolate, herbs",
         foodPairing: "Roast pork, grilled sausage, hearty pastas",
         highEnd: "Emidio Pepe Montepulciano d'Abruzzo",
         simple: "Masciarelli Montepulciano d'Abruzzo"
     },
     "Sangiovese": {
     region: "Tuscany, Italy",
     flavor: "Red cherry, tomato, earthy, balsamic",
     body: "Medium-bodied",
     tannins: "Medium to high tannins",
     acidity: "High acidity",
     colour: "Bright ruby red",
     aroma: "Red fruit, dried herbs, leather",
     foodPairing: "Pasta, grilled steak, aged cheeses",
     highEnd: "Biondi Santi Brunello di Montalcino",
     simple: "Antinori Peppoli Chianti Classico"
     },
     "Carmenere": {
         region: "Chile",
         flavor: "Blackberry, green pepper, coffee, chocolate",
         body: "Medium-bodied",
         tannins: "Medium tannins",
         acidity: "Medium acidity",
         colour: "Deep purple",
         aroma: "Dark berries, bell pepper, spice",
         foodPairing: "Barbecue, grilled vegetables, empanadas",
         highEnd: "Carmín de Peumo (Concha y Toro)",
         simple: "Casillero del Diablo Carmenere"
     },
     "Cabernet Franc": {
         region: "Loire Valley, France",
         flavor: "Raspberry, bell pepper, violets, tobacco",
         body: "Medium-bodied",
         tannins: "Medium tannins",
         acidity: "Medium to high acidity",
         colour: "Ruby red",
         aroma: "Red berries, floral, green pepper",
         foodPairing: "Grilled pork, roasted vegetables, goat cheese",
         highEnd: "Château Cheval Blanc (Bordeaux blend)",
         simple: "Domaine de Pallus Chinon"
     },
     "Lagrein": {
         region: "Alto Adige, Italy",
         flavor: "Blackberry, dark chocolate, spice, floral",
         body: "Full-bodied",
         tannins: "High tannins",
         acidity: "Medium acidity",
         colour: "Deep purple",
         aroma: "Dark fruit, chocolate, herbs",
         foodPairing: "Braised meats, polenta, aged cheeses",
         highEnd: "Abbazia di Novacella Lagrein Riserva",
         simple: "Elena Walch Lagrein"
     },
     "Cool Climate Cabernet Sauvignon": {
         region: "Sonoma, Washington, Bordeaux",
         flavor: "Blackcurrant, cedar, mint, graphite",
         body: "Full-bodied",
         tannins: "High tannins",
         acidity: "Medium to high acidity",
         colour: "Deep ruby red",
         aroma: "Black fruit, mint, earthy",
         foodPairing: "Roast beef, mushrooms, aged cheddar",
         highEnd: "Ridge Monte Bello",
         simple: "Columbia Crest Grand Estates Cabernet Sauvignon"
     },
     "Mencia": {
     region: "Bierzo & Ribeira Sacra, Spain",
     flavor: "Red cherry, pomegranate, floral, mineral",
     body: "Medium-bodied",
     tannins: "Medium tannins",
     acidity: "High acidity",
     colour: "Bright ruby",
     aroma: "Red berries, crushed rocks, violets",
     foodPairing: "Grilled fish, charcuterie, earthy dishes",
     highEnd: "Raúl Pérez Ultreia Saint Jacques",
     simple: "Descendientes de J. Palacios Petalos"
 },
 "Valpolicella": {
     region: "Veneto, Italy",
     flavor: "Red cherry, almond, herbal, spice",
     body: "Light to medium-bodied",
     tannins: "Low to medium tannins",
     acidity: "High acidity",
     colour: "Bright ruby red",
     aroma: "Cherry, cinnamon, dried flowers",
     foodPairing: "Pizza, pasta, roasted poultry",
     highEnd: "Quintarelli Valpolicella Classico Superiore",
     simple: "Allegrini Valpolicella"
 },
 "Côtes du Rhône": {
     region: "Rhône Valley, France",
     flavor: "Blackberry, plum, pepper, spice",
     body: "Medium to full-bodied",
     tannins: "Medium tannins",
     acidity: "Medium acidity",
     colour: "Deep ruby red",
     aroma: "Dark berries, white pepper, herbs",
     foodPairing: "Grilled lamb, ratatouille, hard cheese",
     highEnd: "Château de Beaucastel Châteauneuf-du-Pape",
     simple: "Guigal Côtes du Rhône"
 },
 "Beaujolais": {
     region: "Beaujolais, France",
     flavor: "Red cherry, raspberry, banana, floral",
     body: "Light-bodied",
     tannins: "Low tannins",
     acidity: "High acidity",
     colour: "Bright ruby red",
     aroma: "Red berries, bubblegum, violets",
     foodPairing: "Turkey, salmon, soft cheeses",
     highEnd: "Domaine Marcel Lapierre Morgon",
     simple: "Georges Duboeuf Beaujolais Nouveau"
 },
 "French Syrah": {
     region: "Northern Rhône, France",
     flavor: "Blackberry, olive, smoked meat, pepper",
     body: "Full-bodied",
     tannins: "High tannins",
     acidity: "Medium to high acidity",
     colour: "Inky dark purple",
     aroma: "Black fruits, spice, earthy",
     foodPairing: "Grilled steak, mushroom risotto, aged cheese",
     highEnd: "E. Guigal Côte-Rôtie La Landonne",
     simple: "Crozes-Hermitage Syrah"
 },
 "Trincadeira": {
     region: "Alentejo, Portugal",
     flavor: "Dark berries, dried herbs, chocolate, tobacco",
     body: "Medium-bodied",
     tannins: "Medium tannins",
     acidity: "Medium to high acidity",
     colour: "Deep ruby",
     aroma: "Black fruit, dried flowers, spice",
     foodPairing: "Portuguese stews, grilled meats, aged cheese",
     highEnd: "Cartuxa Trincadeira",
     simple: "Esporão Trincadeira"
 },
 "Cool Climate Cabernet Franc": {
     region: "Loire Valley, France, Ontario, Canada",
     flavor: "Raspberry, green pepper, graphite, floral",
     body: "Medium-bodied",
     tannins: "Medium tannins",
     acidity: "Medium to high acidity",
     colour: "Ruby red",
     aroma: "Red berries, violets, earth",
     foodPairing: "Roast duck, grilled vegetables, soft cheese",
     highEnd: "Clos Rougeard Saumur-Champigny",
     simple: "Tawse Winery Cabernet Franc (Canada)"
 },
 "Garnacha": {
     region: "Spain, Rhône Valley (Grenache)",
     flavor: "Strawberry, raspberry, white pepper, dried herbs",
     body: "Medium-bodied",
     tannins: "Medium tannins",
     acidity: "Medium acidity",
     colour: "Ruby red",
     aroma: "Red fruit, spice, earthy notes",
     foodPairing: "Paella, grilled lamb, chorizo",
     highEnd: "Clos Erasmus Priorat",
     simple: "Borsao Tres Picos Garnacha"
 },
 "Amarone Della Valpolicella": {
     region: "Veneto, Italy",
     flavor: "Dried cherry, fig, chocolate, spice",
     body: "Full-bodied",
     tannins: "High tannins",
     acidity: "Medium acidity",
     colour: "Deep garnet red",
     aroma: "Dried fruit, cocoa, spice",
     foodPairing: "Braised meats, truffle pasta, aged cheese",
     highEnd: "Quintarelli Amarone della Valpolicella",
     simple: "Tommasi Amarone"
 },
 "Negroamaro": {
     region: "Puglia, Italy",
     flavor: "Black cherry, licorice, tobacco, dark chocolate",
     body: "Full-bodied",
     tannins: "High tannins",
     acidity: "Medium acidity",
     colour: "Dark ruby red",
     aroma: "Black fruit, spice, earthy",
     foodPairing: "Osso buco, spicy pasta, cured meats",
     highEnd: "Leone de Castris Five Roses",
     simple: "Masseria Li Veli Negroamaro"
 },
 "Pinotage": {
     region: "South Africa",
     flavor: "Dark fruit, coffee, smoke, earthy",
     body: "Medium to full-bodied",
     tannins: "Medium tannins",
     acidity: "Medium acidity",
     colour: "Deep ruby",
     aroma: "Plum, tobacco, smoke",
     foodPairing: "Barbecue, smoked meats, mushrooms",
     highEnd: "Kanonkop Black Label Pinotage",
     simple: "Beyerskloof Pinotage"
 },
 "Warm Climate Cabernet Sauvignon": {
     region: "Napa Valley, Australia, Chile",
     flavor: "Blackberry, vanilla, spice, tobacco",
     body: "Full-bodied",
     tannins: "High tannins",
     acidity: "Medium acidity",
     colour: "Deep ruby red",
     aroma: "Black fruit, oak, vanilla",
     foodPairing: "Grilled steak, ribs, aged cheddar",
     highEnd: "Opus One Napa Valley",
     simple: "Penfolds Bin 407 Cabernet Sauvignon"
 },
 "Super Tuscans": {
     region: "Tuscany, Italy",
     flavor: "Blackberry, chocolate, tobacco, spice",
     body: "Full-bodied",
     tannins: "High tannins",
     acidity: "Medium to high acidity",
     colour: "Deep ruby red",
     aroma: "Dark fruit, oak, leather",
     foodPairing: "Grilled meats, truffle dishes, aged cheeses",
     highEnd: "Sassicaia",
     simple: "Tignanello"
 },
 "American Merlot": {
     region: "California, Washington, Long Island",
     flavor: "Plum, vanilla, chocolate, spice",
     body: "Medium to full-bodied",
     tannins: "Medium tannins",
     acidity: "Medium acidity",
     colour: "Deep ruby",
     aroma: "Red berries, cocoa, vanilla",
     foodPairing: "Roast duck, grilled chicken, soft cheeses",
     highEnd: "Pahlmeyer Merlot",
     simple: "Duckhorn Napa Valley Merlot"
 },
 "Alfrocheiro": {
     region: "Dão, Portugal",
     flavor: "Dark berries, floral, spice, chocolate",
     body: "Medium-bodied",
     tannins: "Medium tannins",
     acidity: "Medium to high acidity",
     colour: "Deep garnet red",
     aroma: "Black fruit, violets, herbs",
     foodPairing: "Grilled meats, roasted vegetables, aged cheese",
     highEnd: "Quinta dos Roques Alfrocheiro",
     simple: "Casa de Santar Alfrocheiro"
 },
 "Alicante Bouschet": {
     region: "Alentejo, Portugal & Southern France",
     flavor: "Dark plum, black pepper, cocoa, earthy",
     body: "Full-bodied",
     tannins: "High tannins",
     acidity: "Medium acidity",
     colour: "Inky dark purple",
     aroma: "Black fruit, spice, smoky",
     foodPairing: "Barbecue, slow-cooked stews, aged cheese",
     highEnd: "Cartuxa Alicante Bouschet",
     simple: "Herdade do Esporão Alicante Bouschet"
 },
 "Shiraz": {
     region: "Australia, Rhône Valley (Syrah)",
     flavor: "Blackberry, chocolate, pepper, spice",
     body: "Full-bodied",
     tannins: "High tannins",
     acidity: "Medium to high acidity",
     colour: "Deep purple",
     aroma: "Dark fruit, spice, smoky",
     foodPairing: "Barbecue, grilled steak, spicy dishes",
     highEnd: "Penfolds Grange Shiraz",
     simple: "d'Arenberg The Footbolt Shiraz"
 },
 "Monastrell": {
     region: "Spain (Mourvèdre in France)",
     flavor: "Blackberry, black pepper, gamey, earthy",
     body: "Full-bodied",
     tannins: "High tannins",
     acidity: "Medium acidity",
     colour: "Dark purple",
     aroma: "Black fruit, smoky, spice",
     foodPairing: "Grilled lamb, barbecue, aged cheese",
     highEnd: "Casa Castillo Pie Franco Monastrell",
     simple: "Juan Gil Monastrell"
 },
 "Malbec": {
     region: "Mendoza, Argentina & Cahors, France",
     flavor: "Blackberry, black cherry, cocoa, plum",
     body: "Full-bodied",
     tannins: "Medium to high tannins",
     acidity: "Medium acidity",
     colour: "Inky dark purple",
     aroma: "Dark fruit, vanilla, oak",
     foodPairing: "Grilled meats, blue cheese, empanadas",
     highEnd: "Catena Zapata Malbec Argentino",
     simple: "Alamos Malbec"
 },
 "Nero D'Avola": {
     region: "Sicily, Italy",
     flavor: "Plum, cherry, licorice, spice",
     body: "Medium to full-bodied",
     tannins: "Medium to high tannins",
     acidity: "Medium acidity",
     colour: "Deep ruby",
     aroma: "Dark fruit, herbs, spice",
     foodPairing: "Pasta with meat sauce, grilled meats, aged cheese",
     highEnd: "Donnafugata Mille e Una Notte",
     simple: "Planeta Nero d'Avola"
 },
 "American Petite Sirah": {
     region: "California, USA",
     flavor: "Blueberry, dark chocolate, black pepper, smoky",
     body: "Full-bodied",
     tannins: "High tannins",
     acidity: "Medium acidity",
     colour: "Inky dark purple",
     aroma: "Dark berries, spice, earthy",
     foodPairing: "Barbecue ribs, grilled meats, smoked cheese",
     highEnd: "Turley Wine Cellars Petite Sirah",
     simple: "Bogle Vineyards Petite Sirah"
 },
 "Primitivo": {
     region: "Puglia, Italy",
     flavor: "Dark fruit, licorice, dried fig, spice",
     body: "Full-bodied",
     tannins: "Medium to high tannins",
     acidity: "Medium acidity",
     colour: "Deep ruby",
     aroma: "Plum, black cherry, pepper",
     foodPairing: "Barbecue, braised meats, pasta",
     highEnd: "Gianfranco Fino Es Primitivo",
     simple: "Tormaresca Primitivo"
 },
 "Zinfandel": {
     region: "California, USA",
     flavor: "Blackberry, cinnamon, jam, spice",
     body: "Full-bodied",
     tannins: "Medium tannins",
     acidity: "Medium acidity",
     colour: "Deep ruby red",
     aroma: "Ripe fruit, black pepper, vanilla",
     foodPairing: "Barbecue, spicy dishes, smoked meats",
     highEnd: "Ridge Vineyards Geyserville Zinfandel",
     simple: "Seghesio Sonoma Zinfandel"
 },
 "American Grenache": {
     region: "California, USA",
     flavor: "Strawberry, white pepper, dried herbs, red fruit",
     body: "Medium-bodied",
     tannins: "Medium tannins",
     acidity: "Medium to high acidity",
     colour: "Ruby red",
     aroma: "Red berries, floral, earthy",
     foodPairing: "Grilled lamb, tapas, mushroom dishes",
     highEnd: "Sine Qua Non Grenache",
     simple: "Bonny Doon Vineyard Clos de Gilroy"
 },
 "GSM Blend": {
     region: "Rhône Valley, Australia, California",
     flavor: "Blackberry, raspberry, pepper, floral",
     body: "Medium to full-bodied",
     tannins: "Medium to high tannins",
     acidity: "Medium acidity",
     colour: "Deep ruby red",
     aroma: "Red and black fruit, spice, earthy",
     foodPairing: "Braised meats, grilled vegetables, soft cheeses",
     highEnd: "Château de Beaucastel Châteauneuf-du-Pape",
     simple: "Yalumba GSM Barossa Valley"
 },
 "Touriga Nacional": {
     region: "Douro Valley, Portugal",
     flavor: "Blueberry, violet, black tea, chocolate",
     body: "Full-bodied",
     tannins: "High tannins",
     acidity: "Medium to high acidity",
     colour: "Deep inky purple",
     aroma: "Dark fruit, floral, spice",
     foodPairing: "Roast lamb, game meats, strong cheeses",
     highEnd: "Niepoort Batuta Touriga Nacional",
     simple: "Quinta do Crasto Touriga Nacional"
 },
 "Lambrusco": {
     region: "Emilia-Romagna, Italy",
     flavor: "Red berries, floral, light fizz, dry to sweet",
     body: "Light to medium-bodied",
     tannins: "Low tannins",
     acidity: "High acidity",
     colour: "Ruby red",
     aroma: "Strawberry, raspberry, violet",
     foodPairing: "Salumi, pizza, fried foods",
     highEnd: "Cantina della Volta Lambrusco di Sorbara",
     simple: "Medici Ermete Lambrusco"
 },
 "Brachetto D'Acqui": {
     region: "Piedmont, Italy",
     flavor: "Strawberry, rose, raspberry, light fizz",
     body: "Light-bodied",
     tannins: "Low tannins",
     acidity: "High acidity",
     colour: "Bright ruby red",
     aroma: "Red berries, floral, sweet spice",
     foodPairing: "Chocolate desserts, fruit tarts, soft cheese",
     highEnd: "Braida Brachetto d’Acqui",
     simple: "Rinaldi Brachetto d’Acqui"
 },
 "Recioto Della Valpolicella": {
     region: "Veneto, Italy",
     flavor: "Dried cherry, fig, chocolate, sweet spices",
     body: "Full-bodied",
     tannins: "Medium to high tannins",
     acidity: "Medium acidity",
     colour: "Deep garnet red",
     aroma: "Dried fruit, cocoa, spice",
     foodPairing: "Chocolate, nutty desserts, aged cheese",
     highEnd: "Quintarelli Recioto della Valpolicella",
     simple: "Tommasi Recioto"
 },
 "Port": {
     region: "Douro Valley, Portugal",
     flavor: "Dark berries, chocolate, nutty, caramel",
     body: "Full-bodied",
     tannins: "High tannins",
     acidity: "Medium acidity",
     colour: "Deep ruby",
     aroma: "Black fruit, spice, oak",
     foodPairing: "Chocolate, blue cheese, nuts",
     highEnd: "Taylor’s Vintage Port",
     simple: "Dow’s Fine Ruby Port"
 },
 "Banyuls": {
     region: "Roussillon, France",
     flavor: "Dried fruit, fig, nutty, cocoa",
     body: "Full-bodied",
     tannins: "Medium tannins",
     acidity: "Medium acidity",
     colour: "Deep ruby",
     aroma: "Dark berries, spices, caramel",
     foodPairing: "Chocolate, foie gras, blue cheese",
     highEnd: "Domaine du Mas Blanc Banyuls",
     simple: "M. Chapoutier Banyuls"
 },
 "Maury": {
     region: "Roussillon, France",
     flavor: "Plum, licorice, caramel, chocolate",
     body: "Full-bodied",
     tannins: "Medium tannins",
     acidity: "Medium acidity",
     colour: "Dark garnet red",
     aroma: "Dried fruit, nuts, cocoa",
     foodPairing: "Chocolate desserts, nutty cheese, foie gras",
     highEnd: "Mas Amiel Vintage Maury",
     simple: "Domaine Pouderoux Maury"
 },
 "Tawny Port": {
     region: "Douro Valley, Portugal",
     flavor: "Caramel, dried fruit, nuts, vanilla",
     body: "Full-bodied",
     tannins: "Medium tannins",
     acidity: "Medium acidity",
     colour: "Amber-brown",
     aroma: "Toffee, spice, dried fruit",
     foodPairing: "Nutty desserts, aged cheese, crème brûlée",
     highEnd: "Graham’s 40-Year-Old Tawny Port",
     simple: "Sandeman 10-Year-Old Tawny Port"
 },
 "Vin Santo Rosso": {
     region: "Tuscany, Italy",
     flavor: "Honey, dried fig, nutty, caramel",
     body: "Full-bodied",
     tannins: "Medium tannins",
     acidity: "High acidity",
     colour: "Amber-red",
     aroma: "Dried fruit, spice, vanilla",
     foodPairing: "Biscotti, aged cheese, nut-based desserts",
     highEnd: "Avignonesi Vin Santo",
     simple: "Fattoria di Fèlsina Vin Santo"
 }
};


 // If a grape is selected, update all attributes
 if (grape in details) {
     document.getElementById("redregion").innerText = details[grape].region;
     document.getElementById("redflavor").innerText = details[grape].flavor;
     document.getElementById("redbody").innerText = details[grape].body;
     document.getElementById("redtannins").innerText = details[grape].tannins;
     document.getElementById("redacidity").innerText = details[grape].acidity;
     document.getElementById("redcolour").innerText = details[grape].colour;
     document.getElementById("redaroma").innerText = details[grape].aroma;
     document.getElementById("redfoodPairing").innerText = details[grape].foodPairing;
     document.getElementById("redhighEnd").innerText = details[grape].highEnd;
     document.getElementById("redsimple").innerText = details[grape].simple;
 } else {
     // Default text when no grape is selected
     document.getElementById("redregion").innerText = "Select a grape to see details.";
     document.getElementById("redflavor").innerText = "Select a grape to see details.";
     document.getElementById("redbody").innerText = "Select a grape to see details.";
     document.getElementById("redtannins").innerText = "Select a grape to see details.";
     document.getElementById("redacidity").innerText = "Select a grape to see details.";
     document.getElementById("redcolour").innerText = "Select a grape to see details.";
     document.getElementById("redaroma").innerText = "Select a grape to see details.";
     document.getElementById("redfoodPairing").innerText = "Select a grape to see details.";
     document.getElementById("redhighEnd").innerText = "Select a grape to see details.";
     document.getElementById("redsimple").innerText = "Select a grape to see details.";
 }
}

// Ensure the function runs when the dropdown changes
document.getElementById("redgrape").addEventListener("change", updateWineDetails);

