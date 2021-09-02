<template>
  <div class="EventList">
    <h1>Events Listing</h1>
    <router-link :to="{ name: 'Event-Show', params: { id: '1' } }"
      >Show Event #1</router-link
    >
  </div>
</template>
