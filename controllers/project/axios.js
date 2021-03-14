
exports.getData = (req, res, next) => {
   getPeropleFromAPI()
}

const getData = () =>{
   axios.get('https://reqres.in/api/users')
   .then(response => {
      console.log(response);
   })
};