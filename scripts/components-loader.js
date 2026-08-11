// Load HTML components dynamically
async function loadComponent(componentName, targetId) {
    try {
        const response = await fetch(`components/${componentName}.html`);
        if (!response.ok) {
            throw new Error(`Failed to load ${componentName}`);
        }
        const html = await response.text();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.innerHTML = html;
            
            // Execute any scripts in the loaded HTML
            const scripts = targetElement.querySelectorAll('script');
            scripts.forEach(oldScript => {
                const newScript = document.createElement('script');
                Array.from(oldScript.attributes).forEach(attr => {
                    newScript.setAttribute(attr.name, attr.value);
                });
                newScript.appendChild(document.createTextNode(oldScript.innerHTML));
                oldScript.parentNode.replaceChild(newScript, oldScript);
            });
        }
    } catch (error) {
        console.error(`Error loading component ${componentName}:`, error);
    }
}

// Load all components
async function loadAllComponents() {
    await loadComponent('header', 'header-container');
    await loadComponent('navigation', 'navigation-container');
    await loadComponent('footer', 'footer-container');
}

// Initialize component loading
document.addEventListener('DOMContentLoaded', function() {
    loadAllComponents();
});