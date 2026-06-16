// Arreglo de objetos con datos de destinos turísticos
const destinosData = [
    { id: 1, nombre: "Salar de Uyuni", region: "Potosí", tipo: "Aventura", costo: "Económico" },
    { id: 2, nombre: "Parque Nacional Madidi", region: "La Paz", tipo: "Naturaleza", costo: "Moderado" },
    { id: 3, nombre: "Misiones Jesuíticas", region: "Santa Cruz", tipo: "Cultural", costo: "Moderado" },
    { id: 4, nombre: "Lago Titicaca", region: "La Paz", tipo: "Histórico", costo: "Económico" },
    { id: 5, nombre: "Toro Toro", region: "Potosí", tipo: "Aventura", costo: "Económico" },
    { id: 6, nombre: "Samaipata", region: "Santa Cruz", tipo: "Cultural", costo: "Moderado" }
];

document.addEventListener("DOMContentLoaded", () => {
    const tablaCuerpo = document.getElementById("tabla-destinos-cuerpo");
    const filtroRegion = document.getElementById("filtro-region");

    // Función para renderizar la tabla dinámicamente
    function cargarTabla(datos) {
        tablaCuerpo.innerHTML = "";
        if (datos.length === 0) {
            tablaCuerpo.innerHTML = `<tr><td colspan="4" class="text-center text-muted">No se encontraron destinos.</td></tr>`;
            return;
        }

        datos.forEach(dest => {
            const fila = document.createElement("tr");
            fila.innerHTML = `
                <td><strong>${dest.nombre}</strong></td>
                <td><span class="badge bg-secondary">${dest.region}</span></td>
                <td>${dest.tipo}</td>
                <td><span class="text-success fw-bold">${dest.costo}</span></td>
            `;
            tablaCuerpo.appendChild(fila);
        });
    }

    // Evento de filtrado en tiempo real sin recargar página
    filtroRegion.addEventListener("change", (e) => {
        const seleccion = e.target.value;
        if (seleccion === "Todos") {
            cargarTabla(destinosData);
        } else {
            const filtrados = destinosData.filter(d => d.region === seleccion);
            cargarTabla(filtrados);
        }
    });

    // Carga inicial
    cargarTabla(destinosData);
});