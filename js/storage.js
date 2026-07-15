const StorageApp = {
  // Guarda los datos del perfil calculados en el cuestionario
  saveProfile(profileData) {
    localStorage.setItem('nutrio_profile', JSON.stringify(profileData));
  },
  // Obtiene los datos del perfil guardados (si no existen, devuelve null)
  getProfile() {
    const profile = localStorage.getItem('nutrio_profile');
    return profile ? JSON.parse(profile) : null;
  },
  // Guarda la lista de ingredientes del supermercado de forma dinámica
  saveCart(cartData) {
    localStorage.setItem('nutrio_cart', JSON.stringify(cartData));
  },
  // Obtiene los ingredientes guardados (si no existen, devuelve un arreglo vacío)
  getCart() {
    const cart = localStorage.getItem('nutrio_cart');
    return cart ? JSON.parse(cart) : [];
  },
  // Borra por completo la memoria local para reiniciar la aplicación desde cero
  clearAll() {
    const keysToRemove = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('nutrio_')) {
        keysToRemove.push(key);
      }
    }
    keysToRemove.forEach(key => localStorage.removeItem(key));
  }
};
