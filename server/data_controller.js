module.exports = {
    
     getnow: ( req, res, next ) => {
       console.log("Oh, it's hitting!")
       const dbInstance = req.app.get('db');
       const { name, age} = req.body;
 
       dbInstance.pull_data([])
       .then( (response) => {
         console.log(response)
       res.status(200).send(response)
       })
       .catch( () => res.status(500).send());
     }
    }