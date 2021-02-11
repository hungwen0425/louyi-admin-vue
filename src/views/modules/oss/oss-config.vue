<template>
  <el-dialog
    title="雲存儲配置"
    :close-on-click-modal="false"
    :visible.sync="visible">
    <el-form :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="dataFormSubmit()" label-width="120px">
      <el-form-item size="mini" label="存儲類型">
        <el-radio-group v-model="dataForm.type">
          <el-radio :label="1">七牛</el-radio>
          <el-radio :label="2">阿里雲</el-radio>
          <el-radio :label="3">騰訊雲</el-radio>
        </el-radio-group>
      </el-form-item>
      <template v-if="dataForm.type === 1">
        <el-form-item size="mini">
          <a href="http://www.renren.io/open/qiniu.html" target="_blank">免費申請(七牛)10GB儲存空間</a>
        </el-form-item>
        <el-form-item label="功能變數名稱">
          <el-input v-model="dataForm.qiniuDomain" placeholder="七牛綁定的功能變數名稱"></el-input>
        </el-form-item>
        <el-form-item label="路徑前綴">
          <el-input v-model="dataForm.qiniuPrefix" placeholder="不設置默認為空"></el-input>
        </el-form-item>
        <el-form-item label="AccessKey">
          <el-input v-model="dataForm.qiniuAccessKey" placeholder="七牛AccessKey"></el-input>
        </el-form-item>
        <el-form-item label="SecretKey">
          <el-input v-model="dataForm.qiniuSecretKey" placeholder="七牛SecretKey"></el-input>
        </el-form-item>
        <el-form-item label="空間名">
          <el-input v-model="dataForm.qiniuBucketName" placeholder="七牛存儲空間名"></el-input>
        </el-form-item>
      </template>
      <template v-else-if="dataForm.type === 2">
        <el-form-item label="功能變數名稱">
          <el-input v-model="dataForm.aliyunDomain" placeholder="阿里雲綁定的功能變數名稱"></el-input>
        </el-form-item>
        <el-form-item label="路徑前綴">
          <el-input v-model="dataForm.aliyunPrefix" placeholder="不設置默認為空"></el-input>
        </el-form-item>
        <el-form-item label="EndPoint">
          <el-input v-model="dataForm.aliyunEndPoint" placeholder="阿里雲 EndPoint"></el-input>
        </el-form-item>
        <el-form-item label="AccessKeyId">
          <el-input v-model="dataForm.aliyunAccessKeyId" placeholder="阿里雲 AccessKeyId"></el-input>
        </el-form-item>
        <el-form-item label="AccessKeySecret">
          <el-input v-model="dataForm.aliyunAccessKeySecret" placeholder="阿里雲 AccessKeySecret"></el-input>
        </el-form-item>
        <el-form-item label="BucketName">
          <el-input v-model="dataForm.aliyunBucketName" placeholder="阿里雲 BucketName"></el-input>
        </el-form-item>
      </template>
      <template v-else-if="dataForm.type === 3">
        <el-form-item label="功能變數名稱">
          <el-input v-model="dataForm.qcloudDomain" placeholder="騰訊雲綁定的功能變數名稱"></el-input>
        </el-form-item>
        <el-form-item label="路徑前綴">
          <el-input v-model="dataForm.qcloudPrefix" placeholder="不設置默認為空"></el-input>
        </el-form-item>
        <el-form-item label="AppId">
          <el-input v-model="dataForm.qcloudAppId" placeholder="騰訊雲 AppId"></el-input>
        </el-form-item>
        <el-form-item label="SecretId">
          <el-input v-model="dataForm.qcloudSecretId" placeholder="騰訊雲 SecretId"></el-input>
        </el-form-item>
        <el-form-item label="SecretKey">
          <el-input v-model="dataForm.qcloudSecretKey" placeholder="騰訊雲 SecretKey"></el-input>
        </el-form-item>
        <el-form-item label="BucketName">
          <el-input v-model="dataForm.qcloudBucketName" placeholder="騰訊雲 BucketName"></el-input>
        </el-form-item>
        <el-form-item label="Bucket所屬地區">
          <el-input v-model="dataForm.qcloudRegion" placeholder="如：sh（可選值 ，華南：gz 華北：tj 華東：sh）"></el-input>
        </el-form-item>
      </template>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="visible = false">取消</el-button>
      <el-button type="primary" @click="dataFormSubmit()">確定</el-button>
    </span>
  </el-dialog>
</template>

<script>
  export default {
    data () {
      return {
        visible: false,
        dataForm: {},
        dataRule: {}
      }
    },
    methods: {
      init (id) {
        this.visible = true
        this.$http({
          url: this.$http.adornUrl('/sys/oss/config'),
          method: 'get',
          params: this.$http.adornParams()
        }).then(({data}) => {
          this.dataForm = data && data.code === 0 ? data.config : []
        })
      },
      // 表單提交
      dataFormSubmit () {
        this.$refs['dataForm'].validate((valid) => {
          if (valid) {
            this.$http({
              url: this.$http.adornUrl('/sys/oss/saveConfig'),
              method: 'post',
              data: this.$http.adornData(this.dataForm)
            }).then(({data}) => {
              if (data && data.code === 0) {
                this.$message({
                  message: '操作成功',
                  type: 'success',
                  duration: 1500,
                  onClose: () => {
                    this.visible = false
                  }
                })
              } else {
                this.$message.error(data.msg)
              }
            })
          }
        })
      }
    }
  }
</script>

