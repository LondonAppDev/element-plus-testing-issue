<template>
  <h1>Names List</h1>
  <names-list :tableData="names"></names-list>
</template>

<script lang="ts" setup>
import NamesList from "./components/NamesList.vue";
const names = [{ name: "Nala" }, { name: "Simba" }];
</script>
