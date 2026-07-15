// ==========================================================================
// NUTRIO - MÓDULO DE GIMNASIO (js/gym.js)
// ==========================================================================

// ---- Base de ejercicios organizados por grupo muscular ----
const GYM_EXERCISES = {
  pecho: [
    { id: 'pushup',         name: 'Flexiones',               icon: '🏋️', type: 'reps',      defaultReps: 15, defaultSets: 3 },
    { id: 'bench_press',    name: 'Press de banca',           icon: '💪', type: 'weight_reps', defaultReps: 12, defaultSets: 3, defaultWeight: 40 },
    { id: 'incline_press',  name: 'Press inclinado',          icon: '💪', type: 'weight_reps', defaultReps: 12, defaultSets: 3, defaultWeight: 30 },
    { id: 'cable_fly',      name: 'Apertura en polea',        icon: '🔲', type: 'weight_reps', defaultReps: 15, defaultSets: 3, defaultWeight: 10 },
    { id: 'dips_chest',     name: 'Dips (pecho)',             icon: '⚡', type: 'reps',      defaultReps: 12, defaultSets: 3 },
    { id: 'pushup_wide',    name: 'Flexiones abiertas',       icon: '🏋️', type: 'reps',      defaultReps: 12, defaultSets: 3 },
  ],
  espalda: [
    { id: 'pullup',         name: 'Dominadas',                icon: '🔥', type: 'reps',      defaultReps: 8,  defaultSets: 3 },
    { id: 'lat_pulldown',   name: 'Jalón al pecho',           icon: '⬇️', type: 'weight_reps', defaultReps: 12, defaultSets: 3, defaultWeight: 35 },
    { id: 'barbell_row',    name: 'Remo con barra',           icon: '↔️', type: 'weight_reps', defaultReps: 10, defaultSets: 3, defaultWeight: 40 },
    { id: 'dumbbell_row',   name: 'Remo con mancuerna',       icon: '↔️', type: 'weight_reps', defaultReps: 12, defaultSets: 3, defaultWeight: 14 },
    { id: 'face_pull',      name: 'Face pull',                icon: '🎯', type: 'weight_reps', defaultReps: 15, defaultSets: 3, defaultWeight: 10 },
    { id: 'hyperext',       name: 'Hiperextensiones',         icon: '⬆️', type: 'reps',      defaultReps: 15, defaultSets: 3 },
  ],
  hombros: [
    { id: 'ohp',            name: 'Press militar',            icon: '💪', type: 'weight_reps', defaultReps: 10, defaultSets: 3, defaultWeight: 30 },
    { id: 'lateral_raise',  name: 'Elevación lateral',        icon: '🦅', type: 'weight_reps', defaultReps: 15, defaultSets: 3, defaultWeight: 8 },
    { id: 'front_raise',    name: 'Elevación frontal',        icon: '➡️', type: 'weight_reps', defaultReps: 12, defaultSets: 3, defaultWeight: 8 },
    { id: 'reverse_fly',    name: 'Pájaros (posterior)',       icon: '🔄', type: 'weight_reps', defaultReps: 15, defaultSets: 3, defaultWeight: 8 },
    { id: 'shrug',          name: 'Encogimientos',            icon: '⬆️', type: 'weight_reps', defaultReps: 15, defaultSets: 3, defaultWeight: 30 },
  ],
  brazos: [
    { id: 'bicep_curl',     name: 'Curl de bíceps',           icon: '💪', type: 'weight_reps', defaultReps: 12, defaultSets: 3, defaultWeight: 10 },
    { id: 'hammer_curl',    name: 'Curl martillo',            icon: '🔨', type: 'weight_reps', defaultReps: 12, defaultSets: 3, defaultWeight: 10 },
    { id: 'tricep_push',    name: 'Extensión de tríceps',     icon: '⬇️', type: 'weight_reps', defaultReps: 12, defaultSets: 3, defaultWeight: 12 },
    { id: 'skull_crusher',  name: 'Skull crusher',            icon: '💀', type: 'weight_reps', defaultReps: 12, defaultSets: 3, defaultWeight: 20 },
    { id: 'tricep_dip',     name: 'Dips (tríceps)',           icon: '⚡', type: 'reps',      defaultReps: 12, defaultSets: 3 },
  ],
  piernas: [
    { id: 'squat',          name: 'Sentadilla',               icon: '🦵', type: 'weight_reps', defaultReps: 10, defaultSets: 3, defaultWeight: 50 },
    { id: 'leg_press',      name: 'Prensa de piernas',        icon: '🦿', type: 'weight_reps', defaultReps: 12, defaultSets: 3, defaultWeight: 80 },
    { id: 'romanian_dl',    name: 'Peso muerto rumano',       icon: '🏋️', type: 'weight_reps', defaultReps: 10, defaultSets: 3, defaultWeight: 40 },
    { id: 'leg_curl',       name: 'Curl de isquios',          icon: '🔁', type: 'weight_reps', defaultReps: 12, defaultSets: 3, defaultWeight: 25 },
    { id: 'leg_ext',        name: 'Extensión de cuádriceps',  icon: '⬆️', type: 'weight_reps', defaultReps: 12, defaultSets: 3, defaultWeight: 30 },
    { id: 'calf_raise',     name: 'Elevación de talones',     icon: '🦶', type: 'weight_reps', defaultReps: 15, defaultSets: 3, defaultWeight: 40 },
    { id: 'lunges',         name: 'Zancadas',                 icon: '🚶', type: 'weight_reps', defaultReps: 12, defaultSets: 3, defaultWeight: 16 },
  ],
  core: [
    { id: 'plank',          name: 'Plancha',                  icon: '🧘', type: 'time',      defaultTime: 45, defaultSets: 3 },
    { id: 'crunch',         name: 'Crunch',                   icon: '🔄', type: 'reps',      defaultReps: 20, defaultSets: 3 },
    { id: 'leg_raise',      name: 'Elevación de piernas',     icon: '🦵', type: 'reps',      defaultReps: 15, defaultSets: 3 },
    { id: 'russian_twist',  name: 'Giro ruso',               icon: '🔁', type: 'reps',      defaultReps: 20, defaultSets: 3 },
    { id: 'mountain_climb', name: 'Mountain climbers',        icon: '⛰️', type: 'reps',      defaultReps: 20, defaultSets: 3 },
    { id: 'dead_bug',       name: 'Dead bug',                 icon: '🐛', type: 'reps',      defaultReps: 16, defaultSets: 3 },
  ],
  cardio: [
    { id: 'running',        name: 'Running / Trote',          icon: '🏃', type: 'time_dist', defaultTime: 30 },
    { id: 'cycling',        name: 'Cycling / Bicicleta',      icon: '🚴', type: 'time_dist', defaultTime: 30 },
    { id: 'jump_rope',      name: 'Cuerda para saltar',       icon: '⏭️', type: 'time',      defaultTime: 15, defaultSets: 3 },
    { id: 'burpees',        name: 'Burpees',                  icon: '💥', type: 'reps',      defaultReps: 10, defaultSets: 3 },
    { id: 'jumping_jack',   name: 'Jumping jacks',            icon: '⭐', type: 'reps',      defaultReps: 30, defaultSets: 3 },
    { id: 'elliptical',     name: 'Elíptica',                 icon: '🔄', type: 'time_dist', defaultTime: 20 },
  ]
};

