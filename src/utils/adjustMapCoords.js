// 图片热区点位自适应
export function adjustPosition(position, eleId, imageWidth, imageHeigth) {
  var fWidth = document.getElementById(eleId).clientWidth // 获取父元素宽度
  var fHeith = document.getElementById(eleId).clientHeight // 获取父元素高度

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
