<template>
    <form @submit.prevent="add()">
      <legend>添加英雄</legend>
      <div class="form-group">
        <label>英雄名称</label>
        <input type="text" class="form-control" v-model="formdata.name">
      </div>
      <div class="form-group">
        <label>英雄性别</label>
        <input type="text" class="form-control" v-model="formdata.gender">
      </div>
      <button type="submit" class="btn btn-primary">提交</button>
    </form>
</template>

<script>
    import axios from 'axios'
    export default {
        name: '',
        data() {
            return{
                formdata:{
                    name:'',
                    gender:''
                }
            }
        },
        methods : {
            add() {
                this.formdata.ctime = new Date()
                axios.post('http://localhost:3000/heroes',this.formdata)
                .then(res=>{
                    //改变url地址
                    //编程时导航
                    this.$router.push('/heroes')
                })
                .catch(err=>{
                    alert('失败')
                })
            }
        }
    }
</script>

<style  scoped>

</style>