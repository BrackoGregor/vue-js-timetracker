<template>
  <div class="flex flex-row">
    <Navbar></Navbar>
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  components: {
    Navbar,
  },

  mounted () {
	let root = this.myprop || '/add'
	this.$router.push({ path: root });
}
};


</script>

<style>
</style>
