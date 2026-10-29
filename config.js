/* ======================================================================
   config.js – hier wird später das Backend / der Desktop-Client angebunden.
   An index.html muss dafür nichts geändert werden.

   Solange statusUrl leer ist, zeigt die Seite Demo-Daten (gelbes "DEMO").

   ERWARTETES JSON (eine URL liefert alles):
   {
     "status": "online",            // "online" | "idle" | "dnd" | "offline"
     "music": {                     // oder null, wenn nichts läuft
       "title": "…",
       "artist": "…",
       "album": "…",
       "coverUrl": "https://…",     // optional
       "position": 42,              // Sekunden, optional
       "duration": 215,             // Sekunden, optional
       "isPaused": false            // optional
     },
     "game": {                      // oder null, wenn nichts gespielt wird
       "name": "…",
       "detail": "…",               // optional
       "startedAt": 1730000000      // Unix-Sekunden, optional
     }
   }

   HINWEISE
   - Die URL muss https sein (GitHub Pages läuft über https) und CORS für
     deine Pages-Domain erlauben.
   - http://localhost:… funktioniert nur auf deinem eigenen PC. Andere
     Besucher fragen ihren eigenen Rechner ab. Damit alle den Status sehen,
     muss der Desktop-Client seine Daten an einen öffentlich erreichbaren
     Server oder Tunnel schicken, dessen URL du hier einträgst.
   ====================================================================== */
window.STATUS_CONFIG = {

  // URL, die das JSON oben liefert, z. B. "https://api.example.de/status"
  statusUrl: "",

  // Wie oft abgefragt wird (Sekunden)
  pollSeconds: 5,

  // Deine Discord-Nutzer-ID (macht die Discord-Kachel anklickbar).
  // Discord: Einstellungen → Erweitert → Entwicklermodus, dann Rechtsklick
  // auf dein Profil → "Benutzer-ID kopieren".
  discordUserId: "",

  // Optional: Falls dein Client ein anderes Format liefert, hier umwandeln.
  // Muss das JSON von oben zurückgeben. Beispiel:
  //
  // adapter: raw => ({
  //   status: raw.online ? "online" : "offline",
  //   music: raw.track ? {
  //     title: raw.track.name, artist: raw.track.artist,
  //     album: raw.track.album, coverUrl: raw.track.cover,
  //     position: raw.track.pos, duration: raw.track.len,
  //     isPaused: raw.track.paused
  //   } : null,
  //   game: raw.playing ? { name: raw.game, startedAt: raw.started_at } : null
  // })
  adapter: null
};
