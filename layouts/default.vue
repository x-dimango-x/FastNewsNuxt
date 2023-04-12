<template>
  <AppHeader />
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-3">
        <AppSidebar :title="'Категории'" :data="categories" />
      </div>
      <div class="col-md-6">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useApiStore } from '@/stores/api.store';
const store = useApiStore()
const categories = await store.getCategories()
</script>
