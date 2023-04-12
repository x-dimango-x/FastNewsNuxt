<template>
  <div v-if="news.length">
    <div v-for="item in news">
      <AppCard class="mb-3">
        <div class="card-header">
          <span>Категория:<NuxtLink :to="'byCategory/' + categories[item.category_id - 1].id">{{
            categories[item.category_id - 1]?.title }}</NuxtLink>
          </span>
        </div>
        <div class="card-body">
          <div class="media d-flex">
            <div class="media-body">
              <p><img :src="store.serverUrl + '/news/image/' + item.image" height="120px" width="200px"
                  class="float-left img-fluid">
              <h5>
                <NuxtLink :to="'news/' + item.id" class="nav-link">
                  {{ item.title.length > 35 ? item.title.slice(0, 35) + "..." : item.title }}
                </NuxtLink>
              </h5>
              <span>{{ item.body.length > 90 ? item.body.slice(0, 90) + "..." : item.body }}</span>
              </p>
            </div>
          </div>
        </div>
        <div class="card-footer d-flex justify-content-between">
          <span class="text-muted">{{ item.createdAt }}</span>
        </div>
      </AppCard>
    </div>
    <!-- <AppPaginator /> -->
  </div>
  <div v-else>
    <span>Тут пока пусто</span>
  </div>
</template>

<style scoped>
.float-left {
  float: left;
  margin: 0px 15px 7px 0;
}
</style>

<script setup>
import { useApiStore } from '@/stores/api.store';

const store = useApiStore()
const news = await store.getNews() || []
const categories = await store.getCategories()

</script>
