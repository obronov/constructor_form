export default{
  methods:{
    async deleteShema(url){
      const axios = require('axios');
      let headers={
        headers: {'Authorization': `bearer ${this.$store.state.token}`}
      }

      return await axios
            .delete(url, headers)
            .then(response => response = response.data)
            .catch(error => {
              console.log(error);
            });

    }
  }
}