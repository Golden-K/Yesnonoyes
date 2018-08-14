<template>
  <span id="questions-main">
    <span id="title">
      <span id="back" class="fa fa-reply" @click="toggleView('back')" />
      <h3> </h3>
      <span id="like" class="fa fa-list-ul" @click="toggleView('liked')" />
    </span>
    <h2 @click="handleNo()" class="fa fa-chevron-left" id="left" />
    <h2 @click="handleYes()" class="fa fa-chevron-right" id="right" />
    <p>Swipe Left for NO and Right for YES</p>
    <!-- <span> -->
      <!-- <h1 id="questions" v-if="searchingCategories ">{{ questions.categories[ask].ask }}</h1>
      <h1 id="questions" v-else>{{ questions.params[paramCount].ask }}</h1> -->
    <!-- </span> -->
  </span>
</template>

<script>
import { GLOBAL_CATEGORIES } from '../assets/CATEGORIES.js';
import { detectSwipe } from '../services/swipe';
export default {
  name: 'Questions',
  props: {
    searchResult: Object,
    searchReview: Object,
    toggleView: {
      type: Function,
      required: true
    },
    getSearchResult: {
      type: Function,
      required: true
    },
    handleSwipe: {
      type: Function,
      reuired: true
    }
  },

  data() {
    return {
      GLOBAL_CATEGORIES: GLOBAL_CATEGORIES,
      searchingCategories: true,
      ask: 'first',
      paramCount: 0,
      params: {}
    };
  },

  methods: {
    // handleYes() {
    //   console.log('categoreis issss', CATEGORIES);
    //   this.handleSwipe('questions', 'r');
    //   // Timeout only necessarry for aesthetics
    //   setTimeout(() => {
    //     if(this.searchingCategories) {
    //       let result = this.questions.categories[this.ask];
    //       if(result.end) {
    //         this.categories = result.yes;
    //         this.searchingCategories = false;
    //         return;
    //       }
    //       this.ask = result.yes;
    //     } else {
    //       let result = this.questions.params[this.paramCount];
    //       this.params[result.type] = result.yes;
    //       this.paramCount++;
    //       if(this.paramCount >= 3) {
    //         this.getResult();
    //       }
    //     }
    //   }, 250);
    // },
    // handleNo() {
    //   this.handleSwipe('questions', 'l');
    //   // Timeout only necessarry for aesthetics
    //   setTimeout(() => {
    //     if(this.searchingCategories) {
    //       let result = this.questions.categories[this.ask];
    //       if(result.end) {
    //         this.categories = result.no;
    //         this.searchingCategories = false;
    //         return;
    //       }
    //       this.ask = result.no;
    //     } else {
    //       let result = this.questions.params[this.paramCount];
    //       this.params[result.type] = result.no;
    //       this.paramCount++;
    //       if(this.paramCount >= 3) {
    //         this.getResult();
    //       }
    //     }
    //   }, 250);
    // },
    // getResult() {
    //   this.toggleView('loading');
    //   this.paramCount = 0;
    //   this.searchingCategories = true;
    //   this.getSearchResult(this.categories, 0);
    // },
  },
  mounted() {
    console.log('cats', this.GLOBAL_CATEGORIES);
    setTimeout(() => {
      detectSwipe('questions-main', (id, dir) => {
        if(dir === 'r') {
          this.handleYes();
        }
        else if(dir === 'l') {
          this.handleNo();
        }
      });
    }, 200);
  }
};
</script>

<style scoped>
#title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 6px;
  background-color: #393e46;
  text-shadow: none;
  height: 50px;
}
.fa {
  font-size: 2rem;
  color: #eeeeee !important;
}
#left {
  position: relative;
  top: calc(50% - 50px);
  float: left;
  color: red !important;
  font-size: 25px;
  padding-left: 6px;
}
#right {
  position: relative;
  float: right;
  top: calc(50% - 50px);
  color: lime !important;
  font-size: 25px;
  padding-right: 6px;
}
#container {
  margin: 0;
  padding: 0;
}
#questions-main {
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: #222831;
  color: #eeeeee;
  text-shadow: 0 0 13px black;
}
#questions {
  display: inline-block;
  transition: all .5s;
}
h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>