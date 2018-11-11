<template>
  <div id="app">
    <div id="nav" :class="active">
      <div class="header">
      <button><router-link to="/" class="button">首页</router-link></button>
      <h1>{{msg}}</h1>
      </div>
      <div class="footer">
        <router-link to="/">电影</router-link>
        <router-link to="/music" >音乐</router-link>
        <router-link to="/book" >书籍</router-link>
        <router-link to="/image" >图片</router-link>
      </div>
    </div>
    <router-view @add="test"/>
  </div>
</template>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  margin-top: 60px;
}
.movie .header,.movie .footer{
  background-color: rgb(111, 176, 120);
}
.music .header,.music .footer{
  background-color: rgb(255, 168, 199);
}
.book .header,.book .footer{
  background-color: rgb(143, 189, 255);
}
.photo .header,.photo .footer{
  background-color: rgb(255, 237, 149);
}
.header,.footer{
  position: fixed;
  width: 100%;
  height: 1rem;
  background-color: rgb(111, 176, 120);
  display: flex;
}

.header{
  top:0;
  color: white;
}
button{
  background: transparent;
  border: 0px;
  margin-right: 1.6rem;
  color: white;
margin-left: 0.3rem;

}
button a{
  color: white;
}
a{
  color: #c3c3c3;
  border:0;
}
a:focus{
  outline: none;
}
a:hover{
  color: white;
  border: 0px;
}
  .footer{

    bottom: 0;

    font-size: 20px;
    line-height: 1rem;
    justify-content: space-around;
  }
</style>
<script>
  export default{
      linkActiveClass:'',
      linkExactActiveClass:'',
      data(){
          return{
              msg:'电影',
              active:'color',

          }
      },
      methods:{
          test(name,color){
              this.msg=name
              this.active=color
          },
      },

  }

</script>