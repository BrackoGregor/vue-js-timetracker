<template>
  <div class="w-full flex bg-gray-light">
    <ExtendedNavbar
      :clients="clients"
      :searchText="searchText"
      @currentId="getCurrentId"
    ></ExtendedNavbar>
    <div class="flex flex-col w-full">
      <HeaderTable></HeaderTable>
      <div class="flex flex-row">
        <SearchField></SearchField>
        <Filter></Filter>
      </div>
      <div class="flex h-full justify-center mx-3 mb-3 mt-3">
        <ClientTable></ClientTable>
      </div>
    </div>
  </div>
</template>

<script>
import ClientTable from "../components/ClientTable";
import HeaderTable from "../components/HeaderTable";
import SearchField from "../components/SearchField";
import Filter from "../components/Filter";
import ExtendedNavbar from "../components/ExtendedNavbar";
import axios from "axios";

export default {
  components: {
    ClientTable,
    HeaderTable,
    SearchField,
    Filter,
    ExtendedNavbar,
  },
  data() {
    return {
      activities: [],
      clients: [],
      searchText: "Search for projects",
      currentId: 0,
    };
  },
  mounted() {
    axios.get("/api/v1/assignments").then((response) => {
      this.clients = response.data.data;
    });
    axios.get("/api/v1/activities").then((response) => {
      this.activities = response.data.data;
    });
  },
  methods: {
    getCurrentId(event) {
      this.currentId = event;
    },
  },
};
</script>

<style>
</style>