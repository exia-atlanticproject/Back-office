<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div>
        <v-data-table
                :loading="loading"
                :headers="hasActionsSlot ? [
                ...headers, {
                    text: 'actions',
                    sortable: false,
                    value: 'actions',
                    }] : headers"
                :items="value"
                hide-actions
                item-key="name"
                :pagination.sync="pagination"
                :expand="expand"
                class="elevation-1"
        >
            <template v-slot:items="props">
                <tr @click="props.expanded = !props.expanded">
                    <td><b>{{ props.item.id }}</b></td>
                    <td>{{ props.item.name }}</td>
                    <td>
                        <v-chip
                                :color="props.item.role === 'CLIENT' ? 'blue' : 'red'"
                                text-color="white">
                            {{ props.item.role }}
                        </v-chip>
                    </td>
                    <td>{{ props.item.surname }}</td>
                    <slot name="actions" slot-scope="props"></slot>
                </tr>
            </template>
            <template v-slot:expand="props">
                <v-card flat>
                    <slot name="expand" :items="props" ></slot>
                </v-card>
            </template>
        </v-data-table>
        <div class="text-xs-center">
            <v-pagination
                    v-if="value && value.length && pagination.pages > 1"
                    v-model="pagination.page" @input="changePage" :length="pages"></v-pagination>
        </div>
    </div>
</template>

<script>
export default {
  name: 'List',
  props: ['value', 'loading'],
  data: () => ({
    expand: false,
    currentPage: 1,
    pagination: {},
    selected: [],
    headers: [
      {
        text: 'id',
        sortable: false,
        value: 'ud',
      },
      {
        text: 'name',
        sortable: false,
        value: 'name',
      }, {
        text: 'role',
        sortable: false,
        value: 'role',
      }, {
        text: 'surname',
        sortable: false,
        value: 'surname',
      },
    ],
  }),
  computed: {
    hasActionsSlot() {
      return !!this.$scopedSlots.actions;
    },
    pages() {
      if (this.pagination.rowsPerPage == null ||
          this.pagination.totalItems == null
      ) return 0;

      return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage);
    },
  },
  methods: {
    async changePage(page) {
      if (this.currentPage === page) return;
      // const data = await this.$http.get('/auth');
      // console.log(data);
      this.currentPage = page;
    },
  },
};
</script>

<style scoped>

</style>
