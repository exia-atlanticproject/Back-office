<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div>
        <list-user v-model="users">
            <template #expand="{ item }">
                <list-associate></list-associate>
            </template>
            <!--<template #actions="item">-->
                <!--<p>coucou</p>-->
                <!--&lt;!&ndash;<v-icon small class="mr-2">&ndash;&gt;-->
                    <!--&lt;!&ndash;<v-icon>add</v-icon>&ndash;&gt;-->
                <!--&lt;!&ndash;</v-icon>&ndash;&gt;-->
                <!--&lt;!&ndash;<v-btn small>&ndash;&gt;-->
                    <!--&lt;!&ndash;<v-icon>remove_red_eye</v-icon>&ndash;&gt;-->
                <!--&lt;!&ndash;</v-btn>&ndash;&gt;-->
            <!--</template>-->
        </list-user>
    </div>
</template>

<script>
import ListUser from '../../components/ListUser';
import ListAssociate from '../../components/ListAssociate';

export default {
  components: {
    ListUser,
    ListAssociate,
  },
  data: () => ({
    pagination: {
      sortBy: 'name',
    },
    users: [],
  }),
  async mounted() {
    this.loading = true;
    const { data } = await this.$http.get('/api/users');
    this.loading = false;
    if (data && data.res && data.res === 'error') return console.log('error');
    this.users = data;
    return null;
  },
  methods: {
    toggleAll() {
      if (this.selected.length) this.selected = [];
      else this.selected = this.desserts.slice();
    },
    changeSort(column) {
      if (this.pagination.sortBy === column) {
        this.pagination.descending = !this.pagination.descending;
      } else {
        this.pagination.sortBy = column;
        this.pagination.descending = false;
      }
    },
  },
};
</script>

<style scoped>

</style>
