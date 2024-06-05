import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'

export const useStore = defineStore('store', () => {
  const isMenuVisible = ref(true)

  const user = reactive ({
    name: 'Usuário Mock',
    email: 'mock@ps_sistemas.com.br'
  })

  const toggleMenu = (isVisible: any) => {
    if (isVisible === undefined) {
      isMenuVisible.value = !isMenuVisible.value
    } else {
      isMenuVisible.value = isVisible
    }
  }

  return { isMenuVisible, toggleMenu, user }

})
