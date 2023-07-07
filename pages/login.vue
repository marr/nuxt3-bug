<script setup>
async function submit() {
  await refreshNuxtData("foo");
  useState("loggedIn").value = true;
}
</script>
<template>
  <button @click="submit">Login</button>
</template>