// ---- Etiquetas amigables para cada grupo ----
const MUSCLE_LABELS = {
  pecho:   'Pecho',
  espalda: 'Espalda',
  hombros: 'Hombros',
  brazos:  'Brazos',
  piernas: 'Piernas',
  core:    'Core / Abdominales',
  cardio:  'Cardio'
};

// ---- Rutinas predefinidas ----
const GYM_ROUTINES = [
  {
    id: 'push_pull_legs_1',
    name: 'Push (Pecho / Hombros / Tríceps)',
    tag: 'Push-Pull-Legs',
    exercises: [
      { group: 'pecho',   exId: 'bench_press' },
      { group: 'pecho',   exId: 'incline_press' },
      { group: 'hombros', exId: 'ohp' },
      { group: 'hombros', exId: 'lateral_raise' },
      { group: 'brazos',  exId: 'tricep_push' },
      { group: 'brazos',  exId: 'skull_crusher' },
    ]
  },
  {
    id: 'push_pull_legs_2',
    name: 'Pull (Espalda / Bíceps)',
    tag: 'Push-Pull-Legs',
    exercises: [
      { group: 'espalda', exId: 'pullup' },
      { group: 'espalda', exId: 'lat_pulldown' },
      { group: 'espalda', exId: 'barbell_row' },
      { group: 'espalda', exId: 'face_pull' },
      { group: 'brazos',  exId: 'bicep_curl' },
      { group: 'brazos',  exId: 'hammer_curl' },
    ]
  },
  {
    id: 'push_pull_legs_3',
    name: 'Legs (Piernas / Core)',
    tag: 'Push-Pull-Legs',
    exercises: [
      { group: 'piernas', exId: 'squat' },
      { group: 'piernas', exId: 'leg_press' },
      { group: 'piernas', exId: 'romanian_dl' },
      { group: 'piernas', exId: 'leg_curl' },
      { group: 'piernas', exId: 'calf_raise' },
      { group: 'core',    exId: 'plank' },
    ]
  },
  {
    id: 'upper_lower_1',
    name: 'Upper Body',
    tag: 'Upper-Lower',
    exercises: [
      { group: 'pecho',   exId: 'bench_press' },
      { group: 'espalda', exId: 'lat_pulldown' },
      { group: 'hombros', exId: 'ohp' },
      { group: 'hombros', exId: 'lateral_raise' },
      { group: 'brazos',  exId: 'bicep_curl' },
      { group: 'brazos',  exId: 'tricep_push' },
    ]
  },
  {
    id: 'upper_lower_2',
    name: 'Lower Body',
    tag: 'Upper-Lower',
    exercises: [
      { group: 'piernas', exId: 'squat' },
      { group: 'piernas', exId: 'leg_press' },
      { group: 'piernas', exId: 'romanian_dl' },
      { group: 'piernas', exId: 'leg_curl' },
      { group: 'piernas', exId: 'calf_raise' },
      { group: 'core',    exId: 'plank' },
    ]
  },
  {
    id: 'full_body',
    name: 'Full Body',
    tag: 'Full Body',
    exercises: [
      { group: 'pecho',   exId: 'pushup' },
      { group: 'espalda', exId: 'dumbbell_row' },
      { group: 'piernas', exId: 'squat' },
      { group: 'hombros', exId: 'lateral_raise' },
      { group: 'brazos',  exId: 'bicep_curl' },
      { group: 'core',    exId: 'plank' },
      { group: 'core',    exId: 'russian_twist' },
    ]
  },
  {
    id: 'cardio_core',
    name: 'Cardio + Core',
    tag: 'Cardio',
    exercises: [
      { group: 'cardio', exId: 'jump_rope' },
      { group: 'cardio', exId: 'burpees' },
      { group: 'core',   exId: 'plank' },
      { group: 'core',   exId: 'mountain_climb' },
      { group: 'core',   exId: 'russian_twist' },
      { group: 'core',   exId: 'leg_raise' },
    ]
  }
];

