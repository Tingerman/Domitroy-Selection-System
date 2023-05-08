<template>
    <div class="app-container">
      <el-table
      v-if="role===0"
      :data="tableData"
      :row-class-name="tableRowClassName"
      style="width: 100%">
      <el-table-column
      width="180"
      prop="read"
      label="是否已读"
      :filter-method="filterTag"
      filter-placement="bottom-end">
      <template slot-scope="scope">
        <el-tag
          :type="scope.row.read === '未读' ? 'danger' : 'success'"
          disable-transitions>{{scope.row.read}}</el-tag>
      </template>
      >
    </el-table-column>
      <el-table-column
        prop="date"
        label="发布时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="prior"
        label="优先级"
        width="180"
        :filter-method="filterTag"
        filter-placement="bottom-end">
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.prior === '重要' ? 'warning' : 'info'"
            disable-transitions>{{scope.row.prior}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
      prop="expiration"
      label="有效期"
      width="180">
    </el-table-column>
      <el-table-column
        prop="title"
        label="标题">
      </el-table-column>
    </el-table>

    <el-form ref="form" :model="form" label-width="80px" v-if="role===1" style="width: 80%;">
        <el-form-item label="公告标题">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="优先级">
          <el-select v-model="form.region" placeholder="请选择公告优先级">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="永久有效">
          <el-switch v-model="form.delivery"></el-switch>
        </el-form-item>
        
        <el-form-item label="有效期">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="发布范围">
            <el-select v-model="form.region" placeholder="请选择公告发布范围">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        <!-- <el-form-item label="即时配送">
          <el-switch v-model="form.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="活动性质">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
            <el-checkbox label="地推活动" name="type"></el-checkbox>
            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item> -->
        <!-- <el-form-item label="特殊资源">
          <el-radio-group v-model="form.resource">
            <el-radio label="线上品牌商赞助"></el-radio>
            <el-radio label="线下场地免费"></el-radio>
          </el-radio-group>
        </el-form-item> -->
        <el-form-item label="公告内容">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </template>
  
  <script>
  import { adjustPosition } from '@/utils/adjustMapCoords'
  export default {
    data() {
      return {
        role: 1, // 0为普通用户，1为管理员
        tableData: [{
            read: '未读',
            date: '2023-07-02',
            prior: '重要',
            expiration: '永久',
            title: '关于2023年新学期选宿舍系统开放时间的通知'
          }, {
            read: '已读',
            date: '2023-07-02',
            prior: '普通',
            expiration: '永久',
            title: '北京大学软件与微电子学院在线选宿舍系统使用指南'
          },
          {
            read: '已读',
            date: '2023-06-23',
            prior: '重要',
            expiration: '永久',
            title: '2023新生选宿舍系统开放预告'
          }, 
          {
            read: '已读',
            date: '2023-06-22',
            prior: '普通',
            expiration: '永久',
            title: '5号楼宿舍检查活动通知'
          }, 
          {
            read: '已读',
            date: '2023-06-22',
            prior: '普通',
            expiration: '永久',
            title: '北京大学软件与微电子学院宿舍电器使用规范'
          }, 
          {
            read: '已读',
            date: '2023-06-13',
            prior: '普通',
            expiration: '永久',
            title: '关于住宿资格审查的通知'
          }, 
          {
            read: '已读',
            date: '2023-06-13',
            prior: '普通',
            expiration: '永久',
            title: '6月低五号楼宿舍检查预告'
          }, 
        
        ],
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
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      },
      filterTag(value, row) {
        return row.tag === value;
      },
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
  
  .prompt_index {
    color: saddlebrown;
    margin-left: 10px;
    margin-top: 20px;
  }
  .el-table .warning-row /deep/ {
    background: oldlace;
  }

  .el-table .success-row /deep/ {
    background: #f0f9eb;
  }
  .el-textarea__inner /deep/ {
    min-height: 160px !important;
  }
  </style>
  
  