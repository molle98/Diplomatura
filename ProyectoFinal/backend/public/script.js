// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Agregar un event listener a los botones de eliminar
    const deleteButtons = document.querySelectorAll('.delete-comic');
    deleteButtons.forEach(button => {
      button.addEventListener('click', async (event) => {
        event.preventDefault();
        const comicId = event.target.getAttribute('data-id');
        
        const response = await fetch(`http://localhost:3000/comics/delete/${comicId}`, {
          method: 'DELETE'
        });
  
        if (response.ok) {
          // Recargar la página para ver la lista actualizada de cómics
          window.location.reload();
        } else {
          console.error('Error al eliminar el cómic');
        }
      });
    });
  });
  