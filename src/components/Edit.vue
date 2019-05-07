<template>
    <form @submit.prevent="edit()">
      <legend>编辑英雄</legend>
      <div class="form-group">
        <label>英雄名称</label>
        <input type="text" class="form-control" v-model="form.name">
      </div>
      <div class="form-group">
        <label>英雄性别</label>
        <input type="text" class="form-control" v-model="form.gender">
      </div>
      <button type="submit" class="btn btn-primary">提交</button>
    </form>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
          return{
            form:{
              name:'',
              gender:''
            }
          }
        },
        methods: {
          getData() {
            const id = this.$route.params.id
            axios.get('http://localhost:3000/heroes/' + id)
            .then(res=>{
              this.form= res.data
            })
            .catch(err=>{
              alert('失败')
            })
          },
           edit() {
           this.form.ctime = new Date()
           axios.put('http://localhost:3000/heroes/' + this.form.id,this.form)
           .then(res=>{
            this.$router.push('/heroes')
           })
           .catch(err=>{
             alert('失败')
           })
        },
        },
         
        mounted() {
          this.getData()
        }
      
    }
</script>

<style  scoped>

</style>