import axios from "axios";
import {onMounted, ref} from "vue";

export function usePosts(limit) {
    const posts = ref([])
    const totalPages = ref(0)
    const isPostLoading = ref(true)
    const fetching = async () => {
            try {

                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: 1,
                        _limit: limit
                    }
                });
                totalPages.value = Math.ceil(response.headers['x-total-count'] / limit)
                posts.value = response.data; // перезаписываем текущие посты на те, что с сервера
            } catch (e) {
                alert('Ошибка')
            } finally {
                isPostLoading.value = false;
            }
    }

    onMounted(fetching);
    return {
        posts, isPostLoading, totalPages
    }
}