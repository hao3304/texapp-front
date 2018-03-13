<template>
  <div class="index-page" :class="{'mobile':!pc}">
    <div class="config-form " :class="{slider:slider}">
      <Spin size="large" fix v-if="spinShow"></Spin>
      <h1>试卷生成器</h1>
      <Form :label-width="80">
        <FormItem label="计算类型">
          <Select  v-model="form.prefix">
            <Option value="ALL" label="综合练习"></Option>
            <Option value="A1" label="一位数加法"></Option>
            <Option value="D1" label="一位数除法"></Option>
            <Option value="D2" label="两位数除法"></Option>
            <Option value="M1" label="一位数乘法"></Option>
            <Option value="S1" label="一位数减法"></Option>
            <Option value="S2" label="两位数减法"></Option>
          </Select>
        </FormItem>
        <FormItem label="试卷标题">
          <Input placeholder="请输入"  v-model="form.title" />
        </FormItem>
        <FormItem label="题目行数">
          <Input placeholder="请输入"  v-model="form.row" type="number" />
        </FormItem>
        <FormItem label="题目列数">
          <Input placeholder="请输入" v-model="form.col" type="number" />
        </FormItem>
      </Form>
      <div>
        <Button @click="onClick" type="success" style="width: 100%" size="large">生成</Button>
      </div>
    </div>
    <embed v-if="pdf" class="pc-viewer" :src="'/tex/'+ pdf">
  </div>
</template>

<script>

  import { getPdf } from '../service';
  import {IsPC} from '../modules/tools'

  export default {
    name: 'index',
    data () {
      return {
        spinShow:false,
        pdf:null,
        slider:false,
        pc:IsPC(),
        form:{
          prefix:'ALL',
          title:'练习题',
          row:10,
          col:4
        }
      }
    },
    methods:{
      onClick() {
        this.spinShow = true;
        this.pdf = null;
        let params = {...this.form};
        if(params.prefix == "ALL"){
          params.prefix = "";
        }
        getPdf(params).then(({data})=>{
          this.spinShow = false;
          if(this.pc) {
            this.pdf = data.response;
            this.slider = true;
          }else{
            this.$router.push(`/mobile/${data.response}`)
          }
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

  .index-page{
    height: 100%;background-color: #216082;

    .config-form{
      h1{
        text-align: center;
        margin-bottom: 20px;
        color: brown;
      }
      width: 500px;
      position: absolute;
      left: 50%;
      top:20%;
      margin-left: -250px;
      background-color: #fff;
      padding: 20px;
      border-radius: 5px;
      box-shadow: 1px 2px 2px rgba(0,0,0,.4);
      transition: all .4s;
      &.slider{
        left: 0;
        margin-left: 0;
        width: 300px;
        top:0;
        bottom: 0;
        border-radius: 0;
      }
    }

    &.mobile {
      background-color:#fff;

      .config-form{
        width: 100%;
        height: 100%;
        top:0;
        margin: 0;
        left: 0;
      }
    }

    .pc-viewer{
      margin-left: 300px;
      width: calc(100% - 300px);
      height: 100%;
    }

  }


</style>
