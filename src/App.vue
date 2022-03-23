<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="topnav">
      <nav>
        <span><RouterLink to="/">Home</RouterLink></span>
        <span><RouterLink to="/counter">Counter</RouterLink></span>
        <span><RouterLink to="/todo">Todo</RouterLink></span>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style>
/* Add a black background color to the top navigation */
.topnav {
  background-color: #04aa6d;
  overflow: hidden;
}

/* Style the links inside the navigation bar */
.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

/* Change the color of links on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}
</style>