// ==========================================================================
// Storage para Gym
// ==========================================================================
const GymStorage = {
  _keyWorkouts: 'nutrio_gym_workouts',
  _keyActive:   'nutrio_gym_active',

  getWorkouts() {
    const d = localStorage.getItem(this._keyWorkouts);
    return d ? JSON.parse(d) : [];
  },

  saveWorkouts(w) {
    localStorage.setItem(this._keyWorkouts, JSON.stringify(w));
  },

  getActive() {
    const d = localStorage.getItem(this._keyActive);
    return d ? JSON.parse(d) : null;
  },

  setActive(session) {
    localStorage.setItem(this._keyActive, JSON.stringify(session));
  },

  clearActive() {
    localStorage.removeItem(this._keyActive);
  },

  clearAll() {
    localStorage.removeItem(this._keyWorkouts);
    localStorage.removeItem(this._keyActive);
  }
};

// ==========================================================================
// Módulo principal de UI de Gym
// ==========================================================================
window.GymUI = {

  _currentTab: 'today',    // 'today' | 'routines' | 'exercises' | 'history'
  _selectedGroup: 'pecho',
  _activeSession: null,
  _sessionExercises: [],

  // ---- Init ----
  init() {
    this._render();
  },

  // ---- Render principal ----
  _render() {
    const container = document.getElementById('gymContent');
    if (!container) return;

    // Verificar si hay sesión activa
    this._activeSession = GymStorage.getActive();

    container.innerHTML = `
      <h1>Gimnasio</h1>
      <p style="margin-bottom: 14px;">Registra tus entrenamientos, elige rutinas y seguí tu progreso.</p>

      ${this._activeSession ? this._renderActiveSession() : ''}

      <div class="gym-tabs">
        <button class="gym-tab ${this._currentTab === 'today' ? 'active' : ''}" onclick="GymUI._switchTab('today')">Hoy</button>
        <button class="gym-tab ${this._currentTab === 'routines' ? 'active' : ''}" onclick="GymUI._switchTab('routines')">Rutinas</button>
        <button class="gym-tab ${this._currentTab === 'exercises' ? 'active' : ''}" onclick="GymUI._switchTab('exercises')">Ejercicios</button>
        <button class="gym-tab ${this._currentTab === 'history' ? 'active' : ''}" onclick="GymUI._switchTab('history')">Historial</button>
      </div>

      <div id="gymTabContent">${this._renderTabContent()}</div>
    `;
  },

  _renderActiveSession() {
    const s = this._activeSession;
    const elapsed = this._formatElapsed(s.startTime);
    return `
      <div class="card gym-active-session" style="margin-top: 12px;">
        <div style="display:flex; align-items:center; justify-content:space-between;">
          <div>
            <span class="gym-live-dot"></span>
            <span style="font-weight:700; font-size:15px;">Entrenamiento en curso</span>
            <div class="gym-session-info">🕐 ${elapsed} · ${s.routineName || 'Libre'}</div>
          </div>
          <button class="btn btn-primary gym-finish-btn" onclick="GymUI._finishSession()" style="width:auto; padding:10px 18px; font-size:13px; background:var(--primary); color:#fff;">Finalizar</button>
        </div>
      </div>
    `;
  },

  _formatElapsed(startTime) {
    const diff = Date.now() - startTime;
    const mins = Math.floor(diff / 60000);
    const hrs = Math.floor(mins / 60);
    const m = mins % 60;
    return hrs > 0 ? `${hrs}h ${m}m` : `${m} min`;
  },

  // ---- Tabs ----
  _switchTab(tab) {
    this._currentTab = tab;
    this._render();
  },

  _renderTabContent() {
    switch (this._currentTab) {
      case 'today':    return this._renderToday();
      case 'routines': return this._renderRoutines();
      case 'exercises':return this._renderExercises();
      case 'history':  return this._renderHistory();
      default:         return '';
    }
  },

  // ==================================================================
  // TAB: HOY
  // ==================================================================
  _renderToday() {
    const workouts = GymStorage.getWorkouts();
    const today = new Date().toDateString();
    const todayWorkouts = workouts.filter(w => new Date(w.date).toDateString() === today);

    const totalVolume = todayWorkouts.reduce((sum, w) => {
      return sum + (w.exercises || []).reduce((s, ex) => {
        if (ex.type === 'weight_reps' && ex.sets) {
          return s + ex.sets.reduce((ss, set) => ss + (set.weight || 0) * (set.reps || 0), 0);
        }
        if (ex.type === 'reps' && ex.sets) {
          return s + ex.sets.reduce((ss, set) => ss + (set.reps || 0), 0);
        }
        return s;
      }, 0);
    }, 0);

    const totalExercises = todayWorkouts.reduce((sum, w) => sum + (w.exercises || []).length, 0);

    return `
      <div class="gym-stats-row">
        <div class="gym-stat-card">
          <div class="gym-stat-num">${todayWorkouts.length}</div>
          <div class="gym-stat-label">Entrenamientos</div>
        </div>
        <div class="gym-stat-card">
          <div class="gym-stat-num">${totalExercises}</div>
          <div class="gym-stat-label">Ejercicios</div>
        </div>
        <div class="gym-stat-card">
          <div class="gym-stat-num">${totalVolume > 1000 ? (totalVolume / 1000).toFixed(1) + 'k' : totalVolume}</div>
          <div class="gym-stat-label">Volumen (kg)</div>
        </div>
      </div>

      <button class="btn btn-primary" style="margin-bottom: 14px;" onclick="GymUI._startQuickSession()">
        Iniciar entrenamiento libre
      </button>

      ${todayWorkouts.length === 0 ? `
        <div class="card" style="text-align:center; padding: 30px 20px; margin-top: 14px;">
          <div style="font-size: 40px; margin-bottom: 8px;">🏋️</div>
          <p style="font-size:14px; color:var(--text-muted);">Todavía no entrenaste hoy.<br>Arrancá con una rutina o un entrenamiento libre.</p>
        </div>
      ` : `
        <div class="gym-section-title">Entrenamientos de hoy</div>
        ${todayWorkouts.map(w => this._renderWorkoutCard(w)).join('')}
      `}
    `;
  },

  _renderWorkoutCard(w) {
    const exCount = (w.exercises || []).length;
    const elapsed = w.endTime
      ? this._formatElapsedStatic(w.startTime, w.endTime)
      : 'En curso...';
    return `
      <div class="card gym-workout-card tap-feedback" onclick="GymUI._viewWorkoutDetail('${w.id}')">
        <div style="display:flex; align-items:center; justify-content:space-between;">
          <div>
            <div style="font-weight:700; font-size:15px;">${w.routineName || 'Entrenamiento libre'}</div>
            <div class="gym-workout-meta">${exCount} ejercicios · ${elapsed} · ${this._formatDate(w.date)}</div>
          </div>
          <span style="font-size: 18px;">›</span>
        </div>
      </div>
    `;
  },

  _formatDate(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' });
  },

  _formatElapsedStatic(start, end) {
    const diff = end - start;
    const mins = Math.floor(diff / 60000);
    const hrs = Math.floor(mins / 60);
    const m = mins % 60;
    return hrs > 0 ? `${hrs}h ${m}m` : `${m} min`;
  },

  // ==================================================================
  // TAB: RUTINAS
  // ==================================================================
  _renderRoutines() {
    return `
      <div class="gym-section-title">Rutinas predefinidas</div>
      <p style="margin-bottom: 14px; font-size:13px;">Elegí una rutina para iniciar tu entrenamiento con todos los ejercicios cargados.</p>

      ${GYM_ROUTINES.map(r => {
        const exNames = r.exercises.map(e => {
          const ex = this._findExercise(e.group, e.exId);
          return ex ? ex.icon : '';
        }).join(' ');
        return `
          <div class="card gym-routine-card tap-feedback" onclick="GymUI._startRoutine('${r.id}')">
            <div style="display:flex; align-items:center; justify-content:space-between;">
              <div style="flex:1; min-width:0;">
                <div style="font-weight:700; font-size:15px;">${r.name}</div>
                <div class="gym-routine-meta">${r.exercises.length} ejercicios · ${exNames}</div>
              </div>
              <span style="font-size: 18px; flex-shrink:0; margin-left: 8px;">▶</span>
            </div>
          </div>
        `;
      }).join('')}
    `;
  },

  // ==================================================================
  // TAB: EJERCICIOS
  // ==================================================================
  _renderExercises() {
    const groups = Object.keys(GYM_EXERCISES);
    return `
      <div class="gym-muscle-tabs">
        ${groups.map(g => `
          <button class="gym-muscle-tab ${this._selectedGroup === g ? 'active' : ''}" onclick="GymUI._selectGroup('${g}')">
            ${MUSCLE_LABELS[g]}
          </button>
        `).join('')}
      </div>

      <div class="gym-exercise-list">
        ${GYM_EXERCISES[this._selectedGroup].map(ex => `
          <div class="card gym-exercise-item tap-feedback" onclick="GymUI._addExerciseToSession('${this._selectedGroup}', '${ex.id}')">
            <div style="display:flex; align-items:center; gap:12px;">
              <div class="gym-exercise-icon">${ex.icon}</div>
              <div style="flex:1; min-width:0;">
                <div style="font-weight:700; font-size:14.5px;">${ex.name}</div>
                <div class="gym-exercise-meta">
                  ${ex.type === 'weight_reps' ? `${ex.defaultSets}x${ex.defaultReps} @ ${ex.defaultWeight}kg` :
                    ex.type === 'time' ? `${ex.defaultSets}x${ex.defaultTime}s` :
                    ex.type === 'time_dist' ? `${ex.defaultTime} min` :
                    `${ex.defaultSets}x${ex.defaultReps}`}
                </div>
              </div>
              <span style="color:var(--primary); font-weight:600; font-size:13px;">+ Agregar</span>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  },

  _selectGroup(g) {
    this._selectedGroup = g;
    this._render();
  },

  // ==================================================================
  // TAB: HISTORIAL
  // ==================================================================
  _renderHistory() {
    const workouts = GymStorage.getWorkouts().sort((a, b) => new Date(b.date) - new Date(a.date));

    if (workouts.length === 0) {
      return `
        <div class="card" style="text-align:center; padding: 40px 20px;">
          <div style="font-size: 40px; margin-bottom: 8px;">📋</div>
          <p style="font-size:14px; color:var(--text-muted);">Todavía no registraste entrenamientos.<br>Los que completes van a aparecer acá.</p>
        </div>
      `;
    }

    // Agrupar por fecha
    const grouped = {};
    workouts.forEach(w => {
      const dateKey = new Date(w.date).toLocaleDateString('es-AR', { weekday: 'long', day: 'numeric', month: 'long' });
      if (!grouped[dateKey]) grouped[dateKey] = [];
      grouped[dateKey].push(w);
    });

    return Object.entries(grouped).map(([date, ws]) => `
      <div class="gym-section-title" style="text-transform:capitalize;">${date}</div>
      ${ws.map(w => this._renderWorkoutCard(w)).join('')}
    `).join('');
  },

  // ==================================================================
  // ACCIONES
  // ==================================================================
  _findExercise(group, exId) {
    const list = GYM_EXERCISES[group] || [];
    return list.find(e => e.id === exId) || null;
  },

  _startQuickSession() {
    this._activeSession = {
      id: 'ws_' + Date.now(),
      startTime: Date.now(),
      routineName: 'Entrenamiento libre',
      exercises: []
    };
    GymStorage.setActive(this._activeSession);
    this._currentTab = 'exercises';
    this._render();
  },

  _startRoutine(routineId) {
    const routine = GYM_ROUTINES.find(r => r.id === routineId);
    if (!routine) return;

    const exercises = routine.exercises.map(e => {
      const ex = this._findExercise(e.group, e.exId);
      if (!ex) return null;
      return {
        group: e.group,
        exId: ex.id,
        name: ex.name,
        icon: ex.icon,
        type: ex.type,
        sets: Array.from({ length: ex.defaultSets || 3 }, () => ({
          reps: ex.defaultReps || 0,
          weight: ex.defaultWeight || 0,
          time: ex.defaultTime || 0,
          done: false
        }))
      };
    }).filter(Boolean);

    this._activeSession = {
      id: 'ws_' + Date.now(),
      startTime: Date.now(),
      routineName: routine.name,
      exercises
    };
    GymStorage.setActive(this._activeSession);
    this._currentTab = 'today';
    this._render();
  },

  _addExerciseToSession(group, exId) {
    const ex = this._findExercise(group, exId);
    if (!ex) return;

    if (!this._activeSession) {
      this._activeSession = {
        id: 'ws_' + Date.now(),
        startTime: Date.now(),
        routineName: 'Entrenamiento libre',
        exercises: []
      };
    }

    // Evitar duplicados
    if (this._activeSession.exercises.some(e => e.exId === exId)) return;

    this._activeSession.exercises.push({
      group,
      exId: ex.id,
      name: ex.name,
      icon: ex.icon,
      type: ex.type,
      sets: Array.from({ length: ex.defaultSets || 3 }, () => ({
        reps: ex.defaultReps || 0,
        weight: ex.defaultWeight || 0,
        time: ex.defaultTime || 0,
        done: false
      }))
    });

    GymStorage.setActive(this._activeSession);
    this._currentTab = 'today';
    this._render();
  },

  _finishSession() {
    if (!this._activeSession) return;

    // Calcular resumen
    const session = this._activeSession;
    session.endTime = Date.now();

    // Mostrar modal de confirmación con resumen
    const totalSets = session.exercises.reduce((s, ex) => s + (ex.sets || []).length, 0);
    const completedSets = session.exercises.reduce((s, ex) => s + (ex.sets || []).filter(set => set.done).length, 0);

    const overlay = document.getElementById('gymFinishModal');
    const content = document.getElementById('gymFinishContent');

    content.innerHTML = `
      <div class="modal-sheet-handle"></div>
      <h2 style="margin-bottom: 16px;">Resumen del entrenamiento</h2>
      <div class="gym-finish-stats">
        <div class="gym-stat-card">
          <div class="gym-stat-num">${session.routineName || 'Libre'}</div>
          <div class="gym-stat-label">Rutina</div>
        </div>
        <div class="gym-stat-card">
          <div class="gym-stat-num">${this._formatElapsedStatic(session.startTime, session.endTime)}</div>
          <div class="gym-stat-label">Duración</div>
        </div>
      </div>
      <div class="gym-finish-stats" style="margin-top:10px;">
        <div class="gym-stat-card">
          <div class="gym-stat-num">${session.exercises.length}</div>
          <div class="gym-stat-label">Ejercicios</div>
        </div>
        <div class="gym-stat-card">
          <div class="gym-stat-num">${completedSets}/${totalSets}</div>
          <div class="gym-stat-label">Series completadas</div>
        </div>
      </div>

      ${session.exercises.map((ex, i) => `
        <div class="gym-finish-exercise">
          <span>${ex.icon} ${ex.name}</span>
          <span class="gym-finish-sets">${ex.sets.map((s, si) => `<span class="gym-set-badge ${s.done ? 'done' : ''}" onclick="GymUI._toggleFinishSet(${i}, ${si})">${s.done ? '✓' : '—'}</span>`).join('')}</span>
        </div>
      `).join('')}

      <div style="display:flex; gap:10px; margin-top:20px;">
        <button class="btn btn-glass" style="flex:1;" onclick="GymUI._cancelFinish()">Seguir entrenando</button>
        <button class="btn btn-primary" style="flex:1;" onclick="GymUI._confirmFinish()">Guardar</button>
      </div>
    `;

    overlay.classList.add('active');
  },

  _toggleFinishSet(exIdx, setIdx) {
    if (!this._activeSession) return;
    const set = this._activeSession.exercises[exIdx].sets[setIdx];
    set.done = !set.done;
    GymStorage.setActive(this._activeSession);
    // Re-render modal content
    this._finishSession();
  },

  _cancelFinish() {
    document.getElementById('gymFinishModal').classList.remove('active');
  },

  _confirmFinish() {
    if (!this._activeSession) return;
    this._activeSession.endTime = Date.now();
    this._activeSession.date = new Date().toISOString();

    const workouts = GymStorage.getWorkouts();
    workouts.push({ ...this._activeSession });
    GymStorage.saveWorkouts(workouts);

    GymStorage.clearActive();
    this._activeSession = null;
    document.getElementById('gymFinishModal').classList.remove('active');

    this._currentTab = 'today';
    this._render();
  },

  _viewWorkoutDetail(workoutId) {
    const workouts = GymStorage.getWorkouts();
    const w = workouts.find(wo => wo.id === workoutId);
    if (!w) return;

    const overlay = document.getElementById('gymFinishModal');
    const content = document.getElementById('gymFinishContent');

    content.innerHTML = `
      <div class="modal-sheet-handle"></div>
      <h2 style="margin-bottom: 4px;">${w.routineName || 'Entrenamiento libre'}</h2>
      <p style="font-size:13px; color:var(--text-muted); margin-bottom:16px;">${this._formatDate(w.date)} · ${this._formatElapsedStatic(w.startTime, w.endTime || Date.now())}</p>

      ${(w.exercises || []).map(ex => `
        <div class="gym-finish-exercise">
          <div>
            <span>${ex.icon} ${ex.name}</span>
            <div class="gym-exercise-meta" style="margin-top:2px;">
              ${ex.sets.map((s, si) => {
                if (ex.type === 'weight_reps') return `${s.weight || 0}kg x ${s.reps || 0}`;
                if (ex.type === 'time') return `${s.time || 0}s`;
                if (ex.type === 'time_dist') return `${s.time || 0}min`;
                return `${s.reps || 0} reps`;
              }).join(' · ')}
            </div>
          </div>
        </div>
      `).join('')}

      <div style="display:flex; gap:10px; margin-top:20px;">
        <button class="btn btn-glass" style="flex:1;" onclick="GymUI._deleteWorkout('${w.id}')">Eliminar</button>
        <button class="btn btn-primary" style="flex:1;" onclick="GymUI._closeDetail()">Cerrar</button>
      </div>
    `;

    overlay.classList.add('active');
  },

  _deleteWorkout(id) {
    if (!confirm('¿Eliminás este entrenamiento?')) return;
    let workouts = GymStorage.getWorkouts();
    workouts = workouts.filter(w => w.id !== id);
    GymStorage.saveWorkouts(workouts);
    document.getElementById('gymFinishModal').classList.remove('active');
    this._render();
  },

  _closeDetail() {
    document.getElementById('gymFinishModal').classList.remove('active');
  }
};