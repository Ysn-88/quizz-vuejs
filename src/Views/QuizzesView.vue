<template>
    <div>
      <header>
        <h1>Quizzes</h1>
        <input type="text" placeholder="Search..." v-model.trim="search">
      </header>
      <div class="option-container">
        <Card v-for="quiz in quizzes" :key="quiz.id" :quiz="quiz" />
  
      </div>
    </div>
  
  </template>
  
  
  <script setup>
  import q from "../data/quizzes.json"
  import {ref, watch} from "vue"
  import Card from "../Component/Card.vue"
  
  
  const quizzes = ref(q)
  const search = ref("")
  
  
  
  
  watch(search, ()=> {
    quizzes.value = q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()))
  })
  </script>
  
  
  
  <style scoped>

  header {
    margin-top: 10px;
    margin-top: 30px;
    display: flex;
    align-items: center;
  }
  header h1 {
    font-weight: bold;
    margin-right: 30px;
  
  }
  header input {
    border: none;
    background-color: rgba(128,128,128,0.1);
    padding: 10px;
  }
  .option-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
  }
  
  
  /*CARD*/
  </style>