class FooterComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css">
            <style>
                footer {
                    background-color: white;
                    text-align: center;
                    padding: 1rem 0;
                    border-top: 1px solid #d2d2d7;
                }
                .social-links {
                    display: flex;
                    justify-content: center;
                    gap: 1rem;
                    margin-bottom: 0.5rem;
                }
                .social-links a {
                    color: #1d1d1f;
                    font-size: 1.5rem;
                    transition: color 0.3s ease;
                }
                .social-links a:hover {
                    color: #0071e3;
                }
                p {
                    margin: 0;
                    color: #6c757d;
                }
            </style>
            <footer>
                <div class="social-links">
                    <a href="https://www.linkedin.com/in/zadie-moon/" target="_blank" aria-label="LinkedIn">
                        <i class="bi bi-linkedin"></i>
                    </a>
                    <a href="mailto:zadiemoon.println@gmail.com" aria-label="Email">
                        <i class="bi bi-envelope"></i>
                    </a>
                    <a href="https://www.youtube.com/channel/zadiemoon" target="_blank" aria-label="YouTube">
                        <i class="bi bi-youtube"></i>
                    </a>
                    <a href="https://github.com/zprintln/" target="_blank" aria-label="GitHub">
                        <i class="bi bi-github"></i>
                    </a>
                </div>
                <p>&copy; 2024 Zadie Moon. All rights reserved.</p>
            </footer>
        `;
    }
}

customElements.define('footer-component', FooterComponent);
