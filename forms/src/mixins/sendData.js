export default{
  methods:{
    async sendData(url, data){
      const axios = require('axios');
      let headers={
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `bearer ${this.$store.state.token}`}
      }

      return await axios
            .post(url, data, headers)
            .then(response => response = response.data)
            .catch(error => {
              console.log(error);
            });

    }
  }
}