<template>
  <div id="container">
    <h1 id="learningText">Learning {{ learning }}</h1>
    <h2>My settings:</h2>
    <p>Time: <span class="userData">{{ hours }} hours</span></p>
    <p>Theory: <span class="userData">{{ theory }}%</span></p>
    <p>Practice: <span class="userData">{{ practice }}%</span></p>
  </div>
</template>

<script>
//import localStorage from 'localStorage';

export default {
  data() {
    return {
      learning: "nothing... :(",
      hours: 0,
      theory: 0,
      practice: 0,
    };
  },
  created() {
    this.loadLearning();
  },
  methods: {
    //Loading the learning data from the local storage
    loadLearning() {
      const learningData = localStorage.getItem("learning");
      if (learningData != null) {
        this.learning = learningData;
        
      } else {
        this.learning = "nothing... :(";
      }
    }, loadHours() {
      const hoursData = localStorage.getItem("hours");
      if (hoursData != null) {
        this.hours = hoursData;
        
      } else {
        this.hours = 0;
      }
    }, loadTheory() {
      const theoryData = localStorage.getItem("theory");
      if (theoryData != null) {
        this.theory = theoryData;
        
      } else {
        this.theory = 0;
      }
    }, loadPractice() {
      const practiceData = localStorage.getItem("practice");
      if (practiceData != null) {
        this.practice = practiceData;
        
      } else {
        this.practice = 0;
      }
    },
  },
};
</script>

<style scope>
.userData {
    color:green;

}

#container {
    background-color: #232659;
    padding: 20px;
    padding-right: 60px;
    padding-left: 60px;
    border-radius: 10px;
    width: 30%;
}

p {
    color: #808080;
    font-size: 1.5em;
    text-align: left;
}

h2 {
    margin-top: 5px;
    color: #808080;
    font-size: 1.5em;
    text-align: left;
    text-decoration: underline;

}

#learningText {
    color: #ffffff;
    font-size: 2em;
    text-align: center;
}
</style>