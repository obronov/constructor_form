export default{
  methods:{
    async fetchData(url){
      const axios = require('axios');
      let headers={
        headers: {'Authorization': `bearer ${this.$store.state.token}`}
      }

      return await axios
            .get(url, headers)
            .then(response => response = response.data)
            .catch(error => {
              console.log(error);
            });

    }
  }
}