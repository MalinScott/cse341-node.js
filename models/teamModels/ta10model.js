function getPersonFromDb(id, callback) {
   console.log("Getting person from DB with id: " + id);

   // Set up the SQL that we will use for our query. Note that we can make
   // use of parameter placeholders just like with PHP's PDO.
   const sql = "SELECT id, first, last, birthdate FROM ta10_person WHERE id = $1::int";

   // We now set up an array of all the parameters we will pass to fill the
   // placeholder spots we left in the query.
   const params = [id];

   // This runs the query, and then calls the provided anonymous callback function
   // with the results.
   pool.query(sql, params, function (err, result) {
      // If an error occurred...
      if (err) {
         console.log("Error in query: ")
         console.log(err);
         callback(err, null);
      }

      // Log this to the console for debugging purposes.
      console.log("Found result: " + JSON.stringify(result.rows));


      // When someone else called this function, they supplied the function
      // they wanted called when we were all done. Call that function now
      // and pass it the results.

      // (The first parameter is the error variable, so we will pass null.)
      callback(null, result.rows);
   });
}