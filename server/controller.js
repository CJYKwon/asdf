const complimentArray = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."]

module.exports = {

    getFortune: (req, res) => {
        const fortunes = ["Expect much of yourself and little of others.", "Every flower blooms in its own sweet time.", "He who knows he has enough is rich.", "Let the world be filled with tranquility and goodwill.", "New ideas could be profitable."];

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune)
    },
    
    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    
    getSomeCompliments: (req,res) => {
        res.status(200).send(complimentArray)
    },

    addCompliment: (req, res) => {
        let {name} = req.body

        console.log(name)

        dinoArray.push(name)

        res.status(200).send(dinoArray)
    },

    deleteCompliment: (req, res) => {
        let index = req.params.id - 1


        complimentArray.splice(index, 1)

        res.status(200).send(complimentArray)
    }

}