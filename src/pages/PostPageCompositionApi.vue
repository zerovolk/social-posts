<template>
  <div>
    <h1>Страница с постами</h1>
    <my-input
        v-model="searchQuery"
        placeholder="Поиск"
    />
    <div class="app__btns">
      <my-button
      >
        Создать пост
      </my-button>
      <my-select
          v-model="selectedSort"
          :options="sortOptions"
      />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form
      />
    </my-dialog>

    <post-list
        :posts="sortedAndSearchedPosts"
        v-if="!isPostLoading"
    />
    <div v-else>Идет загрузка...</div>
  </div>

</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import MyButton from "@/components/UI/MyButton";
import axios from 'axios';
import MySelect from "@/components/UI/MySelect";
import MyDialog from "@/components/UI/MyDialog";
import MyInput from "@/components/UI/MyInput";
import {ref} from "vue";
import {usePosts} from "@/hooks/usePosts";
import useSortedPosts from "@/hooks/useSortedPosts";
import useSortedAndSearchedPosts from '@/hooks/useSortedAndSearchedPosts'

export default {
  components: {
    MyInput,
    MyDialog,
    MySelect,
    MyButton,
    PostList, PostForm
  },
  data() {
    return {
      dialogVisible: false,
      sortOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По содержимому'}
      ]
    }
  },
  setup(props) {
    const {posts, totalPages, isPostLoading} = usePosts(10);
    const {sortedPosts, selectedSort} = useSortedPosts(posts);
    const {searchQuery, sortedAndSearchedPosts} = useSortedAndSearchedPosts(sortedPosts)

    return {
      posts,
      totalPages,
      isPostLoading,
      sortedPosts,
      selectedSort,
      searchQuery,
      sortedAndSearchedPosts
    }
  }
};
</script>

<style>

.app__btns {
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
}

.page__wrapper {
  display: flex;
  margin-top: 15px;
}

.page {
  border: 1px solid black;
  padding: 10px;
  cursor: pointer;
}
.current-page {
  border: 2px solid teal;
}

.observer {
  height: 30px;
  background: green;
}
</style>