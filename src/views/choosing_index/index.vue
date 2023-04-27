<template>
  <div class="app-container">
    <!-- <img src="/../assets/imgs/whole_map.jpg" usemap="#planetmap" /> -->
    <!-- <img src="../../assets/imgs/whole_map.jpg" style="width:900px;" usemap="#image-map"> -->
    <img id="wrapImg" src="../../assets/imgs/whole_map.jpg" usemap="#image-map" style="width:900px;height:537.747px">
    <map id="CribMap" name="image-map">
      <area target="" alt="5号楼" title="5号楼" href="" coords="394,743,824,898" shape="rect" @click="dormClick('5号楼')">
      <area target="" alt="14号楼" title="14号楼" href="" coords="1117,343,901,263" shape="rect" @click="dormClick('14号楼')">
      <area target="" alt="13号楼" title="13号楼" href="" coords="1160,266,1474,358" shape="rect" @click="dormClick('13号楼')">
      <area target="" alt="8号楼" title="8号楼" href="" coords="1157,771,1279,831" shape="rect" @click="dormClick('8号楼')">
      <area target="" alt="9号楼" title="9号楼" href="" coords="1473,796,1343,733" shape="rect" @click="dormClick('9号楼')">
    </map>
  </div>
</template>

<script>
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
      alert(dorm)
    },
    // 图片热区点位自适应
    autoAdjust(eleId, imageWidth, imageHeigth) {
      var map = document.getElementById('CribMap')
      var element = map.childNodes
      console.log('element:', element)
      // var itemNumber = element.length / 2
      for (var i = 0; i < element.length; i++) {
        var item = i
        var oldCoords = element[item].coords
        var newcoords = this.adjustPosition(oldCoords, eleId, imageWidth, imageHeigth)
        element[item].setAttribute('coords', newcoords)
        console.log('oldCoords:', oldCoords)
        console.log('newCoords:', newcoords)
        console.log(element[item])
      }
    },
    // 调整MAP中坐标
    adjustPosition(position, eleId, imageWidth, imageHeigth) {
      var fWidth = document.getElementById(eleId).clientWidth // 获取父元素宽度
      var fHeith = document.getElementById(eleId).clientHeight // 获取父元素高度

      console.log('取到的父元素宽高：', fWidth, fHeith)

      var each = position.split(',')
      // 获取每个坐标点
      // for (let i = 0; i < each.length; i++) {
      //   each[i] = Math.round(parseInt(each[i]) * pageWidth / imageWidth).toString() // x坐标
      //   i++
      //   each[i] = Math.round(parseInt(each[i]) * pageHeith / imageHeigth).toString() // y坐标
      // }
      for (let i = 0; i < each.length; i++) {
        each[i] = Math.round(parseInt(each[i]) * fWidth / imageWidth).toString() // x坐标
        i++
        each[i] = Math.round(parseInt(each[i]) * fHeith / imageHeigth).toString() // y坐标
      }
      // 生成新的坐标点
      var newPosition = ''
      for (let i = 0; i < each.length; i++) {
        newPosition += each[i]
        if (i < each.length - 1) {
          newPosition += ','
        }
      }
      return newPosition
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

