<template>
  <q-input
    :loading="searching"
    v-model="query"
    debounce="500"
    filled
    :placeholder="$t('search')"
    :hint="$t('searchForCustomLocation')"
  >
    <template v-slot:append>
      <q-icon v-if="query !== ''" name="close" @click="query = ''" class="cursor-pointer" />
      <q-icon v-else name="search" />
    </template>
    <template v-slot:after>
      <q-btn round dense flat icon="gps_fixed" @click="searchAroundMe" :color="currentSort === 'distance' ? 'light-green' : ''"/>
    </template>
  </q-input>
  <q-pull-to-refresh @refresh="refresh">
    <q-list ref="scrollTargetRef" class="scroll" >
      <div v-for="(customLocation, index) in customLocations" :key="index" >
        <q-slide-item @left="opt => goTo(opt, customLocation)">
          <template v-slot:left>
            <q-icon name="assist_walker" />
          </template>
          <q-item clickable @click="customLocationClick(customLocation.id)">
            <q-item-section avatar top>
              <q-avatar icon="info" color="primary" text-color="white" />
              <q-icon name="keyboard_double_arrow_right" size="lg" color="primary"></q-icon>
            </q-item-section>

            <q-item-section>
              <q-item-label lines="1"><span v-if="customLocation.isAuthor"><q-icon name="check" /></span> {{ customLocation.id }} - {{ customLocation.name }}</q-item-label>
              <q-item-label caption>{{$t('type')}}: {{ customLocation.type }}, {{$t('date')}}: {{ formatDate(customLocation.createdDate) }}</q-item-label>
              <q-item-label caption>
                {{$t('organizations')}}: <span v-bind:key="organization.id" v-for="(organization, index) in customLocation.organizations">
                  {{ organization.name }}<span v-if="index+1 < customLocation.organizations.length">, </span>
                 </span>
              </q-item-label>
              <q-item-label v-if="customLocation.distance" caption>{{$t('distance')}}: {{ parseInt(customLocation.distance) }} m</q-item-label>
              </q-item-section>

            <q-item-section side>
              <q-icon name="map" color="green" size="lg" @click.stop="showOnMapClick(customLocation)"/>
            </q-item-section>
          </q-item>
        </q-slide-item>
        <q-separator/>
      </div>
    </q-list>
  </q-pull-to-refresh>
  <q-btn unelevated color="light-blue-7" size="lg" class="full-width" :label="$t('loadMore')" @click="loadMore" :disabled="(totalPages <= pageNumber)"/>
</template>

<script>

import { useQuasar } from 'quasar'
import { ref } from 'vue'
import { useCustomLocationStore } from 'stores/custom-location-store'
import { formatDate } from 'src/helpers/date'
export default {
  name: 'CustomLocationSearchPage',
  setup () {
    const { dialog } = useQuasar()
    const store = useCustomLocationStore()

    if (store.getCustomLocations.length === 0) {
      store.search().then(() => {
        console.log('custom locations loaded')
      })
    }
    const query = ref(store.getQuery)
    const selectedCustomLocation = ref(null)
    const confirmRef = ref(null)

    return {
      confirmDialog: dialog,
      store,
      query,
      confirm: ref(false),
      selectedCustomLocation,
      closeSlider: null,
      confirmRef,
      formatDate
    }
  },
  computed: {
    customLocations () {
      return this.store.getCustomLocations
    },
    pageNumber () {
      return this.store.getPageNumber
    },
    totalPages () {
      return this.store.getTotalPages
    },
    currentSort () {
      return this.store.getCurrentSort
    },
    selectedName () {
      return `[${this.selectedCustomLocation?.id}] ${this.selectedCustomLocation?.name}`
    },
    searching () {
      return this.store.getSearchingStatus
    }
  },
  watch: {
    query (newQuery, oldQuery) {
      this.executeSearch()
    }
  },
  methods: {
    goTo ({ reset }, customLocation) {
      reset()
      this.selectedCustomLocation = customLocation
      const name = `[${this.selectedCustomLocation?.id}] ${this.selectedCustomLocation?.name}`
      this.confirmDialog({
        title: `${this.$t('confirm')}`,
        message: `${this.$t('navigateToCustomLocation')}: ${name}`,
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.$router.push({
          path: '/',
          query: {
            lat: this.selectedCustomLocation.lat,
            lng: this.selectedCustomLocation.lng,
            navigate: true,
            customLocation: true,
            name
          }
        })
      })
    },
    customLocationClick (customLocationId) {
      // TODO
      // this.$router.push({
      //   name: 'custom-location-details',
      //   params: { customLocationId }
      // })
    },
    showOnMapClick (customLocation) {
      this.$router.push({
        path: '/',
        query: {
          lat: customLocation.lat,
          lng: customLocation.lng,
          customLocation: true
        }
      })
    },
    async loadMore () {
      this.store.incrementPageNumber()

      await this.store.search()
    },
    async executeSearch () {
      this.store.clearLocationParameters()
      this.store.addQueryParameter(this.query)
      await this.store.search()
    },
    async searchAroundMe () {
      if (this.currentSort) {
        this.store.clearLocationParameters()
        this.store.addQueryParameter(this.query)
        await this.store.search()

        return
      }
      await this.store.searchForNearby()
    },
    async refresh (done) {
      if (this.currentSort === 'distance') {
        await this.store.searchForNearby()
      } else {
        await this.store.search()
      }
      done()
    }
  }
}
</script>
