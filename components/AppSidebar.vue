<template>
  <div class="list-group">
    <span class="list-group-item list-group-item-action bg-primary text-white">{{ title }}:
      <!--  все категории  -->
    </span>
    <div v-for="item in data">
      <NuxtLink :to="'byCategory/' + item.id"
        class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
        {{ item.title }}
        <!-- <span class="badge bg-primary rounded-pill">3</span> -->
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    },
    data: {
      type: Array,
      defaut: [{}]
    },
  }
}
</script>