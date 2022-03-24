<template>
  <div id="calendar-event">
    <div class="alert text-center" :class="alertColor">
      <div>
        <slot name="eventPriority" :priorityDisplayName="priorityDisplayName">
          <strong>{{ priorityDisplayName }}</strong>
        </slot>
      </div>

      <slot :event="event"
        ><div>{{ event.title }}</div>
      </slot>

      <div>
        <i class="fas fa-edit me-2" role="button"></i>
        <i class="far fa-trash-alt" role="button" @click="deleteEvent()"></i>
      </div>
    </div>
  </div>
</template>

<script>
import Store from "../store";

export default {
  name: "CalendarEvent",
  props: {
    event: Object,
    day: Object,
  },
  computed: {
    priorityDisplayName() {
      switch (this.event.priority) {
        case 1:
          return "Unwichtig";
        case 0:
          return "Normal";
        case -1:
          return "Dringend";
      }
      return "Unbekannte Priorität";
    },
    alertColor() {
      return "alert-" + this.event.color;
    },
  },
  methods: {
    deleteEvent() {
      // Lade aus dem Store die Mutations und wende auf diese die Funktion zum Löschen an
      Store.mutations.deleteEvent(this.day.id, this.event.title);
    },
  },
};
</script>

<style scoped></style>
