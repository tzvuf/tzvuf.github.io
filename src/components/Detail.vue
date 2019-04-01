<template>
  <div class="rel">
    <el-button
      circle
      icon="el-icon-back"
      title="返回上一页"
      :class="is_pc ? 'pc_detail_router_back' : 'mobile_detail_router_back'"
      @click="routerBack"
    ></el-button>
    <div class="slide" v-if="is_pc">
      <div ref="content" class="slide_inner">
        <div v-for="v in data" :key="v.img" class="slide_list">
          <el-card>
            <div slot="header">
              <el-row justify="space-between" type="flex">
                <el-col :span="12">
                  <div>
                    <b class="title" v-text="v.cn"></b>
                  </div>
                </el-col>
                <el-col class="col_r" :span="12">
                  <div v-text="v.m.replace(/美 /, '')" />
                </el-col>
              </el-row>
            </div>
            <div class="text-center">
              <img :src="cur_path + v.img" :title="v.cn" @click="play(v)">
              <audio
                v-if="v.mp3"
                :ref="v.mp3"
                :src="cur_path + v.mp3"
                class="audio"
                controls="controls"
                controlslist="nodownload"
                oncontextmenu="return false"
              ></audio>
              <div v-if="!v.mp3" class="blank"></div>
            </div>
          </el-card>
        </div>
      </div>
    </div>
    <div v-if="!is_pc && data.length > 0" class="mobile_detail_content">
      <hooper>
        <slide v-for="v in data" :key="v.img">
          <el-card>
            <div slot="header">
              <el-row justify="space-between" type="flex">
                <el-col :span="12">
                  <div>
                    <b class="title" v-text="v.cn" />
                  </div>
                </el-col>
                <el-col class="col_r" :span="12">
                  <div v-text="v.m.replace(/美 /, '')" />
                </el-col>
              </el-row>
            </div>
            <div class="text-center">
              <img :src="cur_path + v.img" :title="v.cn" @click="play(v)">
              <audio
                v-if="v.mp3"
                :ref="v.mp3"
                :src="cur_path + v.mp3"
                class="audio"
                controls="controls"
                controlslist="nodownload"
                oncontextmenu="return false"
              />
              <div v-if="!v.mp3" class="blank" />
            </div>
          </el-card>
        </slide>
      </hooper>
    </div>
  </div>
</template>

<script>
import { slide, isPc } from '@/assets/js/tools';
import { Hooper, Slide } from 'hooper';
import router from '@/router';
import 'hooper/dist/hooper.css';

export default {
  name: 'Detail',
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

    if (this.is_pc) {
      slide.init(this.$refs.content, this.data, 562);
    }
  },
  methods: {
    play(v) {
      if (!v.mp3) return false;
      const el = this.$refs[v.mp3];
      const _audio = el[0];
      const refs = this.data.filter(_v => _v.mp3 && _v.mp3 !== v.mp3);
      for (let i = 0; i < refs.length; i++) {
        const it = this.$refs[refs[i].mp3];
        this.stop(it[0]);
      }

      if (_audio.paused) {
        _audio.play();
      }
    },
    stop(_audio) {
      if (!_audio.paused) {
        _audio.pause();
        _audio.currentTime = 0;
      }
    },
    routerBack() {
      router.back();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.slide {
  height: 95vh;
  overflow: hidden;
  position: relative;
}
.slide_inner {
  position: absolute;
  display: flex;
}
.slide_list {
  flex: 1;
  padding: 15px;
}
.slide_list img {
  cursor: pointer;
  transition: all 0.3s linear;
  opacity: 0.85;
  max-width: 450px;
}
.slide_list img:hover {
  opacity: 1;
}
.blank {
  height: 58px;
}
.title {
  font-size: 14px;
}
.hooper {
  height: 100vh;
}
.hooper img {
  width: 90%;
}
.col_l {
  text-align: right;
}
.col_r {
  text-align: right;
  font-size: 13px;
}
.audio {
  max-width: 100%;
}
</style>


<style lang="scss">
.mobile_detail_content {
  .el-card__header {
    padding: 8px 16px;
  }
  .el-card__body {
    padding: 8px 16px;
  }
}
.mobile_detail_router_back {
  position: absolute;
  left: 10px;
  top: 50px;
  z-index: 10;
}
.pc_detail_router_back {
  position: absolute;
  left: 30px;
  top: 80px;
  z-index: 10;
}
</style>