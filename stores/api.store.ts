import { defineStore } from "pinia"
import { INewsData } from "./api.interface"

export const useApiStore = defineStore('api', () => {
  const serverUrl = ref<string>('http://localhost:5000/api')
  // const input = ref<string>('')

  async function sendNews(newsData: INewsData) {
    const formData = ref(new FormData())
    formData.value.append('title', newsData.value.title)
    formData.value.append('body', newsData.value.body)
    formData.value.append('image', newsData.value.image)
    formData.value.append('category', newsData.value.category.id)

    await useFetch(`${serverUrl.value}/news/add`, {
      method: 'post',
      body: formData.value
    })

    return await navigateTo('/')
  }

  async function getNews() {
    const { data } = await useFetch(serverUrl.value + '/news/all')
    return data.value
  }

  async function getCategories() {
    const { data } = await useFetch(serverUrl.value + '/categories/all')
    return data.value
  }


  async function getNewsById(id: string) {
    const { data } = await useFetch(`${serverUrl.value}/news/get/${id}`)

    return data.value
  }


  async function getNewsByCategory(id: string) {
    const { data } = await useFetch(`${serverUrl.value}/news/getNews/byCategory/${id}`)

    return data.value
  }

  return { getNews, getCategories, sendNews, serverUrl, getNewsById, getNewsByCategory }
})