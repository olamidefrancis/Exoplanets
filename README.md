# Exoplanets
Exploring, possible habitable planets using Node
Nasa's Kepler data(CSV File format) was read with Node fs.CreateReadStream 
The result obtained was piped using npm csv-parse, this made the data writable 
The habitable planets obtained were filtered, using earth's parameters as standard

1) Stella flux(the amount of energy emitted by the star) at most 1.11 and at least 0.36 that of earth
2) Radius at most 1.65 that of earth
