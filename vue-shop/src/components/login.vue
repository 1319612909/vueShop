<template>
  <div class="login">
    <div class="form">
      <div class="headimg">
        <img src="../assets/timg.jpg" alt="">
      </div>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
          <el-input v-model.number="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
          <el-button type="primary" class="btnLg" @click="submitForm('ruleForm')">登录</el-button>
      </el-form>
    </div>
    
  </div>
</template>

<script>
 var checkUser = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }else{
          callback();
        }
        
      };
  var validatePass = (rule, value, callback) => {
    if (value === '') {
      return callback(new Error('请输入密码'));
    } else {
      callback();
    }
  };
 export default {
    name: 'login',
    data() {
      return {
        ruleForm: {
          username: '',
          password: ''
        },
        rules: {
            user: [
            { validator: checkUser, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ]
          
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate(async (valid) => {
          if (valid) {
            // this.$axios.post('/login',this.ruleForm).then(res=>{
            //   console.log(res)
            // })
            // async+await+解构赋值方法，
            const {data:res} = await this.$axios.post('/login',this.ruleForm)
            if(res.meta.status !== 200) return this.$message.error('登录失败');
            console.log(res)
            // 保存token
            sessionStorage.setItem('Token',res.data.token)
            this.$router.push('home')
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style lang="scss" scoped>
.login{
  display: flex;
  flex-direction: row;
  justify-content:center;
  align-items:center;
  height: 100vh;

  .form{
    padding: 0px 20px;
    width: 560px;
    min-height: 400px;
    background: #fff;
    position: relative;
      .headimg{
        width: 200px;
        height: 200px;
        margin: auto;
        border-radius: 50%;
        position: absolute;
        border: 1px solid #ddd;
        background: #fff;
        padding: 8px;
        top: -80px;
        left: 0;
        right: 0;
        box-shadow:  0 0  5px 2px #ddd;
        img{
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .el-form{
          padding-top: 180px;
        .el-form-item{
            width: 80%;
            margin:  0 auto 22px auto;
        }
        .btnLg{
          padding: 12px 35px;
        }
      }
  }
}

</style>
