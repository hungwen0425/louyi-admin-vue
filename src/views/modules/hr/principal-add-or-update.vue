<template>
    <el-dialog
            :title="!dataForm.id ? '新增' : '修改'"
            :close-on-click-modal="false"
            :visible.sync="visible">
        <el-form :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="dataFormSubmit()" label-width="150px">
                                                                            <el-form-item label="員工編號" prop="employId">
                        <el-input v-model="dataForm.employId" placeholder="員工編號"></el-input>
                    </el-form-item>
                                                                <el-form-item label="姓名" prop="name">
                        <el-input v-model="dataForm.name" placeholder="姓名"></el-input>
                    </el-form-item>
                                                                <el-form-item label="到職日期" prop="dateOfEmployment">
                        <el-input v-model="dataForm.dateOfEmployment" placeholder="到職日期"></el-input>
                    </el-form-item>
                                                                <el-form-item label="離職日期" prop="resignationDate">
                        <el-input v-model="dataForm.resignationDate" placeholder="離職日期"></el-input>
                    </el-form-item>
                                                                <el-form-item label="職稱" prop="jobTitle">
                        <el-input v-model="dataForm.jobTitle" placeholder="職稱"></el-input>
                    </el-form-item>
                                                                <el-form-item label="身份證字號" prop="idNumber">
                        <el-input v-model="dataForm.idNumber" placeholder="身份證字號"></el-input>
                    </el-form-item>
                                                                <el-form-item label="出生年月日" prop="birth">
                        <el-input v-model="dataForm.birth" placeholder="出生年月日"></el-input>
                    </el-form-item>
                                                                <el-form-item label="血型" prop="bloodType">
                        <el-input v-model="dataForm.bloodType" placeholder="血型"></el-input>
                    </el-form-item>
                                                                <el-form-item label="行動電話" prop="mobileNumber">
                        <el-input v-model="dataForm.mobileNumber" placeholder="行動電話"></el-input>
                    </el-form-item>
                                                                <el-form-item label="連絡電話" prop="contactNumber">
                        <el-input v-model="dataForm.contactNumber" placeholder="連絡電話"></el-input>
                    </el-form-item>
                                                                <el-form-item label="緊急連絡人/關係" prop="emergencyContact">
                        <el-input v-model="dataForm.emergencyContact" placeholder="緊急連絡人/關係"></el-input>
                    </el-form-item>
                                                                <el-form-item label="緊急連絡人電話" prop="emergencyContactPhone">
                        <el-input v-model="dataForm.emergencyContactPhone" placeholder="緊急連絡人電話"></el-input>
                    </el-form-item>
                                                                <el-form-item label="連絡地址" prop="address">
                        <el-input v-model="dataForm.address" placeholder="連絡地址"></el-input>
                    </el-form-item>
                                                                <el-form-item label="學歷" prop="education">
                        <el-input v-model="dataForm.education" placeholder="學歷"></el-input>
                    </el-form-item>
                                                                <el-form-item label="畢業學校/科系" prop="graduateSchoolDepartment">
                        <el-input v-model="dataForm.graduateSchoolDepartment" placeholder="畢業學校/科系"></el-input>
                    </el-form-item>
                                                                <el-form-item label="試用期滿日" prop="probation">
                        <el-input v-model="dataForm.probation" placeholder="試用期滿日"></el-input>
                    </el-form-item>
                                                                <el-form-item label="年資" prop="seniority">
                        <el-input v-model="dataForm.seniority" placeholder="年資"></el-input>
                    </el-form-item>
                                                                <el-form-item label="年齡" prop="age">
                        <el-input v-model="dataForm.age" placeholder="年齡"></el-input>
                    </el-form-item>
                                                                <el-form-item label="個人Email" prop="email">
                        <el-input v-model="dataForm.email" placeholder="個人Email"></el-input>
                    </el-form-item>
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
                dataForm: {
                    id: 0,
                    employId: '',
                    name: '',
                    dateOfEmployment: '',
                    resignationDate: '',
                    jobTitle: '',
                    idNumber: '',
                    birth: '',
                    bloodType: '',
                    mobileNumber: '',
                    contactNumber: '',
                    emergencyContact: '',
                    emergencyContactPhone: '',
                    address: '',
                    education: '',
                    graduateSchoolDepartment: '',
                    probation: '',
                    seniority: '',
                    age: '',
                    email: ''
                },
                dataRule: {
                    employId: [
                        { required: true, message: '員工編號不能為空', trigger: 'blur' }
                    ],
                    name: [
                        { required: true, message: '姓名不能為空', trigger: 'blur' }
                    ],
                    dateOfEmployment: [
                        { required: true, message: '到職日期不能為空', trigger: 'blur' }
                    ],
                    jobTitle: [
                        { required: true, message: '職稱不能為空', trigger: 'blur' }
                    ],
                    idNumber: [
                        { required: true, message: '身份證字號不能為空', trigger: 'blur' }
                    ],
                    birth: [
                        { required: true, message: '出生年月日不能為空', trigger: 'blur' }
                    ],
                    bloodType: [
                        { required: true, message: '血型不能為空', trigger: 'blur' }
                    ],
                    mobileNumber: [
                        { required: true, message: '行動電話不能為空', trigger: 'blur' }
                    ],
                    emergencyContact: [
                        { required: true, message: '緊急連絡人/關係不能為空', trigger: 'blur' }
                    ],
                    emergencyContactPhone: [
                        { required: true, message: '緊急連絡人電話不能為空', trigger: 'blur' }
                    ],
                    address: [
                        { required: true, message: '連絡地址不能為空', trigger: 'blur' }
                    ],
                    education: [
                        { required: true, message: '學歷不能為空', trigger: 'blur' }
                    ],
                    graduateSchoolDepartment: [
                        { required: true, message: '畢業學校/科系不能為空', trigger: 'blur' }
                    ],
                    probation: [
                        { required: true, message: '試用期滿日不能為空', trigger: 'blur' }
                    ],
                    seniority: [
                        { required: true, message: '年資不能為空', trigger: 'blur' }
                    ],
                    age: [
                        { required: true, message: '年齡不能為空', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            init (id) {
                this.dataForm.id = id || 0
                this.visible = true
                this.$nextTick(() => {
                    this.$refs['dataForm'].resetFields()
                    if (this.dataForm.id) {
                        this.$http({
                            url: this.$http.adornUrl(`/hr/principal/info/${this.dataForm.id}`),
                                method: 'get',
                                params: this.$http.adornParams()
                    }).then(({data}) => {
                            if (data && data.code === 0) {
                                this.dataForm.employId = data.principal.employId
                                this.dataForm.name = data.principal.name
                                this.dataForm.dateOfEmployment = data.principal.dateOfEmployment
                                this.dataForm.resignationDate = data.principal.resignationDate
                                this.dataForm.jobTitle = data.principal.jobTitle
                                this.dataForm.idNumber = data.principal.idNumber
                                this.dataForm.birth = data.principal.birth
                                this.dataForm.bloodType = data.principal.bloodType
                                this.dataForm.mobileNumber = data.principal.mobileNumber
                                this.dataForm.contactNumber = data.principal.contactNumber
                                this.dataForm.emergencyContact = data.principal.emergencyContact
                                this.dataForm.emergencyContactPhone = data.principal.emergencyContactPhone
                                this.dataForm.address = data.principal.address
                                this.dataForm.education = data.principal.education
                                this.dataForm.graduateSchoolDepartment = data.principal.graduateSchoolDepartment
                                this.dataForm.probation = data.principal.probation
                                this.dataForm.seniority = data.principal.seniority
                                this.dataForm.age = data.principal.age
                                this.dataForm.email = data.principal.email
                            }
                        })
                    }
                })
            },
            // 表單提交
            dataFormSubmit () {
                this.$refs['dataForm'].validate((valid) => {
                        if (valid) {
                            this.$http({
                                url: this.$http.adornUrl(`/hr/principal/${!this.dataForm.id ? 'save' : 'update'}`),
                                    method: 'post',
                                    data: this.$http.adornData({
                                        'id': this.dataForm.id || undefined,
                                        'employId': this.dataForm.employId,
                                        'name': this.dataForm.name,
                                        'dateOfEmployment': this.dataForm.dateOfEmployment,
                                        'resignationDate': this.dataForm.resignationDate,
                                        'jobTitle': this.dataForm.jobTitle,
                                        'idNumber': this.dataForm.idNumber,
                                        'birth': this.dataForm.birth,
                                        'bloodType': this.dataForm.bloodType,
                                        'mobileNumber': this.dataForm.mobileNumber,
                                        'contactNumber': this.dataForm.contactNumber,
                                        'emergencyContact': this.dataForm.emergencyContact,
                                        'emergencyContactPhone': this.dataForm.emergencyContactPhone,
                                        'address': this.dataForm.address,
                                        'education': this.dataForm.education,
                                        'graduateSchoolDepartment': this.dataForm.graduateSchoolDepartment,
                                        'probation': this.dataForm.probation,
                                        'seniority': this.dataForm.seniority,
                                        'age': this.dataForm.age,
                                        'email': this.dataForm.email
                                })
                        }).then(({data}) => {
                            if (data && data.code === 0) {
                                this.$message({
                                        message: '操作成功',
                                        type: 'success',
                                        duration: 1500,
                                        onClose: () => {
                                    this.visible = false
                                    this.$emit('refreshDataList')
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
