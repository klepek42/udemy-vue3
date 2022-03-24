// Importiere statische Daten (JSON) aus der JavaScript-Datei
import { calendarWeekData } from "./seed.js";

// Importiere Vue Funktion "reactive" zur Nutzung des Reactivity Systems von Vue (Ihr wird ein Objekt übergeben)
// Importiere Vue Funktion "readonly" zur Verhinderung von Datenmanipuliationen durch Components (Ihr wird ein Objekt übergeben)
import { reactive, readonly } from "vue";

// Anwendungsdaten
const state = reactive({
  calendarWeekData,
});

//
const getters = {
  activeDay: () => state.calendarWeekData.find((day) => day.active) // Ohne Klammern, da nur eine Anweisung folgt
};

//
const mutations = {
  deleteEvent(dayId, eventTitle) {
    // Speichere den Tag in einer Variable
    // Prüfe ob die übergebene dayId mit der ID des day über die iteriert wird übereinstimmt
    const dayObj = state.calendarWeekData.find((day) => day.id === dayId);
    
    // Bestimme den Index des zu löschenden Events
    const eventIndex = dayObj.events.findIndex((event) => event.title === eventTitle);
    
    // Lösche das Event am ermittelten Index aus dem Events-Array des Day-Objekts
    dayObj.events.splice(eventIndex, 1);
  }
};

export default {
  state: readonly(state),   // Daten können nur gelesen und nicht verändert werden
  getters,
  mutations,
};
