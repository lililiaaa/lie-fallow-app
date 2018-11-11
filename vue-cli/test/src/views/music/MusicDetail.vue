<template>
    <div>
        <aplayer v-if="ifShow" :autoplay="null" :list="dataList" :music="dataList[0]" :showLrc="lrc"/>
    </div>
</template>



<script>
    import Aplayer from 'vue-aplayer'
    export default{
        data(){
          return {
              dataList:[],
              ifShow:false,
              null:false,
              lrc:true
          }
        },
        components: {
            Aplayer
        },
        created(){
            this.$emit("add","音乐",'music')
            this.getData()
        },
        methods:{
            getData(){
                axios.get("./data/musicdata.json")
                    .then( (response)=> {
                        this.dataList=response.data.musicData
                        console.log(this.dataList)
                        this.ifShow=true
                    })
                    .catch((error)=> {
                        console.log(error);
                    });
            },

        }
    }
</script>
<style>


</style>