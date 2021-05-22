<template>
  <div v-if="jobs">
    <h1>{{ jobs.title }}</h1>
    <p>The job id is {{ id }}</p>
    <p>{{ jobs.details }}</p>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      jobs: null,
    };
  },
  mounted() {
    fetch("http://localhost:3000/jobs/" + this.id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.jobs = data;
      })
      .catch((err) => console.log(err.message));
  },
};
</script>

<style></style>
