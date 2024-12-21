class HeaderComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css">
            <style>
                :host {
                    display: block;
                    position: fixed;
                    top: 20px;
                    left: 50%;
                    transform: translateX(-50%);
                    z-index: 1000;
                }
                nav {
                    display: flex;
                    align-items: center;
                    background-color: var(--header-bg-color);
                    border-radius: 30px;
                    padding: 10px 20px;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                    backdrop-filter: blur(10px);
                    transition: background-color 0.3s, box-shadow 0.3s;
                }
                .logo a {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 40px;
                    height: 40px;
                    background-color: var(--logo-bg-color);
                    color: var(--logo-text-color);
                    border-radius: 50%;
                    text-decoration: none;
                    font-weight: bold;
                    font-size: 1.2rem;
                    margin-right: 20px;
                    transition: background-color 0.3s;
                }
                .navigation {
                    list-style: none;
                    display: flex;
                    gap: 20px;
                    margin: 0;
                    padding: 0;
                }
                .navigation a {
                    text-decoration: none;
                    color: var(--nav-link-color);
                    font-weight: 500;
                    transition: color 0.3s;
                }
                .navigation a:hover {
                    color: var(--nav-link-hover-color);
                }
                #theme-toggle {
                    background: none;
                    border: none;
                    cursor: pointer;
                    margin-left: 20px;
                    font-size: 1.2rem;
                    color: var(--theme-toggle-color);
                    transition: color 0.3s;
                }
                #theme-toggle:hover {
                    color: var(--theme-toggle-hover-color);
                }
            </style>
            <nav>
                <div class="logo">
                    <a href="index.html">ZM</a>
                </div>
                <ul class="navigation">
                    <li><a href="work.html">Work</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li><a href="resume.html">Resume</a></li>
                </ul>
                <button id="theme-toggle">
                    <i class="bi bi-brightness-high" aria-label="Toggle Theme"></i>
                </button>
            </nav>
        `;

        this.isDarkMode = false;
    }

    connectedCallback() {
        this.shadowRoot.querySelector('#theme-toggle').addEventListener('click', () => this.toggleTheme());
    }

    toggleTheme() {
        this.isDarkMode = !this.isDarkMode;
        document.documentElement.setAttribute('data-theme', this.isDarkMode ? 'dark' : 'light');
        const iconClass = this.isDarkMode ? 'bi-moon' : 'bi-brightness-high';
        this.shadowRoot.querySelector('#theme-toggle i').className = `bi ${iconClass}`;
    }
}

customElements.define('header-component', HeaderComponent);
