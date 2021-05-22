<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else>Loading</div>
  </div>
</template>

<script>
import { computed, reactive, ref, watch, watchEffect } from "vue";
import TagCloud from "../components/TagCloud";
import PostList from "../components/Posts";
import getPosts from "../composable/getPosts";
export default {
  name: "Home",
  components: { PostList, TagCloud },
  setup() {
    const { load, posts, error } = getPosts();
    load();
    return { posts, error };
    // const search = ref("");
    // const names = ref([
    //   "mario",
    //   "yoshi",
    //   "luigi",
    //   "toad",
    //   "bowser",
    //   "koopa",
    //   "peach",
    // ]);
    // const stopWatch = watch(search, () => {
    //   console.log("watch function ran");
    // });

    // const matchNames = computed(() => {
    //   return names.value.filter((name) => name.includes(search.value));
    // });
    // const stopEffect = watchEffect(() => {
    //   console.log("watchEffect ran");
    //   console.log(matchNames.value);
    // });
    // console.log(matchNames);
    // return { search, names, matchNames };
  },
  updated() {
    console.log("updated");
  },
};
</script>
<style>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>