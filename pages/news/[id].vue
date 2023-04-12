<template>
  <AppCard class="mb-3">
    <div class="card-header">
      <span>Категория: <a href="">{{ categories[news.category_id - 1]?.title }}</a></span>
    </div>
    <div class="card-body">
      <div class="media d-flex">
        <div class="media-body">
          <p>
            <img :src="store.serverUrl + '/news/image/' + news.image" class="img-fluid mb-2">
          <h5 class="mb-2">{{ news.title }}</h5>
          <span class="mb-2">
            {{ news.body }}
          </span>
          </p>
        </div>
      </div>
    </div>
    <div class="card-footer d-flex justify-content-between">
      <span class="text-muted">{{ news.createdAt }}</span>
    </div>
  </AppCard>
</template>

<script setup>
import { useApiStore } from '@/stores/api.store';

const route = useRoute()
const store = useApiStore()
const categories = await store.getCategories() || []
const news = await store.getNewsById(route.params.id) || []
console.log(news.value);
</script>