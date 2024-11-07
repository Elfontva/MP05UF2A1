const { CalculaTipo } = require('./index');

// Los casos de prueba seleccionados se basan en el criterio CORRECT. Se han incluido pruebas
// para condiciones límite (e.g., venta en 500), operaciones y resultados esperados (e.g., factor = 100),
// rangos bajos y altos para ventas y retornos, y escenarios típicos y especiales para validar 
// la cobertura de todos los caminos lógicos.


test('Debería devolver 5 si la venta es mayor o igual a 500 y factor es 100', () => {
  expect(CalculaTipo(500, 0)).toBe(5);
});

test('Debería devolver 4 si la venta es mayor o igual a 500 y factor es mayor a 50', () => {
  expect(CalculaTipo(600, 200)).toBe(4);
});

test('Debería devolver 0 si la venta es mayor o igual a 500 y factor es 0', () => {
  expect(CalculaTipo(500, 500)).toBe(0);
});

test('Debería devolver 1 si la venta es mayor o igual a 500 y factor no cumple otras condiciones', () => {
  expect(CalculaTipo(500, 450)).toBe(1);
});

test('Debería devolver 3 si la venta es menor a 500 y factor es mayor a 50', () => {
  expect(CalculaTipo(400, 100)).toBe(3);
});

test('Debería devolver 2 si la venta es menor a 500 y factor no es mayor a 50', () => {
  expect(CalculaTipo(400, 350)).toBe(2);
});
