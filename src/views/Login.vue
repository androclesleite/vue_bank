<template>
  <div class="max-w-md mx-auto p-4">
    <h2 class="text-xl font-semibold mb-4">Login</h2>
    <form @submit.prevent="handleSubmit">
      <div class="mb-4">
        <label for="username" class="block text-sm font-medium text-gray-700">Usuário</label>
        <input
          type="text"
          id="username"
          v-model="username"
          class="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          required
        />
      </div>
      <div class="mb-4">
        <label for="password" class="block text-sm font-medium text-gray-700">Senha</label>
        <input
          type="password"
          id="password"
          v-model="password"
          class="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          required
        />
      </div>
      <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded-md">
        Entrar
      </button>
    </form>
    <p v-if="message" class="mt-4 text-gray-700">{{ message }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'Login',
  setup() {
    const username = ref<string>('');
    const password = ref<string>('');
    const message = ref<string>('');

    const handleSubmit = async () => {
      try {
        const response = await axios.post('http://localhost:8000/api/login', {
          username: username.value,
          password: password.value,
        });
        // Redirecionar ou armazenar token
        this.$router.push('/deposit');
      } catch (error) {
        message.value = 'Erro: ' + error.response?.data?.message || 'Erro desconhecido';
      }
    };

    return {
      username,
      password,
      message,
      handleSubmit,
    };
  },
});
</script>

<style scoped>
/* Estilos adicionais se necessário */
</style>
