<template>
  <div class="hello">
    <v-carousel hide-delimiters>
      <v-carousel-item v-for="(item,i) in AxiosData.song_list"
                       :key="i"
                       :src="item.pic_radio"></v-carousel-item>
    </v-carousel>
    <ul>
      <li :key="item.id"
          v-for="(item) in AxiosData.song_list">
        <v-subheader>{{item.album_title}}</v-subheader>
        <img :src="item.pic_radio"
             alt="">
      </li>

    </ul>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      AxiosData: {
        song_list: []
      }
    }
  },
  created () {
    // http://tingapi.ting.baidu.com/v1/restserver/ting
    // ?method=baidu.ting.billboard.billList&type=1&size=10&offset=0
    let url = this.HTTP + '/v1/restserver/ting ?method=baidu.ting.billboard.billList&type=1&size=10&offset=0'
    // '/api/v1/restserver/ting ?method=baidu.ting.billboard.billList&type=1&size=10&offset=0'
    this.$axios.get(url)
      .then(res => {
        this.AxiosData = res.data
        console.log(res.data)
      })
      // eslint-disable-next-line handle-callback-err
      .catch(error => {

      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  display: block;
  width: 100%;
  float: left;
  padding: 0;
}

li {
  display: block;
}

a {
  color: #42b983;
}
</style>
