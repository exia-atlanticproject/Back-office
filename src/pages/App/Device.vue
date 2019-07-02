<template>
    <div>
        <device-list v-model="devices" :loading="loading">
        </device-list>
    </div>
</template>

<script>
import DeviceList from '../../components/DeviceList';

export default {
  name: 'Device',
  components: {
    DeviceList,
  },
  data: () => ({
    devices: [],
    loading: false,
  }),
  async mounted() {
    this.loading = true;
    const { data } = await this.$http.get('/api/device');
    this.loading = false;
    if (data && data.res && data.res === 'error') console.log('error');
    this.devices = data;
  },
};
</script>

<style scoped>

</style>
