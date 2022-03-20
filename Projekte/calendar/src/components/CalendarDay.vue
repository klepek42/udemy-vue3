<template>
  <div id="calendar-day">
    <!-- Anfang: Template für die Calendar-Event-Component -->
    <CalendarEvent />
    <!-- Ende: Template für die Calendar-Event-Component -->
  </div>
</template>

<script>
import CalendarEvent from "./CalendarEvent";
export default {
  name: "CalendarDay",
  components: {
    CalendarEvent,
  },
};
</script>

<style scoped></style>
