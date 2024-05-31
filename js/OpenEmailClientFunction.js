
function openEmailClient() {
    window.location.href = 'mailto:alexander.schnabl@outlook.com';
}

// Load JavaScript after DOM got initialized 
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('js_contactme').onclick = openEmailClient;
});
