<template>
  <div class="page">
    <NuxtPage />
  </div>
</template>


<script setup lang="ts">
</script>

<style>
body {
  margin: 0;
  background: #f4f5f7;
  font-family: system-ui, sans-serif;
  color: #222;
}
.page {
  max-width: 640px;
  margin: 0 auto;
  padding: 24px 16px 64px;
}
h1, h3, h5 {
  color: #2c3e50;
}
form {
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  margin-top: 12px;
}
label {
  font-size: 14px;
}
input[type="number"] {
  width: 100%;
  box-sizing: border-box;
  padding: 6px 8px;
  margin: 4px 0 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
button {
  background: #3b82f6;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 18px;
  font-size: 14px;
  cursor: pointer;
}
button:hover {
  background: #2563eb;
}
</style>
