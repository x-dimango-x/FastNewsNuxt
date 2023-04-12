<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container">
        <NuxtLink class="navbar-brand" to="/">Fast News</NuxtLink>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/addNews">Предложить новость</NuxtLink>
            </li>
          </ul>
          <!-- <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Текст новости" aria-label="Search">
            <button class="btn btn-outline-primary" type="submit">Поиск</button>
          </form> -->
          <!-- <ul class="navbar-nav  mb-2 mb-lg-0">
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/">Админнистрирование</NuxtLink>
            </li>
          </ul> -->
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts" setup>
</script>