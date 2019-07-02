<template>
    <list-user v-model="users" :loading="loading"></list-user>
</template>

<script>
import ListUser from '../../components/ListUser';

export default {
  name: 'User',
  components: { ListUser },
  data: () => ({
    users: [],
    loading: false,
  }),
  async mounted() {
    this.loading = true;
    const { data } = await this.$http.get('/api/users');
    this.loading = false;
    if (data && data.res && data.res === 'error') return console.log('error');
    this.users = data;
    return null;
  },
};
</script>

<style scoped>

</style>
