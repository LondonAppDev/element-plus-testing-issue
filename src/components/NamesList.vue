<template>
  <el-table :data="props.tableData">
    <el-table-column prop="name" label="Name"></el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import { ElTable, ElTableColumn } from "element-plus";
const props = defineProps({
  tableData: {
    type: Array,
    required: true,
  },
});
</script>
