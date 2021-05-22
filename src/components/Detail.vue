<template>
  <div>
    <div v-if="error">{{ error }}</div>
    <div v-if="post" class="post">
      <h3>{{ post.title }}</h3>
      <p class="pre">{{ post.body }}</p>
    </div>
    <div v-else><Spinner /></div>
  </div>
</template>

<script>
import getPost from "@/composable/getPost";
import Spinner from "../components/Spinner";
import { useRoute } from "vue-router";
export default {
  props: ["id"],
  components: { Spinner },
  setup(props) {
    const { error, post, load } = getPost(props.id);
    const route = useRoute();
    console.log(route);
    console.log(route.matched);
    setTimeout(() => {
      load();
    }, 2000);
    return { post, error };
  },
};
</script>

<style scoped>
.tags a {
  margin-right: 10px;
}
.post {
  max-width: 1200px;
  margin: 0 auto;
}
.post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}
.pre {
  white-space: pre-wrap;
}
</style>