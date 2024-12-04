document.querySelectorAll('.list-group-item').forEach(item => {
    item.addEventListener('click', () => {
        // Get the target modal ID from the data-bs-target attribute
        const modalId = item.getAttribute('data-bs-target');
        const modalElement = document.querySelector(modalId);

        // Initialize the Bootstrap modal
        const bsModal = new bootstrap.Modal(modalElement, {
            backdrop: true,  // Enable backdrop
            keyboard: true   // Allow ESC to close
        });

        // Show the modal
        bsModal.show();

        // Add an event listener for when the modal is hidden
        modalElement.addEventListener('hidden.bs.modal', () => {
            // Remove modal-open class
            document.body.classList.remove('modal-open');

            // Forcefully remove any leftover backdrop elements
            removeBackdrop();
        });
    });
});

// Function to remove any lingering modal backdrops
function removeBackdrop() {
    // Select all modal backdrops
    document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
        backdrop.remove();  // Remove each backdrop
    });
}

// Global fallback to ensure all backdrops are removed
document.addEventListener('hidden.bs.modal', removeBackdrop);

// Clean up any backdrops if the page loads with them
window.addEventListener('load', removeBackdrop);
