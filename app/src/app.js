new Vue({
  el: '#app',
  data: {
    ingredientes: [
      'Carne de res', 
      'Cebolla', 
      'Tomate', 
      'Papa amarilla', 
      'Aji amarillo', 
      'Pollo', 
      'Leche evaporada', 
      'Pan',
      'Pescado',
      'Limón',
      'Culantro',
      'Maíz',
      'Atún',
      'Mayonesa',
      'Arroz'
    ],
    ingredientesSeleccionados: [],
    mensaje: 'Escoge los ingredientes para cocinar tu receta',
    receta: null
  },
  methods: {
    cocinar() {
      const receta = this.obtenerReceta(this.ingredientesSeleccionados);
      if (receta) {
        this.mensaje = `Felicidades has conseguido cocinar un ${receta.nombre}`;
        this.receta = receta;
      } else {
        this.mensaje = 'NO hay resultados';
        this.receta = null;
      }
    },
    obtenerReceta(ingredientesSeleccionados) {
      const recetas = [
        {
          nombre: 'Lomo Saltado',
          ingredientes: ['Carne de res', 'Cebolla', 'Tomate', 'Papa amarilla', 'Aji amarillo'],
          imagen: 'app/img/lomo_saltado.jpeg'
        },
        {
          nombre: 'Ceviche',
          ingredientes: ['Pescado', 'Limón', 'Culantro', 'Cebolla'],
          imagen: 'app/img/Ceviche.jpg'
        },
        {
          nombre: 'Ají de Gallina',
          ingredientes: ['Pollo', 'Leche evaporada', 'Pan', 'Aji amarillo'],
          imagen: 'app/img/ajidegallina.jpeg'
        },
        {
          nombre: 'Causa Limeña',
          ingredientes: ['Papa amarilla', 'Atún', 'Mayonesa', 'Aji amarillo'],
          imagen: 'app/img/causa_limeña.jpg'
        },
        {
          nombre: 'Arroz con Pollo',
          ingredientes: ['Pollo', 'Arroz', 'Culantro', 'Aji amarillo'],
          imagen: 'app/img/arrozconpollo.png'
        },
      ];
      
      for (const receta of recetas) {
        if (this.ingredientesIguales(new Set(receta.ingredientes), new Set(ingredientesSeleccionados))) {
          return receta;
        }
      }
      return null;
    },
    ingredientesIguales(set1, set2) {
      if (set1.size !== set2.size) return false;
      for (const item of set1) {
        if (!set2.has(item)) return false;
      }
      return true;
    }
  }
});
