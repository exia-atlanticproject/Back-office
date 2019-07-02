<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div>
        <v-data-table
                :headers="headers"
                :items="value"
                :loading="loading"
                hide-actions
                :pagination.sync="pagination"
                class="elevation-1"
        >
            <template v-slot:items="props">
                <td><b>{{ props.item.id }}</b></td>
                <td>{{ props.item.macAddress }}</td>
                <td>{{ props.item.model }}</td>
                <td>{{ props.item.name }}</td>
                <td>{{ props.item.uid }}</td>
                <!--<td class="text-xs-right">{{ props.item.username }}</td>-->
                <!--<td class="text-xs-right">-->
                <!--cocou-->
                <!--</td>-->
                <!--<td class="text-xs-right">{{ props.item.fat }}</td>-->
            </template>
        </v-data-table>
        <div class="text-xs-center">
            <v-pagination
                    v-if="value && value.length && pagination.page > 1"
                    v-model="pagination.page" @input="changePage" :length="pages"></v-pagination>
        </div>
    </div>
</template>
<script>
export default {
  name: 'device-list',
  props: ['value', 'loading'],
  data: () => ({
    currentPage: 1,
    pagination: {
      rowsPerPage: 10,
      totalItems: 1,
    },
    selected: [],
    headers: [
      {
        text: 'id',
        sortable: false,
        value: 'id',
      }, {
        text: 'macAddress',
        sortable: false,
        value: 'macAddress',
      }, {
        text: 'model',
        sortable: false,
        value: 'model',
      }, {
        text: 'name',
        sortable: false,
        value: 'name',
      }, {
        text: 'uid',
        sortable: false,
        value: 'uid',
      },
    ],
  }),
  computed: {
    pages() {
      if (this.pagination.rowsPerPage == null ||
        this.pagination.totalItems == null
      ) return 0;

      return Math.ceil(this.value.length / this.pagination.rowsPerPage);
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
