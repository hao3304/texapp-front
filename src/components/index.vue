<template>
  <div >
    <div class="config-form " :class="{slider:slider}">
      <h1>试卷生成器</h1>
      <Form :label-width="80">
        <FormItem label="计算类型">
          <Select>
            <Option value="A1" label="A1"></Option>
            <Option value="D1" label="D1"></Option>
            <Option value="D1" label="D1"></Option>
            <Option value="D2" label="D2"></Option>
            <Option value="M1" label="M1"></Option>
            <Option value="S1" label="S1"></Option>
            <Option value="S2" label="S2"></Option>
          </Select>
        </FormItem>
        <FormItem label="题目数量">
          <Input type="number" placeholder="请输入" />
        </FormItem>
      </Form>
      <div>
        <Button @click="onClick" type="success" style="width: 100%" size="large">生成</Button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        slider:false
      }
    },
    methods:{
      onClick() {
        this.slider = true;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

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
</style>
