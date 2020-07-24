<template>
 <div class="home">
     <el-container>
        <el-header>
            <div>XXX系统</div>
            <el-button type="text" class="btnLg" @click="logout()">退出</el-button>
        </el-header>
        <el-container>
            <el-aside width="200px">
              
            </el-aside>
            <el-main>Main</el-main>
        </el-container>
     </el-container>
 </div>
</template>

<script>
 export default {
   data () {
     return {

     }
   },
   
   components: {

   },
   methods:{
       logout(){
           sessionStorage.clear('Token')
           this.$router.push('/login')
       }
   }
 }
</script>

<style lang='scss'>
.home{
    height: 100%;
    .el-container{
        height: 100%;
    }
}
 .el-header{
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
  }
  
  .el-aside {
      height: 100%;
    background-color: #545c64;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
 
</style>
