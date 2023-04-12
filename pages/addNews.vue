<template>
  <AppCard>
    <div class="card-header">
      <h1 class="card-title fs-5">Предложить новость</h1>
    </div>
    <div class="card-body">
      <form enctype="multipart/form-data">
        <div class="mb-2">
          <label for="" class="col-form-label">Заголовок новости:</label>
          <input type="text" class="form-control" required v-model="newsData.title">
        </div>
        <div class="mb-2">
          <label for="" class="col-form-label">Текст новости:</label>
          <textarea class="form-control" required v-model="newsData.body"></textarea>
        </div>
        <div class="mb-2">
          <label for="">Категория:</label>
          <select v-model="newsData.category" class="form-select">
            <option v-for="category in categories" :value="category">{{ category.title }}</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="" class="form-label">Выберите изображение:</label>
          <input class="form-control form-control-sm" name="image" @change="handleImageSelect($event)"
            accept="image/png, image/jpeg" type="file">
        </div>
      </form>
    </div>
    <div class="card-footer">
      <button type="button" class="btn btn-primary me-2" @click="sendNews()">Предложить</button>
      <NuxtLink to="/" class="btn btn-outline-danger">Отменить</NuxtLink>
    </div>
  </AppCard>
</template>

<script setup>
import { useApiStore } from '@/stores/api.store';
const store = useApiStore()
const categories = await store.getCategories()

const newsData = ref({
  image: '',
  title: '',
  body: '',
  category: ''
})

function handleImageSelect(evt) {
  newsData.value.image = evt.target.files[0]
}

async function sendNews() {
  return await store.sendNews(newsData)
}
</script>