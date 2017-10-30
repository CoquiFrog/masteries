module.exports = {
   
  getNew: ( req, res, next ) => {
      console.log("HITTING HERE!!!")
      const dbInstance = req.app.get('db');
      const { name, age } = req.body;

      dbInstance.pullNames([])
      .then( (response) => {
        console.log(response)
      res.status(200).send(response)
      })
      .catch( () => res.status(500).send());
    }
  };