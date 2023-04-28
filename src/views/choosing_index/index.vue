<template>
  <div class="app-container">
    <!-- <img src="/../assets/imgs/whole_map.jpg" usemap="#planetmap" /> -->
    <!-- <img src="../../assets/imgs/whole_map.jpg" style="width:900px;" usemap="#image-map"> -->
    <img id="wrapImg" src="../../assets/imgs/whole_map.jpg" usemap="#image-map" style="width:900px;height:537.747px">
    <map id="CribMap" name="image-map">
      <area target="" alt="5号楼" title="5号楼" href="./#/wuhaolou" coords="394,743,824,898" shape="rect" @click="dormClick(5)">
      <area target="" alt="14号楼" title="14号楼" href="./#/shisihaolou" coords="1117,343,901,263" shape="rect" @click="dormClick(14)">
      <area target="" alt="13号楼" title="13号楼" href="./#/shisanhaolou" coords="1160,266,1474,358" shape="rect" @click="dormClick(13)">
      <area target="" alt="8号楼" title="8号楼" href="./#/bahaolou" coords="1157,771,1279,831" shape="rect" @click="dormClick(8)">
      <area target="" alt="9号楼" title="9号楼" href="./#/jiuhaolou" coords="1473,796,1343,733" shape="rect" @click="dormClick(9)">
    </map>
  </div>
</template>

<script>
import { adjustPosition } from '@/utils/adjustMapCoords'
export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  mounted() {
    this.autoAdjust('wrapImg', 1610, 961.992)
  },
  methods: {
    onSubmit() {
      this.$message('submit!')
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    },
    dormClick(dorm) {
      // alert(dorm)
      if (dorm === 5) {
        // this.$router.push({ name: 'wuhaolou' })
      }
    },
    // 图片热区点位自适应
    autoAdjust(eleId, imageWidth, imageHeigth) {
      var map = document.getElementById('CribMap')
      var element = map.childNodes
      // console.log('element:', element)
      // var itemNumber = element.length / 2
      for (var i = 0; i < element.length; i++) {
        var item = i
        var oldCoords = element[item].coords
        var newcoords = adjustPosition(oldCoords, eleId, imageWidth, imageHeigth)
        element[item].setAttribute('coords', newcoords)
      }
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
/* #CribMap > area :hover {
  border: 2px red solid;
} */
</style>

