<template>
  <div>
    <div class="slide" v-if="is_pc">
      <div class="slide_inner" ref="content">
        <div class="slide_list" v-for="v in data" v-bind:key="v.img">
          <el-card>
              <div slot="header">
                <el-row type="flex" justify="space-between">
                  <el-col v-bind:span="12">
                    <div>
                      <b class="title" v-text="v.cn"></b>
                    </div>
                    <div class="m-t-5">
                      <el-button icon="el-icon-back" circle v-on:click="routerBack" title="返回上一页"></el-button>
                    </div>
                  </el-col>
                  <el-col v-bind:span="12" class="col_r">
                    <div v-text="v.m"></div>
                    <div v-text="v.y"></div>
                  </el-col>
                </el-row> 
              </div>
            <img v-bind:src="cur_path + v.img" v-bind:title="v.cn" v-on:click="play(v)" />
            <audio v-bind:src="cur_path + v.mp3" controls="controls" v-if="v.mp3" v-bind:ref="v.mp3"></audio>
            <div class="blank" v-if="!v.mp3" ></div>
          </el-card>
        </div>
      </div>
    </div>
    <div v-if="!is_pc && data.length > 0">
        <hooper>
          <slide v-for="v in data" v-bind:key="v.img">
            <el-card>
                <div slot="header">
                  <el-row type="flex" justify="space-between">
                    <el-col v-bind:span="12">
                      <div>
                        <b class="title" v-text="v.cn"></b>
                      </div>
                      <div class="m-t-5">
                        <el-button icon="el-icon-back" circle size="small" v-on:click="routerBack"></el-button>
                      </div>
                    </el-col>
                    <el-col v-bind:span="12" class="col_r">
                      <div v-text="v.m"></div>
                      <div v-text="v.y"></div>
                    </el-col>
                  </el-row> 
                </div>
              <img v-bind:src="cur_path + v.img" v-bind:title="v.cn" v-on:click="play(v)" />
              <audio v-bind:src="cur_path + v.mp3" controls="controls" v-if="v.mp3" v-bind:ref="v.mp3"></audio>
              <div class="blank" v-if="!v.mp3" ></div>
            </el-card>
          </slide>
      </hooper>
    </div>
  </div>
</template>

<script>
import { slide, isPc }  from '@/assets/js/tools';
import { Hooper, Slide } from 'hooper';
import router from '@/router';
import 'hooper/dist/hooper.css';

export default {
  name: 'Detail',
  props: {
    msg: String
  },
  components: {
    Hooper,
    Slide
  },
  data() {
    return {
      is_pc: isPc(),
      data: [],
      cur_path: ''
    };
  },
  mounted() {
    const { query } = this.$route;
    const { category, title } = query;
    this.cur_path = `/source/${category}/${title}/`;
    this.data = require(`../json/${category}/${title}.json`);

    if(this.is_pc) {
      slide.init(this.$refs.content, this.data, 562);
    }
  },
  methods: {
    play(v) {
      if(!v.mp3) return false;
      const el = this.$refs[v.mp3];      
      const _audio = el[0];
      const refs = this.data.filter( _v => _v.mp3 && _v.mp3 !== v.mp3 );
      for (let i = 0; i < refs.length; i++) {
        const it = this.$refs[refs[i].mp3];
        this.stop(it[0])
      }

      if(_audio.paused) {
        _audio.play();
      }
    },
    stop(_audio) {
      if(!_audio.paused) {
        _audio.pause();
        _audio.currentTime = 0;
      }
    },
    routerBack() {
      router.back();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.slide{ height: 95vh; overflow: hidden; position: relative;}
.slide_inner{ position:absolute; display: flex; }
.slide_list{
  flex: 1; 
  padding: 15px;

}
.slide_list img {
  cursor: pointer;
  transition: all 0.3s linear;
  opacity: .85;
}
.slide_list img:hover{
  opacity: 1;
}
.blank{
  height: 58px;
}
.title{
  font-size: 15px;
}
.hooper{
  height: 100vh;
}
.hooper img{
  width: 100%;
}
.col_l{
  text-align: right;
}
.col_r{
  text-align: right;
  font-size: 13px;
}
</style>
