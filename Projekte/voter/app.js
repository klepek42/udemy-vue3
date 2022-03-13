const app = Vue.createApp({

  // Optionen
  data: function () {
    return {
      submissions: submissions, // Daten aus seed.js
      //totalVotes: 0,
    };
  },
  computed: {
    calcTotalVotes() {
      //console.log("computed property ausgeführt");
      return this.submissions.reduce((totalVotes, submissions) => {
        return totalVotes + submissions.votes;
      }, 0);
    },
    sortedSubmissions() {
     return this.submissions.sort((a, b) => {
       return b.votes - a.votes;
     });
    },
    cardHeaderBackgroundColor() {
      // Gebe ein Objekt mit den style classes zurück (Objekt-Schreibweise)
      // In dieser Funktion kann über this auf die Variablen zugegriffen werden
      /*
      return {
        'bg-primary': this.calcTotalVotes >= 50,
        'text-white': this.calcTotalVotes >= 50,

        // Alternativ als ein kombinierter String
        //'bg-primary text-white': this.calcTotalVotes >= 50,
      }
      */

      // Gebe ein Array mit den style classes zurück (Array-Schreibweise)
      if (this.calcTotalVotes >= 50) {
        return ['bg-primary', 'text-white']
      }

    },
    cardTitleFontSize() {
      return { fontSize: this.calcTotalVotes/2+'px' };
    }
  },
  methods: {
    // upvote: function () {} // Funktionales Equivalent

    // Normale Funktionsschreibweise ohne Klammern beim Aufruf
    /*
    upvote() {
      this.submissions[0].votes++;

      console.log(this);  // this-Objekt zeigt auf die Root-Component
      console.log(event); // event-Objekt wird automatisch von Vue übergeben bei Funktionsaufruf ohne Klammern. Mit Klammern werden nur explizit angegebene Parameter übergeben.
    },
    */

    // Normale Funktionsschreibeweise mit Klammern und eigenen Parametern/Argumenten
    upvote(submissionId) {
      //this.submissions[0].votes++;
      
      // Bewirke den Upvote auf die ausgewählte Submission
      const submission = this.submissions.find(
        (submission) => submission.id === submissionId
      );
      submission.votes++;

      console.log(this);  // this-Objekt zeigt auf die Root-Component
      console.log(infoText); // expliziter Parameter
      console.log(event);    // Event-Parameter explizit angegeben
    },
    /*
    logConsole(text) {
      console.log(text);
    },
    */
    /*
    calcTotalVotes() {
      return this.submissions.reduce((totalVotes, submissions) => {
        return totalVotes + submissions.votes;
      }, 0);
    }*/

    // Keine Arrow-Functions nutzen, da this hier nicht nutzbar ist (zeigt auf Window-Objekt)!
    /*
    upvote() {
      console.log(this);
    },
    */
  },
  watch: {
    /*
    // Kurze Schreibweise
    submissions(newValue, oldValue) {
      console.log(newValue);
      console.log(oldValue);
    },
    */
    // Lange Schreibweise
    /*
    submissions: {
      handler(newValue, oldValue) {
        console.log(newValue);
        console.log(oldValue);
        this.totalVotes = this.submissions.reduce((totalVotes, submission) => {
          return totalVotes + submission.votes;
        }, 0);
      },
      deep: true,
      immediate: true,
    },
    totalVotes(newValue, oldValue) {
      console.log(newValue);
      console.log(oldValue);
    },
    */
  },
});

// Liefert die Instanz zur Root-Component zurück
const vm = app.mount("#app");