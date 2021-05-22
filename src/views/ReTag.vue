<template>
  <div>
    <div v-if="error">
      {{ error }}
    </div>
    <div v-if="posts.length">
      <Posts :posts="postsWithTag" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import Spinner from "../components/Spinner";
import Posts from "../components/Posts";
import { useRoute } from "vue-router";
import { computed } from "vue";
import getPosts from "../composable/getPosts";

export default {
  components: { Posts, Spinner },
  setup() {
    const route = useRoute();
    const { posts, error, load } = getPosts();
    load();
    const postsWithTag = computed(() => {
      return posts.value.filter((p) => p.tags?.includes(route.params.tag));
    });
    return { posts, error, postsWithTag };
  },
};
</script>