<template>
  <div class="about">
    <h1>concunt in for ging to do infor</h1>
    <ul>
      <li :key="index.id"
          v-for="(index) in Msc.data.artistList">
        <img :src="index.pic"
             alt="">
        {{index.name}}

      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'about',
  data () {
    return {
      Msc: {
        data: {
          artistList: []
        }
      }
    }
  },
  created () {
    this.$axios.get('http://www.kuwo.cn/api/www/artist/artistInfo?category=0&pn=1&rn=100&reqId=dba30090-d098-11e9-b315-5d770f2415bd')
      .then(res => {
        this.Msc = res.data
        console.log(this.Msc)
        console.log(res.data)
      })
      // eslint-disable-next-line handle-callback-err
      .catch(error => {

      })
  }
}
</script>
<style lang="stylus" scoped></style>
